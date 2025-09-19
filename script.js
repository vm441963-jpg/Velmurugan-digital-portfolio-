
// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  alert("Thank you! Your message has been sent successfully.");
  
  // Reset form fields
  this.reset();
});