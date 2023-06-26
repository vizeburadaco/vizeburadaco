document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Perform client-side validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Prepare data for submission
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
  
    // Send the form data to Formspree
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/maygwoaq"); // Replace with your Formspree endpoint
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Email sent successfully!");
        document.getElementById("contact-form").reset(); // Clear form fields
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    };
    xhr.send(formData);
  });
  
});


function toggleDropdown() {
  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('open');
}