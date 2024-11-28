
/*********Script for container class changed to container-fluid******* */
// Function to update the class based on screen width
function updateContainerClass() {
    const menuElement = document.querySelector('.menu');

    if (window.innerWidth <= 992) { // For tablets and smaller screens
        menuElement.classList.remove('container');
        menuElement.classList.add('container-fluid');
    } else { // For desktop screens
        menuElement.classList.remove('container-fluid');
        menuElement.classList.add('container');
    }
}
// Update the class on page load
updateContainerClass();

// Update the class whenever the window is resized
window.addEventListener('resize', updateContainerClass);
/*********End of container class changed to container-fluid******* */
/***********Active class*************** */
// Ensure all links dynamically manage the 'active' class
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});

// Synchronize Scrollspy updates
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';

  // Detect the current section
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130; // Adjust for navbar height
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  // Update active link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/***********Animations********** */
