import './style.css';
import { SpinWheel } from './wheel.js';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-white mb-4">Spin the Wheel!</h1>
      <button id="spinButton" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
        SPIN
      </button>
    </div>
    
    <div class="wheel-container">
      <div id="wheel" class="wheel"></div>
    </div>
    
    <div id="result" class="mt-8 text-2xl font-bold text-white"></div>
  </div>
`;

const options = [
  'Prize 1',
  'Prize 2',
  'Prize 3',
  'Prize 4',
  'Prize 5',
  'Prize 6',
  'Prize 7',
  'Prize 8'
];

const wheel = new SpinWheel(document.getElementById('wheel'), options);
const spinButton = document.getElementById('spinButton');

spinButton.addEventListener('click', () => {
  wheel.spin();
});