const fs = require('fs');
const path = require('path');

const additionalCards = [
  {
    name: 'card-06.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 390" width="300" height="390">
      <rect width="300" height="390" rx="10" fill="#F8F8F5"/>
      <rect x="1" y="1" width="298" height="388" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="20" y="24" width="260" height="230" rx="8" fill="#181818"/>
      <!-- 3D perspective wireframe mesh -->
      <path d="M 40 200 L 150 100 L 260 200 L 150 230 Z" fill="none" stroke="#606EDB" stroke-width="2"/>
      <line x1="150" y1="100" x2="150" y2="230" stroke="#606EDB" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="150" cy="100" r="4" fill="#FFFFFF"/>
      <circle cx="260" cy="200" r="4" fill="#FFFFFF"/>
      <circle cx="40" cy="200" r="4" fill="#FFFFFF"/>
      <circle cx="150" cy="230" r="4" fill="#FFFFFF"/>
      <text x="24" y="285" font-family="sans-serif" font-size="14" font-weight="600" fill="#181818">3D Spatial Projection</text>
      <text x="24" y="305" font-family="sans-serif" font-size="11" fill="#666666">Camera matrices & depth slicing</text>
      <text x="24" y="335" font-family="sans-serif" font-size="10" fill="#606EDB" font-weight="600">STUDY // 006</text>
    </svg>`
  },
  {
    name: 'card-07.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 390" width="300" height="390">
      <rect width="300" height="390" rx="10" fill="#EEEEEC"/>
      <rect x="1" y="1" width="298" height="388" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="24" y="24" width="252" height="220" rx="8" fill="#FFFFFF" stroke="#E5E5E0" stroke-width="1"/>
      <!-- Mobile gesture wireframe -->
      <rect x="80" y="44" width="140" height="180" rx="16" fill="#F8F8F5" stroke="#181818" stroke-width="2"/>
      <path d="M 120 160 C 150 130 150 90 180 80" fill="none" stroke="#606EDB" stroke-width="3" stroke-linecap="round"/>
      <circle cx="120" cy="160" r="6" fill="#606EDB"/>
      <text x="24" y="280" font-family="sans-serif" font-size="14" font-weight="600" fill="#181818">Inertial Swipe Physics</text>
      <text x="24" y="300" font-family="sans-serif" font-size="11" fill="#666666">Micro-haptics & dampening</text>
      <text x="24" y="330" font-family="sans-serif" font-size="10" fill="#888884">FLOW // 007</text>
    </svg>`
  },
  {
    name: 'card-08.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 390" width="300" height="390">
      <rect width="300" height="390" rx="10" fill="#F8F8F5"/>
      <rect x="1" y="1" width="298" height="388" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="20" y="24" width="260" height="220" rx="8" fill="#F0F0EC"/>
      <!-- Typography specimen -->
      <text x="40" y="110" font-family="sans-serif" font-size="72" font-weight="700" fill="#181818">Rg</text>
      <line x1="30" y1="120" x2="270" y2="120" stroke="#606EDB" stroke-width="1.5"/>
      <line x1="30" y1="55" x2="270" y2="55" stroke="#D8D8D4" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="30" y1="150" x2="270" y2="150" stroke="#D8D8D4" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="40" y="180" font-family="sans-serif" font-size="20" font-weight="500" fill="#666666">Grotesque</text>
      <text x="24" y="280" font-family="sans-serif" font-size="14" font-weight="600" fill="#181818">Optical Kerning Spec</text>
      <text x="24" y="300" font-family="sans-serif" font-size="11" fill="#666666">Proportional baseline metrics</text>
      <text x="24" y="330" font-family="sans-serif" font-size="10" fill="#606EDB" font-weight="600">TYPE // 008</text>
    </svg>`
  },
  {
    name: 'card-09.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 390" width="300" height="390">
      <rect width="300" height="390" rx="10" fill="#ECECE8"/>
      <rect x="1" y="1" width="298" height="388" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="20" y="24" width="260" height="220" rx="8" fill="#181818"/>
      <!-- Audio wave curves -->
      <path d="M 30 140 Q 70 80, 110 140 T 190 140 T 270 140" fill="none" stroke="#666666" stroke-width="1.5"/>
      <path d="M 30 140 Q 90 40, 150 140 T 270 140" fill="none" stroke="#606EDB" stroke-width="2.5"/>
      <circle cx="150" cy="140" r="5" fill="#FFFFFF"/>
      <text x="24" y="280" font-family="sans-serif" font-size="14" font-weight="600" fill="#181818">Audio GLSL Waveform</text>
      <text x="24" y="300" font-family="sans-serif" font-size="11" fill="#666666">FFT Fourier transform buffer</text>
      <text x="24" y="330" font-family="sans-serif" font-size="10" fill="#888884">AUDIO // 009</text>
    </svg>`
  },
  {
    name: 'card-10.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 390" width="300" height="390">
      <rect width="300" height="390" rx="10" fill="#F8F8F5"/>
      <rect x="1" y="1" width="298" height="388" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="20" y="24" width="260" height="220" rx="8" fill="#EEEEEC"/>
      <!-- Golden spiral -->
      <rect x="40" y="44" width="140" height="140" fill="none" stroke="#D8D8D4" stroke-width="1"/>
      <rect x="180" y="44" width="80" height="80" fill="none" stroke="#D8D8D4" stroke-width="1"/>
      <path d="M 40 184 A 140 140 0 0 1 180 44 A 80 80 0 0 1 260 124" fill="none" stroke="#606EDB" stroke-width="2.5"/>
      <circle cx="260" cy="124" r="5" fill="#606EDB"/>
      <text x="24" y="280" font-family="sans-serif" font-size="14" font-weight="600" fill="#181818">Golden Ratio Spiral</text>
      <text x="24" y="300" font-family="sans-serif" font-size="11" fill="#666666">Harmonic layout proportions</text>
      <text x="24" y="330" font-family="sans-serif" font-size="10" fill="#606EDB" font-weight="600">STUDY // 010</text>
    </svg>`
  }
];

additionalCards.forEach(c => {
  const p = path.join(__dirname, '../public/images/hero', c.name);
  fs.writeFileSync(p, c.svg.trim());
});

console.log('Cards 06 to 10 successfully created!');
