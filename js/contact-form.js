document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = this;
  const msg = document.getElementById('formMsg');
  const data = new FormData(form);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    });

    const result = await response.json();

    if (result.success) {
      msg.style.display = 'block';
      setTimeout(function() { msg.style.display = 'none'; }, 5000);
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Something went wrong. Please try again.');
  }
});