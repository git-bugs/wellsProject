

const popups = () => {
  const callModal = document.querySelector('.popup-call'),
    popupDiscount = document.querySelector('.popup-discount'),
    sentence = document.querySelector('.sentence'),
    popupCheck = document.querySelector('.popup-check');


  const maskPhone = (elem, masked = '+7 (___) ___-__-__') => {
    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i != -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type == "blur" && this.value.length < 18) {
        this.value = "";
      }
    }
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }

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
      maskPhone(target);
    } else if (target.name === 'user_name') {
      textValid(target);
    }
  });

  document.querySelector('main').addEventListener('click', event => {
    if (event.target.classList.contains('phone-user')) {
      maskPhone(event.target);
    }
  });

  document.querySelector('.section-form').addEventListener('click', event => {
    if (event.target.classList.contains('phone-user')) {
      maskPhone(event.target);
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