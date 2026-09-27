const fs = require('fs');
const path = require('path');

function writeSvg(filePath, svgContent) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, svgContent.trim());
}

// 1. HERO HANGING CARDS
const heroCards = [
  {
    name: 'card-01.svg',
    width: 320,
    height: 420,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 420" width="320" height="420">
      <defs>
        <pattern id="hgrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#B8B8B4" opacity="0.6"/>
        </pattern>
      </defs>
      <rect width="320" height="420" rx="12" fill="#ECECE8"/>
      <rect x="1" y="1" width="318" height="418" rx="11" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="16" y="16" width="288" height="388" fill="url(#hgrid)"/>
      <!-- Header row -->
      <circle cx="36" cy="36" r="5" fill="#8614FF"/>
      <circle cx="52" cy="36" r="5" fill="#B8B8B4"/>
      <line x1="72" y1="36" x2="220" y2="36" stroke="#181818" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="280" y="39" font-family="monospace" font-size="10" fill="#666666" text-anchor="end">SYS.01</text>
      <!-- Visual diagram -->
      <rect x="32" y="64" width="256" height="180" rx="8" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1"/>
      <rect x="48" y="80" width="120" height="24" rx="4" fill="#EEEEEC"/>
      <line x1="48" y1="120" x2="260" y2="120" stroke="#E0E0DC" stroke-width="1"/>
      <line x1="48" y1="140" x2="210" y2="140" stroke="#E0E0DC" stroke-width="1"/>
      <line x1="48" y1="160" x2="180" y2="160" stroke="#E0E0DC" stroke-width="1"/>
      <circle cx="230" cy="92" r="16" fill="#8614FF" opacity="0.15"/>
      <circle cx="230" cy="92" r="6" fill="#8614FF"/>
      <!-- Graph curve -->
      <path d="M 48 210 Q 110 180 160 200 T 260 165" fill="none" stroke="#8614FF" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Blueprint annotations -->
      <text x="32" y="275" font-family="monospace" font-size="11" font-weight="600" fill="#181818" letter-spacing="1">CANVAS ARCHITECTURE</text>
      <text x="32" y="295" font-family="sans-serif" font-size="10" fill="#666666">Multi-threaded spatial rendering</text>
      <!-- Bottom meta -->
      <rect x="32" y="325" width="70" height="22" rx="4" fill="#E4E4E0"/>
      <text x="67" y="340" font-family="monospace" font-size="9" fill="#181818" text-anchor="middle">v2.4.0</text>
      <text x="288" y="340" font-family="monospace" font-size="10" fill="#8614FF" text-anchor="end" font-weight="bold">ACTIVE</text>
      <!-- Hanging eyelet -->
      <circle cx="160" cy="12" r="4" fill="none" stroke="#181818" stroke-width="1.5"/>
    </svg>`
  },
  {
    name: 'card-02.svg',
    width: 280,
    height: 360,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 360" width="280" height="360">
      <rect width="280" height="360" rx="8" fill="#F8F8F5"/>
      <rect x="1" y="1" width="278" height="358" rx="7" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <!-- Polaroid photo inset -->
      <rect x="18" y="20" width="244" height="240" rx="4" fill="#242424"/>
      <!-- Minimal abstract landscape within polaroid -->
      <circle cx="140" cy="110" r="46" fill="#8614FF"/>
      <path d="M 18 210 Q 80 150 140 190 T 262 170 L 262 260 L 18 260 Z" fill="#383838"/>
      <path d="M 18 230 Q 90 190 170 220 T 262 210 L 262 260 L 18 260 Z" fill="#181818"/>
      <!-- Handwritten style caption -->
      <text x="24" y="295" font-family="serif" font-style="italic" font-size="14" fill="#181818">Studio desk, morning light</text>
      <text x="24" y="320" font-family="monospace" font-size="10" fill="#888884">OCT 2026 / 35MM</text>
      <circle cx="245" cy="305" r="8" fill="#ECECE8" stroke="#8614FF" stroke-width="1"/>
      <text x="245" y="308" font-family="sans-serif" font-size="8" fill="#8614FF" text-anchor="middle" font-weight="bold">#4</text>
      <!-- Hanging eyelet -->
      <circle cx="140" cy="10" r="3.5" fill="none" stroke="#181818" stroke-width="1.5"/>
    </svg>`
  },
  {
    name: 'card-03.svg',
    width: 300,
    height: 390,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 390" width="300" height="390">
      <rect width="300" height="390" rx="10" fill="#EEEEEC"/>
      <rect x="1" y="1" width="298" height="388" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="20" y="24" width="260" height="150" rx="6" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1"/>
      <!-- Color swatch tokens -->
      <g transform="translate(36, 44)">
        <rect x="0" y="0" width="46" height="46" rx="6" fill="#181818"/>
        <rect x="56" y="0" width="46" height="46" rx="6" fill="#666666"/>
        <rect x="112" y="0" width="46" height="46" rx="6" fill="#D8D8D4"/>
        <rect x="168" y="0" width="46" height="46" rx="6" fill="#8614FF"/>
        <text x="23" y="62" font-family="monospace" font-size="8" fill="#666666" text-anchor="middle">#181818</text>
        <text x="79" y="62" font-family="monospace" font-size="8" fill="#666666" text-anchor="middle">#666666</text>
        <text x="135" y="62" font-family="monospace" font-size="8" fill="#666666" text-anchor="middle">#D8D8D4</text>
        <text x="191" y="62" font-family="monospace" font-size="8" fill="#8614FF" text-anchor="middle">#8614FF</text>
      </g>
      <!-- Typography specimen -->
      <text x="24" y="210" font-family="sans-serif" font-size="28" font-weight="700" fill="#181818">Aa Bb 09</text>
      <text x="24" y="235" font-family="monospace" font-size="11" fill="#666666">DM SANS / EDITORIAL TOKEN</text>
      <line x1="24" y1="255" x2="276" y2="255" stroke="#D8D8D4" stroke-width="1"/>
      <!-- Grid specs -->
      <text x="24" y="280" font-family="monospace" font-size="10" fill="#181818">BASE UNIT: 8PX</text>
      <text x="24" y="300" font-family="monospace" font-size="10" fill="#181818">RADIUS: 6PX / 12PX</text>
      <text x="24" y="320" font-family="monospace" font-size="10" fill="#181818">SURFACE: #F5F5F2</text>
      <rect x="220" y="270" width="56" height="56" rx="8" fill="#8614FF" opacity="0.1"/>
      <rect x="228" y="278" width="40" height="40" rx="6" fill="none" stroke="#8614FF" stroke-width="2"/>
      <circle cx="150" cy="12" r="4" fill="none" stroke="#181818" stroke-width="1.5"/>
    </svg>`
  },
  {
    name: 'card-04.svg',
    width: 290,
    height: 380,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 380" width="290" height="380">
      <rect width="290" height="380" rx="10" fill="#ECECE8"/>
      <rect x="1" y="1" width="288" height="378" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <!-- Graph nodes UI -->
      <rect x="20" y="24" width="250" height="230" rx="8" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1"/>
      <circle cx="65" cy="80" r="18" fill="#181818"/>
      <circle cx="190" cy="70" r="14" fill="#8614FF"/>
      <circle cx="140" cy="160" r="22" fill="#ECECE8" stroke="#181818" stroke-width="2"/>
      <circle cx="215" cy="180" r="12" fill="#666666"/>
      <!-- Curved links -->
      <path d="M 65 80 Q 110 50 190 70" fill="none" stroke="#D8D8D4" stroke-width="2" stroke-dasharray="3 3"/>
      <path d="M 65 80 Q 90 140 140 160" fill="none" stroke="#181818" stroke-width="2"/>
      <path d="M 140 160 Q 180 150 190 70" fill="none" stroke="#8614FF" stroke-width="2"/>
      <path d="M 140 160 Q 180 180 215 180" fill="none" stroke="#666666" stroke-width="1.5"/>
      <text x="24" y="285" font-family="monospace" font-size="11" font-weight="700" fill="#181818">FLOW GRAPH v4</text>
      <text x="24" y="305" font-family="sans-serif" font-size="10" fill="#666666">Procedural layout engine</text>
      <rect x="24" y="330" width="242" height="6" rx="3" fill="#D8D8D4"/>
      <rect x="24" y="330" width="160" height="6" rx="3" fill="#8614FF"/>
      <circle cx="145" cy="12" r="4" fill="none" stroke="#181818" stroke-width="1.5"/>
    </svg>`
  },
  {
    name: 'card-05.svg',
    width: 270,
    height: 350,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 350" width="270" height="350">
      <rect width="270" height="350" rx="10" fill="#F8F8F5"/>
      <rect x="1" y="1" width="268" height="348" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <!-- Stamp badge -->
      <rect x="180" y="24" width="66" height="28" rx="4" fill="#8614FF"/>
      <text x="213" y="42" font-family="monospace" font-size="9" fill="#F5F5F2" text-anchor="middle" font-weight="bold">PROTOTYPE</text>
      <!-- Sketch lines -->
      <rect x="24" y="65" width="222" height="175" rx="6" fill="#ECECE8" stroke="#D8D8D4" stroke-width="1"/>
      <path d="M 40 150 C 70 80, 120 200, 180 110 S 230 160, 230 130" fill="none" stroke="#181818" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="80" cy="120" r="4" fill="#8614FF"/>
      <circle cx="180" cy="110" r="4" fill="#8614FF"/>
      <text x="24" y="270" font-family="monospace" font-size="11" fill="#181818" font-weight="600">SPEC NO. 082</text>
      <text x="24" y="290" font-family="sans-serif" font-size="10" fill="#666666">Interpolated bezier easing study</text>
      <text x="24" y="315" font-family="monospace" font-size="9" fill="#888884">FIGMA / PROTOPACK</text>
      <circle cx="135" cy="12" r="4" fill="none" stroke="#181818" stroke-width="1.5"/>
    </svg>`
  }
];

heroCards.forEach(c => {
  writeSvg(path.join(__dirname, '../public/images/hero', c.name), c.svg);
});

// 2. EMERGENT COLLECTIONS (4 collections, 4 images each)
const emergentGalleries = ['builder', 'ai-product', 'design-system', 'growth'];

emergentGalleries.forEach((galleryKey) => {
  for (let i = 1; i <= 4; i++) {
    const num = i < 10 ? `0${i}` : `${i}`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <pattern id="grid-${galleryKey}-${i}" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D8D8D4" opacity="0.8"/>
        </pattern>
      </defs>
      <rect width="800" height="600" fill="#F2F2EF"/>
      <rect x="2" y="2" width="796" height="596" fill="none" stroke="#D8D8D4" stroke-width="2"/>
      <rect x="30" y="30" width="740" height="540" fill="url(#grid-${galleryKey}-${i})"/>
      
      <!-- Top header bar -->
      <rect x="50" y="50" width="700" height="44" rx="8" fill="#ECECE8" stroke="#D8D8D4" stroke-width="1"/>
      <circle cx="76" cy="72" r="6" fill="#8614FF"/>
      <circle cx="94" cy="72" r="6" fill="#D8D8D4"/>
      <circle cx="112" cy="72" r="6" fill="#D8D8D4"/>
      <text x="140" y="76" font-family="monospace" font-size="12" fill="#181818" font-weight="600">EMERGENT // ${galleryKey.toUpperCase()} — SLIDE ${num}</text>
      <text x="730" y="76" font-family="monospace" font-size="11" fill="#666666" text-anchor="end">09/26</text>

      <!-- Main editorial artifact -->
      <rect x="50" y="115" width="480" height="420" rx="10" fill="#F8F8F5" stroke="#D8D8D4" stroke-width="1"/>
      <!-- Inner interface preview -->
      <rect x="75" y="145" width="430" height="30" rx="6" fill="#EEEEEC"/>
      <circle cx="95" cy="160" r="4" fill="#8614FF"/>
      <rect x="110" y="156" width="180" height="8" rx="4" fill="#D8D8D4"/>
      
      <rect x="75" y="195" width="200" height="160" rx="8" fill="#ECECE8" stroke="#D8D8D4" stroke-width="1"/>
      <circle cx="175" cy="275" r="32" fill="#8614FF" opacity="0.2"/>
      <circle cx="175" cy="275" r="12" fill="#8614FF"/>

      <rect x="290" y="195" width="215" height="75" rx="8" fill="#EEEEEC"/>
      <rect x="290" y="280" width="215" height="75" rx="8" fill="#EEEEEC"/>
      
      <path d="M 75 420 Q 200 370 320 440 T 505 400" fill="none" stroke="#8614FF" stroke-width="2.5"/>

      <!-- Right column details -->
      <rect x="550" y="115" width="200" height="420" rx="10" fill="#ECECE8" stroke="#D8D8D4" stroke-width="1"/>
      <text x="575" y="160" font-family="sans-serif" font-size="16" font-weight="700" fill="#181818">Component ${num}</text>
      <text x="575" y="185" font-family="monospace" font-size="10" fill="#666666">FRAME SPECIFICATION</text>
      <line x1="575" y1="205" x2="725" y2="205" stroke="#D8D8D4" stroke-width="1"/>
      
      <text x="575" y="235" font-family="sans-serif" font-size="11" fill="#444444">Layout exploration exploring</text>
      <text x="575" y="255" font-family="sans-serif" font-size="11" fill="#444444">high density modular canvas</text>
      <text x="575" y="275" font-family="sans-serif" font-size="11" fill="#444444">and state transitions.</text>

      <rect x="575" y="320" width="150" height="34" rx="6" fill="#F8F8F5" stroke="#D8D8D4" stroke-width="1"/>
      <text x="650" y="342" font-family="monospace" font-size="10" fill="#8614FF" text-anchor="middle" font-weight="600">INSPECTION OK</text>
    </svg>`;
    writeSvg(path.join(__dirname, `../public/images/emergent/${galleryKey}`, `${num}.svg`), svg);
  }
});

// 3. CASE STUDIES COVERS & DETAILS
const caseStudies = [
  {
    slug: 'builder-experience',
    title: 'Visual Code & Canvas Builder',
    cover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
      <rect width="1200" height="800" fill="#EEEEEC"/>
      <rect x="2" y="2" width="1196" height="796" fill="none" stroke="#D8D8D4" stroke-width="2"/>
      <!-- Window frame -->
      <rect x="80" y="80" width="1040" height="640" rx="14" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1.5"/>
      <rect x="80" y="80" width="1040" height="50" rx="14" fill="#ECECE8"/>
      <circle cx="115" cy="105" r="7" fill="#8614FF"/>
      <circle cx="137" cy="105" r="7" fill="#D8D8D4"/>
      <circle cx="159" cy="105" r="7" fill="#D8D8D4"/>
      <text x="600" y="111" font-family="monospace" font-size="13" fill="#666666" text-anchor="middle">canvas-builder-workspace // production</text>
      
      <!-- Canvas grid layout -->
      <g transform="translate(120, 160)">
        <rect x="0" y="0" width="620" height="500" rx="8" fill="#F9F9F7" stroke="#D8D8D4" stroke-width="1"/>
        <!-- Nodes -->
        <rect x="40" y="60" width="160" height="100" rx="8" fill="#EEEEEC" stroke="#181818" stroke-width="1.5"/>
        <text x="60" y="90" font-family="monospace" font-size="11" font-weight="bold" fill="#181818">API GATEWAY</text>
        <circle cx="180" cy="110" r="5" fill="#8614FF"/>

        <rect x="360" y="100" width="180" height="120" rx="8" fill="#EEEEEC" stroke="#8614FF" stroke-width="2"/>
        <text x="380" y="130" font-family="monospace" font-size="11" font-weight="bold" fill="#8614FF">STREAM ENGINE</text>
        <circle cx="360" cy="160" r="5" fill="#8614FF"/>

        <rect x="200" y="300" width="180" height="110" rx="8" fill="#EEEEEC" stroke="#181818" stroke-width="1.5"/>
        <text x="220" y="330" font-family="monospace" font-size="11" font-weight="bold" fill="#181818">EDGE WORKER</text>

        <!-- Dynamic connecting splines -->
        <path d="M 200 110 C 280 110, 280 160, 360 160" fill="none" stroke="#8614FF" stroke-width="3"/>
        <path d="M 450 220 C 450 300, 380 350, 380 355" fill="none" stroke="#181818" stroke-width="2" stroke-dasharray="6 4"/>
      </g>
      <!-- Sidebar inspector -->
      <rect x="770" y="160" width="310" height="500" rx="8" fill="#ECECE8" stroke="#D8D8D4" stroke-width="1"/>
      <text x="800" y="210" font-family="sans-serif" font-size="18" font-weight="700" fill="#181818">Node Inspector</text>
      <text x="800" y="235" font-family="monospace" font-size="11" fill="#666666">INSTANCE: worker-node-09</text>
      <line x1="800" y1="255" x2="1050" y2="255" stroke="#D8D8D4" stroke-width="1"/>
      <rect x="800" y="280" width="250" height="36" rx="6" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1"/>
      <rect x="800" y="330" width="250" height="36" rx="6" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1"/>
      <rect x="800" y="380" width="250" height="36" rx="6" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1"/>
    </svg>`
  },
  {
    slug: 'spatial-ai-interface',
    title: 'Multimodal Spatial Intelligence',
    cover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
      <rect width="1200" height="800" fill="#F0F0ED"/>
      <rect x="2" y="2" width="1196" height="796" fill="none" stroke="#D8D8D4" stroke-width="2"/>
      <!-- Radial energy grid -->
      <circle cx="600" cy="400" r="320" fill="none" stroke="#D8D8D4" stroke-width="1.5" stroke-dasharray="6 6"/>
      <circle cx="600" cy="400" r="220" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
      <circle cx="600" cy="400" r="120" fill="none" stroke="#8614FF" stroke-width="2"/>
      <circle cx="600" cy="400" r="28" fill="#181818"/>
      <circle cx="600" cy="400" r="10" fill="#8614FF"/>
      
      <!-- Spatial cards in orbit -->
      <g transform="translate(180, 240) rotate(-6)">
        <rect width="240" height="150" rx="10" fill="#F8F8F5" stroke="#181818" stroke-width="1.5"/>
        <text x="20" y="40" font-family="monospace" font-size="11" font-weight="bold" fill="#8614FF">CONTEXT WINDOW</text>
        <line x1="20" y1="60" x2="200" y2="60" stroke="#E0E0DC" stroke-width="1"/>
        <line x1="20" y1="80" x2="160" y2="80" stroke="#E0E0DC" stroke-width="1"/>
      </g>
      <g transform="translate(760, 200) rotate(8)">
        <rect width="260" height="160" rx="10" fill="#F8F8F5" stroke="#8614FF" stroke-width="2"/>
        <text x="20" y="40" font-family="monospace" font-size="11" font-weight="bold" fill="#181818">LATENT VECTOR MAP</text>
        <circle cx="70" cy="90" r="16" fill="#8614FF" opacity="0.2"/>
        <circle cx="160" cy="110" r="20" fill="#181818" opacity="0.1"/>
      </g>
    </svg>`
  },
  {
    slug: 'design-system-core',
    title: 'Enterprise Design Architecture',
    cover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
      <rect width="1200" height="800" fill="#ECECE8"/>
      <rect x="2" y="2" width="1196" height="796" fill="none" stroke="#D8D8D4" stroke-width="2"/>
      <!-- Grid matrix of tokens -->
      <g transform="translate(140, 140)">
        <rect x="0" y="0" width="920" height="520" rx="12" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1.5"/>
        <text x="40" y="60" font-family="sans-serif" font-size="24" font-weight="700" fill="#181818">CORE COMPONENT TOKENS</text>
        <text x="40" y="85" font-family="monospace" font-size="12" fill="#666666">MULTI-PLATFORM REUSABLE ARCHITECTURE</text>
        <!-- Swatches & widgets -->
        <g transform="translate(40, 120)">
          <rect x="0" y="0" width="180" height="140" rx="8" fill="#F0F0ED" stroke="#D8D8D4" stroke-width="1"/>
          <text x="20" y="35" font-family="monospace" font-size="10" font-weight="bold" fill="#8614FF">BUTTON / PRIMARY</text>
          <rect x="20" y="60" width="140" height="40" rx="6" fill="#8614FF"/>
          <text x="90" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#F5F5F2" text-anchor="middle">Action</text>
        </g>
        <g transform="translate(250, 120)">
          <rect x="0" y="0" width="180" height="140" rx="8" fill="#F0F0ED" stroke="#D8D8D4" stroke-width="1"/>
          <text x="20" y="35" font-family="monospace" font-size="10" font-weight="bold" fill="#181818">INPUT / DEFAULT</text>
          <rect x="20" y="60" width="140" height="40" rx="6" fill="#FFFFFF" stroke="#D8D8D4" stroke-width="1"/>
          <text x="32" y="85" font-family="monospace" font-size="10" fill="#888884">Search...</text>
        </g>
        <g transform="translate(460, 120)">
          <rect x="0" y="0" width="180" height="140" rx="8" fill="#F0F0ED" stroke="#D8D8D4" stroke-width="1"/>
          <text x="20" y="35" font-family="monospace" font-size="10" font-weight="bold" fill="#181818">AVATAR CLUSTER</text>
          <circle cx="50" cy="80" r="18" fill="#181818"/>
          <circle cx="80" cy="80" r="18" fill="#666666"/>
          <circle cx="110" cy="80" r="18" fill="#8614FF"/>
        </g>
        <g transform="translate(670, 120)">
          <rect x="0" y="0" width="180" height="140" rx="8" fill="#F0F0ED" stroke="#D8D8D4" stroke-width="1"/>
          <text x="20" y="35" font-family="monospace" font-size="10" font-weight="bold" fill="#181818">STATUS BADGE</text>
          <rect x="20" y="65" width="80" height="26" rx="13" fill="#8614FF" opacity="0.15"/>
          <text x="60" y="82" font-family="monospace" font-size="10" fill="#8614FF" text-anchor="middle" font-weight="bold">ONLINE</text>
        </g>
      </g>
    </svg>`
  },
  {
    slug: 'onboarding-activation',
    title: 'Activation & Onboarding Loops',
    cover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
      <rect width="1200" height="800" fill="#F4F4F0"/>
      <rect x="2" y="2" width="1196" height="796" fill="none" stroke="#D8D8D4" stroke-width="2"/>
      <!-- Funnel journey visualization -->
      <g transform="translate(150, 180)">
        <path d="M 50 220 C 250 100, 550 320, 850 180" fill="none" stroke="#8614FF" stroke-width="4" stroke-linecap="round"/>
        <!-- Step checkpoints -->
        <circle cx="100" cy="200" r="24" fill="#181818"/>
        <text x="100" y="206" font-family="monospace" font-size="13" fill="#F5F5F2" text-anchor="middle" font-weight="bold">01</text>
        
        <circle cx="450" cy="240" r="24" fill="#8614FF"/>
        <text x="450" y="246" font-family="monospace" font-size="13" fill="#F5F5F2" text-anchor="middle" font-weight="bold">02</text>

        <circle cx="800" cy="190" r="28" fill="#181818"/>
        <text x="800" y="196" font-family="monospace" font-size="14" fill="#F5F5F2" text-anchor="middle" font-weight="bold">03</text>
      </g>
    </svg>`
  }
];

caseStudies.forEach(cs => {
  writeSvg(path.join(__dirname, '../public/images/case-studies', `${cs.slug}-cover.svg`), cs.cover);
  // Add 2 detail images for each case study
  writeSvg(path.join(__dirname, '../public/images/case-studies', `${cs.slug}-detail-1.svg`), cs.cover.replace('1200', '800').replace('800', '500'));
  writeSvg(path.join(__dirname, '../public/images/case-studies', `${cs.slug}-detail-2.svg`), cs.cover.replace('1200', '800').replace('800', '500'));
});

// 4. INTERVENTIONS (6 visual experiments)
const interventions = [
  { name: 'cursor-physics.svg', label: 'SPRING FLUID CURSOR', tag: 'PHYSICS / WEBL' },
  { name: 'audio-shader.svg', label: 'GLSL AUDIO WAVEFORM', tag: 'CANVAS / AUDIO' },
  { name: 'haptic-slider.svg', label: 'MICRO-HAPTIC STEPPER', tag: 'UI / TACTILE' },
  { name: 'retro-calc.svg', label: 'NEO-TACTILE DIAL', tag: 'SKEUOMORPHIC' },
  { name: 'spatial-tilt.svg', label: 'GYRO 3D PHOTO FRAME', tag: 'THREE.JS / MOTION' },
  { name: 'command-palette.svg', label: 'RADIAL QUICK COMMAND', tag: 'KEYBOARD INTERACTION' },
];

interventions.forEach((item, idx) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
    <rect width="600" height="450" rx="10" fill="#ECECE8"/>
    <rect x="1" y="1" width="598" height="448" rx="9" fill="none" stroke="#D8D8D4" stroke-width="1.5"/>
    <circle cx="40" cy="40" r="6" fill="#8614FF"/>
    <text x="60" y="44" font-family="monospace" font-size="11" fill="#666666">${item.tag}</text>
    <rect x="40" y="70" width="520" height="280" rx="8" fill="#F5F5F2" stroke="#D8D8D4" stroke-width="1"/>
    <!-- Central graphic -->
    <circle cx="300" cy="210" r="${50 + idx * 8}" fill="none" stroke="#181818" stroke-width="1.5" stroke-dasharray="4 4"/>
    <circle cx="300" cy="210" r="${30 + idx * 5}" fill="#8614FF" opacity="0.15"/>
    <circle cx="300" cy="210" r="10" fill="#8614FF"/>
    <text x="40" y="390" font-family="sans-serif" font-size="16" font-weight="700" fill="#181818">${item.label}</text>
    <text x="40" y="415" font-family="monospace" font-size="11" fill="#666666">EXP_0${idx + 1} // CLICK TO LAUNCH EXTERNAL</text>
  </svg>`;
  writeSvg(path.join(__dirname, '../public/images/interventions', item.name), svg);
});

// 5. STICKERS & ABOUT ARTIFACTS
const stickers = [
  {
    name: 'sticker-star.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <polygon points="50,5 64,36 98,36 71,58 82,90 50,70 18,90 29,58 2,36 36,36" fill="#8614FF"/>
      <circle cx="50" cy="50" r="14" fill="#F5F5F2"/>
      <text x="50" y="54" font-family="sans-serif" font-size="11" font-weight="bold" fill="#8614FF" text-anchor="middle">★</text>
    </svg>`
  },
  {
    name: 'sticker-stamp.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" width="160" height="100">
      <rect width="160" height="100" rx="4" fill="#F8F8F5" stroke="#8614FF" stroke-width="2" stroke-dasharray="4 2"/>
      <text x="80" y="35" font-family="monospace" font-size="11" font-weight="bold" fill="#8614FF" text-anchor="middle">DESIGN GARDEN</text>
      <line x1="20" y1="48" x2="140" y2="48" stroke="#8614FF" stroke-width="1"/>
      <text x="80" y="68" font-family="sans-serif" font-size="18" font-weight="bold" fill="#181818" text-anchor="middle">DESIGNER</text>
      <text x="80" y="85" font-family="monospace" font-size="9" fill="#666666" text-anchor="middle">BENGALURU</text>
    </svg>`
  },
  {
    name: 'sticker-barcode.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 70" width="180" height="70">
      <rect width="180" height="70" rx="4" fill="#F8F8F5" stroke="#D8D8D4" stroke-width="1"/>
      <!-- Barcode lines -->
      <g transform="translate(15, 12)">
        <rect x="0" y="0" width="3" height="32" fill="#181818"/>
        <rect x="6" y="0" width="1.5" height="32" fill="#181818"/>
        <rect x="10" y="0" width="4" height="32" fill="#181818"/>
        <rect x="18" y="0" width="2" height="32" fill="#181818"/>
        <rect x="23" y="0" width="5" height="32" fill="#181818"/>
        <rect x="32" y="0" width="1.5" height="32" fill="#181818"/>
        <rect x="36" y="0" width="3" height="32" fill="#181818"/>
        <rect x="42" y="0" width="4.5" height="32" fill="#181818"/>
        <rect x="50" y="0" width="2" height="32" fill="#181818"/>
        <rect x="55" y="0" width="3" height="32" fill="#181818"/>
        <rect x="62" y="0" width="6" height="32" fill="#181818"/>
        <rect x="72" y="0" width="1.5" height="32" fill="#181818"/>
        <rect x="76" y="0" width="3" height="32" fill="#181818"/>
        <rect x="82" y="0" width="4" height="32" fill="#181818"/>
        <rect x="90" y="0" width="2" height="32" fill="#181818"/>
        <rect x="95" y="0" width="5" height="32" fill="#181818"/>
        <rect x="104" y="0" width="1.5" height="32" fill="#181818"/>
        <rect x="108" y="0" width="3" height="32" fill="#181818"/>
        <rect x="115" y="0" width="5" height="32" fill="#181818"/>
        <rect x="124" y="0" width="2" height="32" fill="#181818"/>
        <rect x="130" y="0" width="4" height="32" fill="#181818"/>
        <rect x="138" y="0" width="2" height="32" fill="#181818"/>
        <rect x="144" y="0" width="4" height="32" fill="#181818"/>
      </g>
      <text x="90" y="58" font-family="monospace" font-size="9" fill="#181818" text-anchor="middle" letter-spacing="2">0926-DES-PORTFOLIO</text>
    </svg>`
  },
  {
    name: 'sticker-smile.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
      <circle cx="40" cy="40" r="38" fill="#ECECE8" stroke="#181818" stroke-width="2"/>
      <circle cx="28" cy="32" r="4" fill="#181818"/>
      <circle cx="52" cy="32" r="4" fill="#181818"/>
      <path d="M 26 48 Q 40 64 54 48" fill="none" stroke="#8614FF" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    name: 'sticker-tape.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 34" width="120" height="34">
      <polygon points="4,2 116,0 114,32 2,34" fill="#EADBC8" opacity="0.6"/>
      <line x1="6" y1="6" x2="114" y2="4" stroke="#D3C3AD" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>`
  }
];

stickers.forEach(s => {
  writeSvg(path.join(__dirname, '../public/images/stickers', s.name), s.svg);
});

// 6. ABOUT PHOTOS
const aboutPhotos = [
  {
    name: 'desk-sketch.svg',
    title: 'Desk & Physical Prototypes',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="500" height="400">
      <rect width="500" height="400" fill="#E8E5DD"/>
      <rect x="20" y="20" width="460" height="360" rx="4" fill="#202020"/>
      <!-- Desk scene illustration -->
      <line x1="20" y1="280" x2="480" y2="280" stroke="#353535" stroke-width="2"/>
      <rect x="80" y="160" width="140" height="110" rx="4" fill="#EFEFEA" stroke="#505050" stroke-width="1"/>
      <line x1="95" y1="180" x2="180" y2="180" stroke="#181818" stroke-width="2"/>
      <line x1="95" y1="200" x2="200" y2="200" stroke="#8614FF" stroke-width="2"/>
      <line x1="95" y1="220" x2="160" y2="220" stroke="#888888" stroke-width="2"/>
      <!-- Coffee mug & notebook -->
      <circle cx="280" cy="240" r="22" fill="#8614FF"/>
      <circle cx="280" cy="240" r="16" fill="#3A1212"/>
      <rect x="330" y="180" width="100" height="90" rx="4" fill="#ECECE8"/>
      <text x="40" y="340" font-family="monospace" font-size="12" fill="#CCCCCC">JOURNAL SPEC: DESK STUDY</text>
    </svg>`
  },
  {
    name: 'travel-notes.svg',
    title: 'Notes & Observations',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="500" height="400">
      <rect width="500" height="400" fill="#E8E5DD"/>
      <rect x="20" y="20" width="460" height="360" rx="4" fill="#181818"/>
      <circle cx="250" cy="180" r="80" fill="#8614FF" opacity="0.3"/>
      <circle cx="250" cy="180" r="50" fill="#8614FF" opacity="0.6"/>
      <circle cx="250" cy="180" r="20" fill="#8614FF"/>
      <path d="M 120 280 Q 250 200 380 280" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <text x="40" y="340" font-family="monospace" font-size="12" fill="#CCCCCC">TRAVEL & SPATIAL OBS</text>
    </svg>`
  }
];

aboutPhotos.forEach(p => {
  writeSvg(path.join(__dirname, '../public/images/about', p.name), p.svg);
});

console.log('Successfully generated all tactile SVG assets!');
