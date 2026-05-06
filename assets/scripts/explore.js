// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('#explore button');
  const synth = window.speechSynthesis;

  const closedMouthSrc = 'assets/images/smiling.png';
  const openMouthSrc = 'assets/images/smiling-open.png';

  const populateVoices = () => {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = String(index);
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });

    if (voices.length > 0 && voiceSelect.value === 'select') {
      voiceSelect.selectedIndex = 1;
    }
  };

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.addEventListener('voiceschanged', populateVoices);
  }

  speakButton.addEventListener('click', () => {
    const voices = synth.getVoices();
    const selectedIndex = parseInt(voiceSelect.value, 10);
    const utterance = new SpeechSynthesisUtterance(textArea.value);

    if (!Number.isNaN(selectedIndex) && voices[selectedIndex]) {
      utterance.voice = voices[selectedIndex];
    }

    utterance.addEventListener('start', () => {
      faceImage.src = openMouthSrc;
    });
    utterance.addEventListener('end', () => {
      faceImage.src = closedMouthSrc;
    });
    utterance.addEventListener('error', () => {
      faceImage.src = closedMouthSrc;
    });

    synth.cancel();
    synth.speak(utterance);
  });
}