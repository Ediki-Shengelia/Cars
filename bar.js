document.getElementById('burger').addEventListener('click', function() {
  this.classList.toggle('open');
  document.querySelector('.nav-menu').classList.toggle('open');
});