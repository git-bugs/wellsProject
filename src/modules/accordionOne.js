const accordionOne = () => {
  const items = document.querySelectorAll('.constructor .panel'),
    switcher = document.querySelector('.onoffswitch-checkbox'),
    second = document.querySelector('.second'),
    bottomSwitcher = document.getElementById('myonoffswitch-two'),
    calcPopup = document.querySelector('.calc-popup'),
    calcResult = document.getElementById('calc-result');

  const data = {};

  document.querySelector('.constructor').addEventListener('click', event => {
    let target = event.target;
    if (target.closest('a')) {
      event.preventDefault();
      const id = target.closest('a').href.split('#')[1];
      if (target.closest('.collapse')) {
        target.closest('.collapse').classList.remove('in');
        document.getElementById(id).classList.add('in');
      } else if (target.closest('.panel-heading')) {
        items.forEach(item => {
          item.querySelector('.collapse').classList.remove('in');
          if (item.querySelector('.collapse').id === id) {
            document.getElementById(id).classList.add('in');
          }
        });
      }
    }
  });

  const showResult = (firstWellCoeff, secondWellCoeff) => {
    let result;
    if (bottomSwitcher.checked) {
      data.bottom = 'Есть';
      switcher.checked ? result = 10000 * firstWellCoeff * 1.1 : result = 10000 * firstWellCoeff + 5000 * secondWellCoeff * 1.2;
    } else {
      data.bottom = 'Нет'
      switcher.checked ? result = 10000 * firstWellCoeff : result = 10000 * firstWellCoeff + 5000 * secondWellCoeff;
    }
    if (switcher.checked) {
      delete data.wellSecondDiam;
      delete data.wellSecondCount;
    }
    data.result = Math.floor(result);

    let count = +calcResult.value;
    const totalAnimate = (x) => {
      const timer = () => {
        x ? count += 50 : count -= 50;
        calcResult.value = count.toFixed(0);
        if (count >= result && x) {
          calcResult.value = Math.floor(result);
          clearInterval(idAnimate);
        }
        if (count <= result && !x) {
          calcResult.value = Math.floor(result);
          clearInterval(idAnimate);
        }
      }
      const idAnimate = setInterval(timer, 1);
    };
    if (count < result) {
      totalAnimate(1)
    } else if (count > result) totalAnimate(0);

  };

  const calcCoeff = () => {
    const secondWell = document.querySelectorAll('.second .expand'),
      firstWell = document.querySelectorAll('.first .expand');
    const firstWellHeight = +firstWell[0].value.split(' ')[0],
      firstWellCount = +firstWell[1].value.split(' ')[0],
      secondWellHeight = +secondWell[0].value.split(' ')[0],
      secondWellCount = +secondWell[1].value.split(' ')[0];
    let firstWellCoeff = 1,
      secondWellCoeff = 1;

    if (firstWellHeight === 2) {
      firstWellCoeff = 1.2;
      if (firstWellCount === 2) {
        firstWellCoeff = firstWellCoeff * 1.3;
      } else if (firstWellCount === 3) {
        firstWellCoeff = firstWellCoeff * 1.5;
      }
    } else if (firstWellHeight !== 2) {
      firstWellCoeff = 1;
      if (firstWellCount === 2) {
        firstWellCoeff = firstWellCoeff * 1.3;
      } else if (firstWellCount === 3) {
        firstWellCoeff = firstWellCoeff * 1.5;
      }
    }
    if (!switcher.checked) {
      if (secondWellHeight === 2) {
        secondWellCoeff = 1.2;
        if (secondWellCount === 2) {
          secondWellCoeff *= 1.2;
        } else if (secondWellCount === 3) {
          secondWellCoeff *= 1.4;
        }
      } else {
        secondWellCoeff = 1;
      } if (secondWellCount === 2) {
        secondWellCoeff *= 1.2;
      } else if (secondWellCount === 3) {
        secondWellCoeff *= 1.4;
      }
    }
    data.wellOneDiam = firstWell[0].value;
    data.wellOneCount = firstWell[1].value;
    data.wellSecondDiam = secondWell[0].value;
    data.wellSecondCount = secondWell[1].value;
    showResult(firstWellCoeff, secondWellCoeff);
  };

  const sendDataCalc = () => {
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

    const error = 'Ошибка',
      load = 'Идет отправка',
      success = 'Отправлено';
    let statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px; color: grey;';
    calcPopup.append(statusMessage);
    data.name = calcPopup.querySelector('#name_1').value;
    data.phone = calcPopup.querySelector('#phone_1').value;
    statusMessage.textContent = load;    
    postData(data, () => {
      statusMessage.textContent = success;
      calcPopup.querySelectorAll('input').forEach(item => item.value = '');
      setTimeout(() => calcPopup.lastChild.remove(), 3000);
    }, () => {
      statusMessage.textContent = error;
      console.error(error);
      setTimeout(() => calcPopup.lastChild.remove(), 3000);
    });
  };

  calcPopup.addEventListener('submit', (event) => {
    event.preventDefault();
    sendDataCalc();
  });

  document.getElementById('collapseTwo').addEventListener('change', calcCoeff)

  switcher.addEventListener('change', () => {
    switcher.checked ? second.style.display = 'none' : second.style.display = 'block';
    switcher.checked ? data.type = '1' : data.type = '2';
    calcCoeff();
  });
  bottomSwitcher.addEventListener('change', calcCoeff);
};

export default accordionOne;