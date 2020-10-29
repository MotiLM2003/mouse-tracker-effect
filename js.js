const cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.nav-linke li');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
