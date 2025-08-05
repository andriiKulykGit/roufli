export const init = () => {
  const links = document.querySelectorAll('.discover__link');
  const sections = document.querySelectorAll('.discover__section');

  if (!links.length || !sections.length) {
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.discover__link[href="#${id}"]`);

        links.forEach(link => link.classList.remove('is-active'));
        if (activeLink) {
          activeLink.classList.add('is-active');
        }
      }
    });
  }, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
};
