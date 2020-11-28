const accordionTwo = () => {
  const accordion = document.querySelectorAll('.questions .panel'),
  questions = document.querySelector('.questions');


  questions.addEventListener('click', event => {
    let target = event.target;
    if(target.closest('.panel')){
      event.preventDefault();
      accordion.forEach(item => {
        item.querySelector('.collapse').classList.remove('in');
        if (item.closest('.panel') === target.closest('.panel')){
          item.querySelector('.collapse').classList.add('in')
        }
      }) 
    }
  });


};

export default accordionTwo;