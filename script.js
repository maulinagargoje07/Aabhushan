document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  function checkPosition() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const position = section.getBoundingClientRect();

          if (position.top < window.innerHeight && position.bottom > 0) {
              section.classList.add('fade-in');
          } else {
              section.classList.remove('fade-in');
          }
      }
  }

  checkPosition();
  window.addEventListener('scroll', checkPosition);
});
