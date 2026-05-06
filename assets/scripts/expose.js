// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti();

  // Handle Horn Selection
  hornSelect.addEventListener('change', (e) => {
    const hornType = e.target.value;
    image.src = `assets/images/${hornType}.svg`;
    audio.src = `assets/audio/${hornType}.mp3`;
  });

  // Handle Volume Change
  volumeSlider.addEventListener('input', (e) => {
    const vol = parseInt(e.target.value);
    audio.volume = vol / 100; // Map 0-100 to 0.0-1.0

    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (vol >= 1 && vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (vol >= 33 && vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Handle Play Action
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}