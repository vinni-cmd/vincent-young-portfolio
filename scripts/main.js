const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  const isOpened = navToggle.getAttribute('aria-expanded') === 'true';
  isOpened ?
    navToggle.setAttribute('aria-expanded', 'false') : navToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});


// page load animation 

const loader = document.querySelector('.loader')

window.addEventListener("load", () => {
  loader.classList.add('hide')
});

// animate on scroll using intersection observer
const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver( entries => {
  entries.forEach((entry)=>{
    entry.target.classList.toggle('show', entry.isIntersecting);
  })
});


hiddenElements.forEach((el) => observer.observe(el))