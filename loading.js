document.body.classList.add('loading');

let progress = 0;
const fill = document.getElementById('progressFill');
const text = document.getElementById('progressText');
const loadingScreen = document.getElementById('loadingScreen');

let timer = setInterval(() => {
  progress += Math.floor(Math.random() * 8) + 5; 
  if (progress > 100) progress = 100;
  
  fill.style.width = progress + '%';
  text.textContent = progress + '%';

  if (progress === 100) {
    clearInterval(timer);
    setTimeout(() => {
      loadingScreen.style.opacity = 0;
      document.body.classList.remove('loading');
      setTimeout(() => loadingScreen.remove(), 500);
    }, 300);
  }
}, 50);



