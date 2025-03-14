document.addEventListener('DOMContentLoaded', function() {
  const iconMenu = document.querySelector('.icon-menu');
  const menu = document.querySelector('.header-menu');
  iconMenu.addEventListener('click', function() {
    if(menu.classList.contains('active')) {
      menu.classList.remove('active')
    }else {
      menu.classList.add('active')

    }
  });

  const btnSpin = document.querySelector(".spin-main-btn");
  const spinImg = document.querySelector('.spin-main-img');
  if(btnSpin) {
    btnSpin.addEventListener('click', function() {
      spinImg.classList.add('active')
    });
  }

  const btnClosePopup = Array.from(document.querySelectorAll('.popup .btn-close-popup'));
  btnClosePopup.map(item => {
    item.addEventListener('click', function() {
      item.parentNode.parentNode.classList.add('hidden')
    })
  })
})