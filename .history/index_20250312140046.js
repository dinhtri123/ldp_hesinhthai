document.addEventListener('DOMContentLoaded', function() {
  const iconMenu = document.querySelector('.icon-menu');
  const menu = document.querySelector('.header-menu');
  iconMenu.addEventListener('click', function() {
    if(menu.classList.contains('active')) {
      menu.classList.remove('active')
    }else {
      menu.classList.remove('active')

    }
  })
})