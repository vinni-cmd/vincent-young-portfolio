const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})


// page load animation

const loader = document.querySelector('.loader')

window.addEventListener("load", () => {
  loader.classList.add('hide')
});
