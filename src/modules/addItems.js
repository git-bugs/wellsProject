

const addItems = () => {
  const items = document.querySelectorAll('.sell-items .col-xs-12'),
    moreBtn = document.querySelector('.add-sentence-btn');


  const moreItems = () => {
    items.forEach(item => {
      moreBtn.style.display = 'none';
      item.classList.remove('visible-sm-block');
      item.classList.remove('hidden');
    })
  };

  moreBtn.addEventListener('click', moreItems);

};

export default addItems;




