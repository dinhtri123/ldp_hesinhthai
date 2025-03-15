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

  const popupRegister = document.querySelector(".popup-action-register");
  const popupLogin = document.querySelector(".popup-action-login");
  const btnRegister = document.querySelector(".btn-register")
  const btnLogin = document.querySelector(".btn-login")
  btnRegister.addEventListener("click", function () {
    popupRegister.classList.remove("hidden");
    popupLogin.classList.add("hidden");
  });
  btnLogin.addEventListener("click", function () {
    popupLogin.classList.remove("hidden");
    popupRegister.classList.add("hidden");
  });

  // 
  const btnShowPopup = Array.from(document.querySelectorAll('.show-popup'));
  btnShowPopup.map(item => {
    item.addEventListener('click', function() {
      popupLogin.classList.remove('hidden')
    });
  })
})