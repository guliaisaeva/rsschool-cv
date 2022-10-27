  // JS Show Menu

  const toggleEl = document.getElementById('nav-toggle');

  const navEl = document.getElementById('nav-menu');

  toggleEl.addEventListener('click', () => {
    toggleEl.classList.toggle('show');
    navEl.classList.toggle('show');
  });

  // active and show menu
  const navLink = document.querySelectorAll('.nav__link');
  function linkAction() {
    navLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');
    //     // remove menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
  }
  navLink.forEach((link) => link.addEventListener('click', linkAction));