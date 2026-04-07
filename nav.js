document.addEventListener('DOMContentLoaded', function () { // waitning until whole page is loaded
  const hamburger = document.getElementById('hamburger'); // getting hamburger option using its id
  const navbar = document.getElementById('main-navbar'); // importing navbar menuy using its id

  if (!hamburger || !navbar) return; // if no hamburger or navbar, stop exeution

  hamburger.addEventListener('click', function () { // if hamburger is clicked this function will run
    navbar.classList.toggle('open'); // will add or remove 'open' class to navbar to show or hide menu
    hamburger.setAttribute('aria-expanded', navbar.classList.contains('open')); // update space for screen to know if menu is open or closed for accessibility in mobile
  });

  // Close menu when clicking outside on mobile
  document.addEventListener('click', function (event) { 
    if (!navbar.classList.contains('open')) return; // if menu is not open then do nothing
    if (event.target === hamburger || navbar.contains(event.target)) return; // if click is on hamburger or inside navabr do nothing
    navbar.classList.remove('open'); // if click outside of that region then close menu by removing 'open' class
    hamburger.setAttribute('aria-expanded', 'false'); // make the screen back to normal after closing menu
  });
});
