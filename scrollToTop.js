// back to the top button

// Function to handle scrolling and showing/hiding the "Back to Top" button
function handleScroll() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    // Show or hide the button based on the scroll position
    if (scrollPosition > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  }
  
  //  scroll back to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // event listeners
  document.addEventListener('scroll', handleScroll);
  document.getElementById('backToTopBtn').addEventListener('click', scrollToTop);
  