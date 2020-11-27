const consultation = () => {
  const popupConsultation = document.querySelector('.popup-consultation'),
    form = document.querySelector('.popup-consultation .capture-form'),
    director = document.querySelector('.director');

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

  const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        outputData();
      } else {
        errorData(request.status);
      }
    });
    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'multipart/json');
    request.send(JSON.stringify(body));
  };
  const sendData = () => {
    const error = 'Ошибка',
      load = 'Идет отправка',
      success = 'Отправлено';
    let statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px; color: grey;';
    form.append(statusMessage);
    statusMessage.textContent = load;
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    body.question = director.querySelector('input').value;
    postData(body, () => {
      statusMessage.textContent = success;
      popupConsultation.querySelectorAll('input').forEach(item => item.value = '');
      setTimeout(() => form.lastChild.remove(), 3000);
    }, () => {
      statusMessage.textContent = error;
      console.error(error);
      setTimeout(() => form.lastChild.remove(), 3000);
    });


  };
  popupConsultation.addEventListener('submit', (event) => {
    event.preventDefault();
    sendData();
  });

  document.querySelector('.director-form').addEventListener('submit', event => {
    event.preventDefault();
    popupAnimate('.popup-consultation');
  })

  popupConsultation.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('popup-close') || !target.closest('.popup-content')) {
      popupConsultation.style.display = 'none';
    }
  })
};

export default consultation;