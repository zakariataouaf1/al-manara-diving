// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var msg = document.getElementById('formMsg');
  msg.style.display = 'block';
  setTimeout(function() { msg.style.display = 'none'; }, 5000);
  this.reset();
});
