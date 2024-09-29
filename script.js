// Smooth scrolling for navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact form validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to handle validation
  
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Message sent successfully!');
      // You can add more logic here, like sending form data to your email service
    }
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  
  // Open social media links in new tab
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function (e) {
      window.open(this.href, '_blank');
    });
  });
  
