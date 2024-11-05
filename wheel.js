export class SpinWheel {
  constructor(element, options) {
    this.wheel = element;
    this.options = options;
    this.currentRotation = 0;
    this.isSpinning = false;
    this.init();
  }

  init() {
    this.createWheel();
    this.setupEventListeners();
  }

  createWheel() {
    const radius = 150;
    const boxSize = 100;
    const centerOffset = 200;
    
    this.options.forEach((option, index) => {
      const angle = (index * 360) / this.options.length;
      const radian = (angle * Math.PI) / 180;
      
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      
      const box = document.createElement('div');
      box.className = 'prize-box';
      box.style.transform = `translate(${x + centerOffset - boxSize/2}px, ${y + centerOffset - boxSize/2}px) rotate(${angle}deg)`;
      
      const text = document.createElement('div');
      text.className = 'prize-text';
      text.textContent = option;
      text.style.transform = `rotate(-${angle}deg)`;
      
      box.appendChild(text);
      this.wheel.appendChild(box);
    });
  }

  setupEventListeners() {
    this.wheel.addEventListener('transitionend', () => {
      this.isSpinning = false;
      const winner = this.calculateWinner();
      this.announceWinner(winner);
    });
  }

  spin() {
    if (this.isSpinning) return;
    
    this.isSpinning = true;
    const extraSpins = 5;
    const randomAngle = Math.floor(Math.random() * 360);
    this.currentRotation += 360 * extraSpins + randomAngle;
    
    this.wheel.style.transform = `rotate(${this.currentRotation}deg)`;
  }

  calculateWinner() {
    const normalizedRotation = this.currentRotation % 360;
    const segmentAngle = 360 / this.options.length;
    const winningIndex = Math.floor((360 - (normalizedRotation % 360)) / segmentAngle);
    return this.options[winningIndex % this.options.length];
  }

  announceWinner(winner) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You got: ${winner}!`;
  }
}