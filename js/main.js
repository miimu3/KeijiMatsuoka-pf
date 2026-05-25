document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.header__menu-button');
  const nav = document.querySelector('.header__navi');
  const profile = document.querySelector('#profile');
  const contact = document.querySelector('#contact');
  const yearSpan = document.getElementById('js-year');

  // 年号自動
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ナビ開閉
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-active');
    nav.classList.toggle('is-open');
    header.classList.toggle('is-open');
  });

  // IntersectionObserver
  const observerProfile = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) document.body.classList.add('is-dark');
      else document.body.classList.remove('is-dark');
    });
  }, { rootMargin: "-30% 0px -70% 0px", threshold: 0 });

  const observerContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) document.body.classList.remove('is-dark');
    });
  }, { rootMargin: "-70% 0px -30% 0px", threshold: 0 });

  observerProfile.observe(profile);
  observerContact.observe(contact);
});