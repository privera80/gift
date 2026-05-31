let corazonesInterval = null;

window.onload = function () {};

function playMusic() {
  document.body.classList.remove('not-loaded');

  var audio = document.getElementById('music');
  audio.play().catch(function () {
    document.addEventListener('click', function once() {
      audio.play();
      document.removeEventListener('click', once);
    });
  });

  var btn = document.querySelector('.btn-wrapper button');
  btn.textContent = '💕 Para ti, Thalita';

  iniciarCorazones();
  setTimeout(mostrarDedicatoria, 3500);
}

var emojisCorazon = ['❤️', '🌸', '💕', '💖', '🌹', '💗', '✨', '💓'];

function crearCorazon() {
  var el = document.createElement('div');
  el.classList.add('corazon');
  el.textContent = emojisCorazon[Math.floor(Math.random() * emojisCorazon.length)];

  var posX = Math.random() * 92 + 2;
  var size = (Math.random() * 1.4 + 0.9).toFixed(2);
  var duracion = (Math.random() * 3 + 3.5).toFixed(1);
  var deriva = (Math.random() * 60 - 30).toFixed(0);

  el.style.left = posX + '%';
  el.style.setProperty('--size', size);
  el.style.setProperty('--duracion', duracion + 's');
  el.style.setProperty('--deriva', deriva + 'px');

  document.body.appendChild(el);

  el.addEventListener('animationend', function () {
    el.remove();
  });
}

function iniciarCorazones() {
  crearCorazon();
  corazonesInterval = setInterval(crearCorazon, 450);
}

function mostrarDedicatoria() {
  document.getElementById('dedicatoria').classList.add('dedicatoria--visible');
}

function cerrarDedicatoria() {
  var dedicatoria = document.getElementById('dedicatoria');
  dedicatoria.classList.remove('dedicatoria--visible');
}
