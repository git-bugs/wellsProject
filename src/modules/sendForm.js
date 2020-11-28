const sendForm = () => {

  const post = target => {
    const error = 'Ошибка',
      load = 'Идет отправка',
      success = 'Отправлено';
    const form = target.closest('form');
    let statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px; color: grey;';
    form.append(statusMessage);
    const formData = new FormData(form);
    statusMessage.textContent = load;
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = success;
      setTimeout(() => {
        form.lastChild.remove();
        form.querySelectorAll('input').forEach(item => item.value = '');
      }, 3000);
    }, () => {
      statusMessage.textContent = error;
      console.error(error);
      setTimeout(() => form.lastChild.remove(), 3000);
    });
  }

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

  document.body.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!event.target.closest('.calc-popup') && !event.target.classList.contains('director-form') && !event.target.classList.contains('consultation-form')) {
      post(event.target);
    }
  });

};

export default sendForm;