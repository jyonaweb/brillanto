/**************************************Scripts for Animations***************************************/
/**************************************
navigation menu
***************************************/

document.addEventListener('DOMContentLoaded', () => {
  // GSAP timeline for navbar animation
  const timeline = gsap.timeline();

  gsap.from(".navbar-brand", {
scale: 0.1,           // Start smaller
opacity: 1,           // Start invisible
duration: 1.5,        // Duration for the zoom-in effect
ease: "power2",   // Easing function for smooth zoom
scrollTrigger: {
  trigger: ".navbar-brand",  // Target the h2 elements
  start: "top 30%",    // Trigger when 80% of the element is in the viewport
  end: "top 50%",      // End when the element is 30% into the viewport
  toggleActions: "play none none none", // Play animation when in the viewport
}

});

  // Animate Navbar Menu Items (Slide in from top)
  gsap.utils.toArray(".navbar-nav .nav-item").forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      y: -200,          // Slide from the top
      opacity: 1,      // Fade in
      duration: 1.5,
      delay: index * 0.4, // Staggered delay for each item
      ease: "power2",
    });
  });

});
/**************************************
Pink Banner content
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Animate Hero Image (#hero-image) with proper ScrollTrigger
  gsap.fromTo(
    "#hero-image",
    { x: 150, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the right)
    {
      x: 0, // Move to original position
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#hero-image", // Trigger animation on #hero-image
        start: "top 80%", // Start when 80% of the image is visible
        end: "top 10%", // End when 10% of the image is visible
        toggleActions: "play reverse play reverse", // Play and reverse animation on scroll
        markers: false, // Debugging markers (set to true for testing)
      },
    }
  );

  // Create a timeline for sequential animations
  const heroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-heading", // Base the animation on #hero-heading
      start: "top 80%", // Start animation when heading is 80% visible
      end: "top 10%", // End animation when heading is 20% into the viewport
      toggleActions: "play none none none", // Replay on scroll up/down
      markers: false, // Debugging markers (set to true for testing)
    },
  });

  // Animate H1 (#hero-heading)
  heroTimeline.fromTo(
    "#hero-heading",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0, // Move to original position
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Slight delay after Hero Image animation
  );

  // Animate Paragraph (#hero-paragraph)
  heroTimeline.fromTo(
    "#hero-paragraph",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Delay after H1 animation
  );

  // Animate Button (#hero-button)
  heroTimeline.fromTo(
    "#hero-button",
    { x: -150, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1,
      ease: "power2.out",
    },
    "+=0" // Delay after Paragraph animation
  );
});

/**************************************
Headings 
***************************************/
document.addEventListener('DOMContentLoaded', () => {
// Ensure GSAP and ScrollTrigger are available
gsap.registerPlugin(ScrollTrigger);

// Select all headings (modify selector as needed)
const headings = document.querySelectorAll('h2, h5.card-title');

headings.forEach((heading) => {
  gsap.fromTo(
    heading,
    { scale: 0.1, opacity: 0 }, // Initial state
    {
      scale: 1, // End state
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%', // Start animation when 80% of the element is in the viewport
        end: 'top 10%', // End animation at 20%
        toggleActions: 'play reverse play reverse', // Play on scroll down, reverse on scroll up
      },
    }
  );
});
});
/**************************************
Left content Right Image
***************************************/
document.addEventListener('DOMContentLoaded', () => {
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Combine selectors
const allElements = document.querySelectorAll('h3.left-heading, #testimonialSlider, .left-animation, .left-animation.noscroll');

// Loop through all elements
allElements.forEach((element) => {
  // Determine toggleActions based on the class
  const toggleActions = element.classList.contains('noscroll')
    ? 'play none none none' // One-time animation for .noscroll elements
    : 'play reverse play reverse'; // Replay animation for other elements

  // Apply GSAP animation
  gsap.fromTo(
    element,
    { x: -100, opacity: 0 }, // Start off-screen to the left
    {
      x: 0, // Move to original position
      opacity: 1, // Fully visible
      duration: 1.5, // Animation duration
      ease: 'power2',
      scrollTrigger: {
        trigger: element, // Trigger animation on this element
        start: 'top 80%', // Start animation when 80% visible
        end: 'top 10%', // End animation when 10% visible
        toggleActions: toggleActions, // Use determined toggleActions
        markers: false, // Set to true for debugging
      },
    }
  );
});
//////
// Slide image from right
const image = document.querySelector(".right-img-animation");
if (image) {
 gsap.fromTo(
   image,
   { x: 50, opacity: 0 }, // Start off-screen to the right
   {
     x: 0, // Move to original position
     opacity: 1, // Fade in
     duration: 1, // Animation duration
     ease: 'power2.out',
     scrollTrigger: {
       trigger: image, // Animate when the image is in view
       start: 'top 80%', // Trigger when 80% of the image is in the viewport
       end: 'top 10%', // End when the top reaches 20%
       toggleActions: 'play reverse play reverse', // Replay on scroll up/down
       markers: false, // Debug markers (set to true to see them)
     },
   }
 );
}
////

});


/**************************************
Image Gallery
***************************************/
document.addEventListener('DOMContentLoaded', () => {
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target all gallery items
const galleryItems = document.querySelectorAll('.image-wrapper');

galleryItems.forEach((item, index) => {
  const image = item.querySelector('img');
  const caption = item.querySelector('.caption');

  // Image animation
  gsap.fromTo(
    image,
    { y: 50, opacity: 0 }, // Start slightly below and transparent
    {
      y: 0, // Move to original position
      opacity: 1, // Fully visible
      duration: 1, // Animation duration
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item, // Trigger animation on each image-wrapper
        start: 'top 90%', // Start when top of item is 90% visible
        end: 'top 10%', // End when top is 20% visible
        toggleActions: 'play reverse play reverse', // Replay on scroll up/down
      },
    }
  );

  // Caption animation
  gsap.fromTo(
    caption,
    { y: 30, opacity: 0 }, // Start slightly below and transparent
    {
      y: 0, // Move to original position
      opacity: 1, // Fully visible
      duration: 1,
      delay: 0.2, // Slight delay after image animation
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        end: 'top 10%',
        toggleActions: 'play reverse play reverse',
      },
    }
  );
});
});
/**************************************
End
***************************************/