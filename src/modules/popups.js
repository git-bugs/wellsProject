

const popups = () => {
  const callModal = document.querySelector('.popup-call'),
    popupDiscount = document.querySelector('.popup-discount'),
    sentence = document.querySelector('.sentence'),
    popupCheck = document.querySelector('.popup-check');
    


  const phoneValid = target => {
    target.addEventListener('input', () => {
      target.value = target.value.replace(/[^\+\d]/, '');
    })
  };

  const textValid = target => {
    target.addEventListener('input', () => {
      target.value = target.value.replace(/[^а-я ]/i, '');
    })
  };

  const popupAnimate = (id) => {
    const modal = document.querySelector(id);
    modal.querySelector('.popup-content').style.top = '-50%';
    modal.style.display = 'block';
    let count = -50;
    const timer = () => {
      count++;
      modal.querySelector('.popup-content').style.top = count + '%';
      if (count >= 20) clearInterval(timerId);
    }
    const timerId = setInterval(timer, 1)
  };

  document.body.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('call-btn')) {
      event.preventDefault();
      popupAnimate('.popup-call');
    } else if (target.classList.contains('popup-close') || !target.closest('.popup-content')) {
      callModal.style.display = 'none';
    } else if (target.classList.contains('phone-user')) {
      phoneValid(target);
    } else if (target.name === 'user_name') {
      textValid(target);
    }
  });

  document.querySelector('main').addEventListener('click', event => {
    if (event.target.classList.contains('phone-user')) {
      phoneValid(event.target);
    }
  });

  document.querySelector('.section-form').addEventListener('click', event => {
    if (event.target.classList.contains('phone-user')) {
      phoneValid(event.target);
    } else if (event.target.name === 'user_name') {
      textValid(event.target);
    }
  });

  sentence.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('sentence-btn')) {
      popupAnimate('.popup-discount');
    }
  });

  popupDiscount.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('popup-close') || !target.closest('.popup-content')) {
      popupDiscount.style.display = 'none';
    }
  });

  document.querySelector('.gauging-button').addEventListener('click', event => {
    popupAnimate('.popup-check');
  });
  popupCheck.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('popup-close') || !target.closest('.popup-content')) {
      popupCheck.style.display = 'none';
    }
  })
};


export default popups;