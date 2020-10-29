const cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.nav-links li');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

console.log(links);

links.forEach((link) => {
  link.addEventListener('mouseover', (e) => {
    console.log('over');
    cursor.classList.add('scale');
    link.classList.add('hoverd-link');
  });
  console.log(link);

  link.addEventListener('mouseleave', () => {
    console.log('leave');
    cursor.classList.remove('scale');
    link.classList.remove('hoverd-link');
  });
});
