// Smooth Scroll

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Form Validation

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
  } else {
    alert('Thank you for your message!');
    form.reset();
  }
});
