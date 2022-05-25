
import Notiflix from 'notiflix';


  const refForm = document.querySelector('.form')
  const refFirstDelay = document.querySelector('[name=delay]')
  const refDelayStep =  document.querySelector('[name=step]')
  const refAmount = document.querySelector('[name=amount]')
  const refStartBtn = document.querySelector('.form button')

 refForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) { 
  evt.preventDefault();

  const firstDelayValue = Number(refFirstDelay.value);
  const delayStepValue = Number(refDelayStep.value);
  const amountValue = Number(refAmount.value);

  let delay = firstDelayValue - delayStepValue;

  for (let i = 1; i <= amountValue; i += 1) {
    delay += delayStepValue;
    createPromise(i, delay)
      .then(({ position, delay }) => { onFulfilled({ position, delay }) })
      .catch(({ position, delay }) => { onRejected({ position, delay }) });
 }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position: position, delay: delay });
      }
      else {
        // Reject
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}

function onFulfilled({position,delay}) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
  
 function onRejected({ position, delay }){
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  };
