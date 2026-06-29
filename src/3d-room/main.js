import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export function createRoomScene(container) {
if (!container) {
  return () => {};
}

const getViewport = () => {
  const rect = container.getBoundingClientRect();
  return {
    width: Math.max(1, Math.floor(rect.width)),
    height: Math.max(1, Math.floor(rect.height)),
  };
};

const viewport = getViewport();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(viewport.width, viewport.height);
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.style.display = "block";
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color("#ede9e4");
scene.fog = null;

const camera = new THREE.PerspectiveCamera(
  50,
  viewport.width / viewport.height,
  0.1,
  200
);
camera.position.set(-8.4, 3.05, 5.25);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-1.25, 1.25, -0.65);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = true;
controls.screenSpacePanning = false;
controls.panSpeed = 0.45;
controls.rotateSpeed = 0.55;
controls.zoomSpeed = 0.75;
controls.minDistance = 6.2;
controls.maxDistance = 11.8;
controls.minPolarAngle = Math.PI * 0.22;
controls.maxPolarAngle = Math.PI * 0.47;
controls.minAzimuthAngle = -Math.PI * 0.62;
controls.maxAzimuthAngle = -Math.PI * 0.16;
controls.update();

const cameraTargetBounds = {
  minX: -2.7,
  maxX: 0.25,
  minY: 0.9,
  maxY: 1.75,
  minZ: -2.15,
  maxZ: 0.9,
};

function clampCameraTarget() {
  controls.target.x = THREE.MathUtils.clamp(
    controls.target.x,
    cameraTargetBounds.minX,
    cameraTargetBounds.maxX
  );
  controls.target.y = THREE.MathUtils.clamp(
    controls.target.y,
    cameraTargetBounds.minY,
    cameraTargetBounds.maxY
  );
  controls.target.z = THREE.MathUtils.clamp(
    controls.target.z,
    cameraTargetBounds.minZ,
    cameraTargetBounds.maxZ
  );
}

function createFabricTexture({
  base = "#c8c0b8",
  line = "rgba(255,255,255,0.12)",
  shadow = "rgba(70,60,50,0.11)",
  stitch = "rgba(255,255,255,0.18)",
  size = 512,
} = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < size; i += 7) {
    ctx.strokeStyle = i % 14 === 0 ? line : shadow;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, i + Math.sin(i * 0.08) * 1.5);
    ctx.lineTo(size, i + Math.sin(i * 0.08) * 1.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(i + Math.cos(i * 0.08) * 1.5, 0);
    ctx.lineTo(i + Math.cos(i * 0.08) * 1.5, size);
    ctx.stroke();
  }

  ctx.globalAlpha = 0.32;
  ctx.strokeStyle = stitch;
  ctx.lineWidth = 1;
  for (let i = -size; i < size * 2; i += 18) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + size, size);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  for (let i = 0; i < 5000; i++) {
    const shade = 120 + Math.random() * 65;
    ctx.fillStyle = `rgba(${shade},${shade - 6},${shade - 14},0.08)`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 1, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function createPillowTexture({
  base = "#ddd6cf",
  accent = "rgba(120,105,92,0.18)",
  highlight = "rgba(255,255,255,0.16)",
  size = 512,
} = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y += 16) {
    ctx.strokeStyle = y % 32 === 0 ? highlight : accent;
    ctx.lineWidth = y % 32 === 0 ? 1.2 : 0.8;
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(y * 0.06) * 2);
    ctx.lineTo(size, y + Math.sin(y * 0.06) * 2);
    ctx.stroke();
  }

  for (let x = 0; x < size; x += 28) {
    ctx.strokeStyle = accent;
    ctx.lineWidth = 0.9;
    ctx.beginPath();
    ctx.moveTo(x + Math.cos(x * 0.04) * 2, 0);
    ctx.lineTo(x + Math.cos(x * 0.04) * 2, size);
    ctx.stroke();
  }

  for (let i = 0; i < 3600; i++) {
    const shade = 172 + Math.random() * 60;
    ctx.fillStyle = `rgba(${shade},${shade - 7},${shade - 15},0.07)`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 1.2, 1.2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function createArtTexture({
  base = "#efe8de",
  accent = "#8b6654",
  secondary = "#2f3c45",
  warm = "#d6b78e",
  size = 512,
} = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  const bg = ctx.createLinearGradient(0, 0, size, size);
  bg.addColorStop(0, base);
  bg.addColorStop(1, "#d9cec3");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.fillRect(size * 0.08, size * 0.08, size * 0.84, size * 0.84);

  ctx.fillStyle = accent;
  ctx.globalAlpha = 0.72;
  ctx.beginPath();
  ctx.ellipse(size * 0.34, size * 0.42, size * 0.18, size * 0.28, -0.45, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = secondary;
  ctx.globalAlpha = 0.62;
  ctx.beginPath();
  ctx.ellipse(size * 0.62, size * 0.55, size * 0.22, size * 0.14, 0.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = warm;
  ctx.globalAlpha = 0.58;
  ctx.fillRect(size * 0.5, size * 0.16, size * 0.18, size * 0.46);

  ctx.globalAlpha = 1;
  ctx.strokeStyle = "rgba(66,54,45,0.34)";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(size * 0.18, size * 0.7);
  ctx.bezierCurveTo(size * 0.38, size * 0.42, size * 0.58, size * 0.88, size * 0.82, size * 0.34);
  ctx.stroke();

  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.lineWidth = 3;
  for (let i = 0; i < 8; i++) {
    const y = size * (0.2 + i * 0.075);
    ctx.beginPath();
    ctx.moveTo(size * 0.14, y);
    ctx.lineTo(size * 0.86, y + Math.sin(i) * 8);
    ctx.stroke();
  }

  for (let i = 0; i < 1800; i++) {
    const shade = 170 + Math.random() * 60;
    ctx.fillStyle = `rgba(${shade},${shade - 10},${shade - 22},0.055)`;
    ctx.fillRect(Math.random() * size, Math.random() * size, 1.2, 1.2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function createParquetTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#d5b894";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const plankH = 86;
  for (let y = 0; y < canvas.height; y += plankH) {
    const offset = (y / plankH) % 2 === 0 ? 0 : 160;
    for (let x = -offset; x < canvas.width; x += 320) {
      const hue = 32 + Math.random() * 8;
      const lightness = 63 + Math.random() * 9;
      ctx.fillStyle = `hsl(${hue}, 36%, ${lightness}%)`;
      ctx.fillRect(x, y, 318, plankH - 2);

      ctx.strokeStyle = "rgba(75,48,25,0.16)";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, 318, plankH - 2);

      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = `rgba(94,58,28,${0.04 + Math.random() * 0.07})`;
        ctx.beginPath();
        const yy = y + 10 + Math.random() * (plankH - 20);
        ctx.moveTo(x + 12, yy);
        ctx.bezierCurveTo(x + 90, yy + Math.random() * 18 - 9, x + 220, yy + Math.random() * 18 - 9, x + 306, yy);
        ctx.stroke();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

const pillowFabricMap = createPillowTexture({
  base: "#d8d1ca",
  accent: "rgba(94,82,71,0.17)",
  highlight: "rgba(255,255,255,0.18)",
});

// textura de culoare trebuie SRGB
pillowFabricMap.colorSpace = THREE.SRGBColorSpace;

// repetare (ca să nu fie “întinsă” pe pernă)
pillowFabricMap.wrapS = THREE.RepeatWrapping;
pillowFabricMap.wrapT = THREE.RepeatWrapping;
pillowFabricMap.repeat.set(4, 4);

// calitate mai bună la unghi
pillowFabricMap.anisotropy = renderer.capabilities.getMaxAnisotropy();

const parquetMap = createParquetTexture();
parquetMap.colorSpace = THREE.SRGBColorSpace;

parquetMap.wrapS = THREE.RepeatWrapping;
parquetMap.wrapT = THREE.RepeatWrapping;

// cât de des se repetă pe podea (ajustează după gust)
parquetMap.repeat.set(10, 10);

parquetMap.anisotropy = renderer.capabilities.getMaxAnisotropy();

function roundedBox(w, h, d, material, pos = [0, 0, 0], opts = {}) {
  const {
    radius = Math.min(w, h, d) * 0.08,
    smooth = 6,
    rotY = 0,
    puff = null, // ex: [1.02, 0.98, 1.02]
  } = opts;

  const g = new RoundedBoxGeometry(w, h, d, smooth, radius);
  const m = new THREE.Mesh(g, material);
  m.position.set(...pos);
  m.rotation.y = rotY;

  if (puff) m.scale.set(puff[0], puff[1], puff[2]);

  m.castShadow = true;
  m.receiveShadow = true;
  scene.add(m);
  return m;
}
const sofaFabricBase = createFabricTexture({
  base: "#8f867d",
  line: "rgba(255,255,255,0.10)",
  shadow: "rgba(42,38,34,0.18)",
  stitch: "rgba(238,232,224,0.14)",
});
sofaFabricBase.colorSpace = THREE.SRGBColorSpace;

sofaFabricBase.wrapS = THREE.RepeatWrapping;
sofaFabricBase.wrapT = THREE.RepeatWrapping;

sofaFabricBase.repeat.set(12, 12); // ← aici schimbi (X, Y)

sofaFabricBase.anisotropy = renderer.capabilities.getMaxAnisotropy();

// --- Helpers ---
const add = (mesh) => (scene.add(mesh), mesh);

function mat(color, rough = 0.85, metal = 0.0) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: rough,
    metalness: metal,
  });
}

function box(w, h, d, material, pos = [0, 0, 0]) {
  const g = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(g, material);
  m.position.set(...pos);
  m.castShadow = true;
  m.receiveShadow = true;
  return add(m);
}

function cyl(rTop, rBot, h, material, pos = [0, 0, 0]) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, 32);
  const m = new THREE.Mesh(g, material);
  m.position.set(...pos);
  m.castShadow = true;
  m.receiveShadow = true;
  return add(m);
}


function createCarpetTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#b9b2aa";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // fire scurte / noise pentru senzația de țesătură
  for (let i = 0; i < 9000; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const l = Math.random() * 5 + 1;
    const a = Math.random() * Math.PI;
    const shade = 160 + Math.random() * 55;
    ctx.strokeStyle = `rgba(${shade}, ${shade - 6}, ${shade - 14}, ${0.18 + Math.random() * 0.16})`;
    ctx.lineWidth = 0.55 + Math.random() * 0.7;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
    ctx.stroke();
  }

  // linii foarte fine ca o țesătură
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  for (let i = 0; i < 512; i += 9) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(512, i + Math.sin(i) * 2);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(92,78,65,0.18)";
  ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68);

  for (let i = 0; i < 42; i++) {
    const y = 28 + Math.random() * (canvas.height - 56);
    ctx.strokeStyle = `rgba(112,96,80,${0.08 + Math.random() * 0.06})`;
    ctx.beginPath();
    ctx.moveTo(28, y);
    ctx.bezierCurveTo(160, y - 16, 340, y + 16, canvas.width - 28, y);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function createStoneTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 768;

  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#d9cbbd");
  gradient.addColorStop(0.48, "#c7b4a4");
  gradient.addColorStop(1, "#eadfd3");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 42; i++) {
    const y = Math.random() * canvas.height;
    const alpha = 0.045 + Math.random() * 0.06;
    ctx.strokeStyle = `rgba(82,61,45,${alpha})`;
    ctx.lineWidth = 1 + Math.random() * 3;
    ctx.beginPath();
    ctx.moveTo(-40, y);
    ctx.bezierCurveTo(
      canvas.width * 0.25,
      y + Math.random() * 120 - 60,
      canvas.width * 0.75,
      y + Math.random() * 120 - 60,
      canvas.width + 40,
      y + Math.random() * 60 - 30
    );
    ctx.stroke();
  }

  for (let i = 0; i < 9000; i++) {
    const shade = 145 + Math.random() * 80;
    ctx.fillStyle = `rgba(${shade},${shade - 15},${shade - 28},0.055)`;
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1.4, 1.4);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function addGlassPanel(w, h, d, pos = [0, 0, 0], rot = [0, 0, 0]) {
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: "#dfeff0",
    roughness: 0.04,
    metalness: 0.0,
    transmission: 0.45,
    thickness: 0.035,
    transparent: true,
    opacity: 0.36,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), glassMat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  scene.add(mesh);
  return mesh;
}

function addCylinderBetween(start, end, radius, material) {
  const dir = new THREE.Vector3().subVectors(end, start);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(radius, radius, len, 16);
  const mesh = new THREE.Mesh(geo, material);

  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function createVerticalGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0.0, "rgba(255, 230, 180, 0)");
  grad.addColorStop(0.18, "rgba(255, 230, 180, 0.10)");
  grad.addColorStop(0.35, "rgba(255, 235, 200, 0.22)");
  grad.addColorStop(0.50, "rgba(255, 240, 210, 0.34)");
  grad.addColorStop(0.65, "rgba(255, 235, 200, 0.22)");
  grad.addColorStop(0.82, "rgba(255, 230, 180, 0.10)");
  grad.addColorStop(1.0, "rgba(255, 230, 180, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const glowTexture = createVerticalGlowTexture();

// =========================
// LIGHT CONTROL CONSOLE
// =========================

const architecturalLightGroups = [];
const architecturalLightMaterials = [];
const architecturalGlowMeshes = [];

const LIGHT_SETTINGS = {
  intensity: 70, // 0-100
  temperature: 20, // 0 = cald, 100 = rece
};

function getTemperatureColor() {
  const warm = new THREE.Color(0xffd49a);
  const cool = new THREE.Color(0xdceeff);
  return warm.lerp(cool, LIGHT_SETTINGS.temperature / 100);
}

function updateArchitecturalLights() {
  const color = getTemperatureColor();

  // La 100%, luminile ajung suficient de puternice pentru a lumina mult din zona din fața lor.
  const power = LIGHT_SETTINGS.intensity / 100;
  const emissivePower = 0.35 + power * 3.2;
  const glowOpacity = 0.04 + power * 0.34;

  architecturalLightGroups.forEach((groupData) => {
    groupData.lights.forEach((light) => {
      light.color.copy(color);
      light.intensity = groupData.baseIntensity * power * groupData.maxMultiplier;
      light.distance = groupData.baseDistance + power * groupData.extraDistance;
    });
  });

  architecturalLightMaterials.forEach((material) => {
    material.color.copy(color);
    material.emissive.copy(color);
    material.emissiveIntensity = emissivePower;
  });

  architecturalGlowMeshes.forEach((glow) => {
    glow.material.opacity = glowOpacity;
  });
}

function registerLightMaterial(material) {
  architecturalLightMaterials.push(material);
  updateArchitecturalLights();
  return material;
}

function registerGlowMesh(mesh) {
  architecturalGlowMeshes.push(mesh);
  updateArchitecturalLights();
  return mesh;
}

function createLightConsole() {
  const panel = document.createElement("div");
  panel.style.position = "absolute";
  panel.style.top = "12px";
  panel.style.right = "12px";
  panel.style.width = "205px";
  panel.style.padding = "10px";
  panel.style.borderRadius = "10px";
  panel.style.background = "rgba(20, 20, 20, 0.78)";
  panel.style.backdropFilter = "blur(10px)";
  panel.style.color = "white";
  panel.style.fontFamily = "Arial, sans-serif";
  panel.style.zIndex = "9999";
  panel.style.boxShadow = "0 10px 26px rgba(0,0,0,0.24)";
  panel.style.userSelect = "none";

  panel.innerHTML = `
    <div style="font-size:12px;font-weight:700;margin-bottom:8px;">Control lumini</div>

    <label style="display:block;font-size:10px;margin-bottom:4px;">Intensitate</label>
    <input id="lightIntensity" type="range" min="0" max="100" value="${LIGHT_SETTINGS.intensity}" style="width:100%;height:18px;">
    <div id="lightIntensityValue" style="font-size:10px;opacity:.75;margin-bottom:8px;">${LIGHT_SETTINGS.intensity}%</div>

    <label style="display:block;font-size:10px;margin-bottom:4px;">Temperatura lumina</label>
    <input id="lightTemperature" type="range" min="0" max="100" value="${LIGHT_SETTINGS.temperature}" style="width:100%;height:18px;">
    <div id="lightTemperatureValue" style="font-size:10px;opacity:.75;">calda</div>

    <div style="height:6px;margin-top:8px;border-radius:999px;background:linear-gradient(90deg,#ffd49a,#dceeff);"></div>
  `;

  panel.addEventListener("pointerdown", (e) => e.stopPropagation());
  panel.addEventListener("wheel", (e) => e.stopPropagation());
  container.appendChild(panel);

  const intensityInput = panel.querySelector("#lightIntensity");
  const temperatureInput = panel.querySelector("#lightTemperature");
  const intensityValue = panel.querySelector("#lightIntensityValue");
  const temperatureValue = panel.querySelector("#lightTemperatureValue");

  function updateLabels() {
    const isEnglish = document.documentElement.lang === "en";
    intensityValue.textContent = `${LIGHT_SETTINGS.intensity}%`;

    if (LIGHT_SETTINGS.temperature < 35) {
      temperatureValue.textContent = "caldă";
    } else if (LIGHT_SETTINGS.temperature < 70) {
      temperatureValue.textContent = "neutră";
    } else {
      temperatureValue.textContent = "rece";
    }

    if (isEnglish) {
      if (LIGHT_SETTINGS.temperature < 35) {
        temperatureValue.textContent = "warm";
      } else if (LIGHT_SETTINGS.temperature < 70) {
        temperatureValue.textContent = "neutral";
      } else {
        temperatureValue.textContent = "cool";
      }
    } else if (LIGHT_SETTINGS.temperature < 35) {
      temperatureValue.textContent = "calda";
    } else if (LIGHT_SETTINGS.temperature < 70) {
      temperatureValue.textContent = "neutra";
    } else {
      temperatureValue.textContent = "rece";
    }
  }

  intensityInput.addEventListener("input", () => {
    LIGHT_SETTINGS.intensity = Number(intensityInput.value);
    updateLabels();
    updateArchitecturalLights();
  });

  temperatureInput.addEventListener("input", () => {
    LIGHT_SETTINGS.temperature = Number(temperatureInput.value);
    updateLabels();
    updateArchitecturalLights();
  });

  updateLabels();
}

createLightConsole();

function addVerticalPointLightStrip({
  x,
  z,
  y = 1.65,
  height = 1.55,
  count = 11,
  color = 0xffe4bd,
  intensity = 0.26,
  distance = 3.2,
  extraDistance = 3.2,
  decay = 1.35,
  castShadow = false,
  maxMultiplier = 3.8,
}) {
  const group = new THREE.Group();
  const spacing = height / (count - 1);
  const lights = [];

  for (let i = 0; i < count; i++) {
    const yy = y - height / 2 + i * spacing;

    const light = new THREE.PointLight(color, intensity, distance, decay);
    light.position.set(x, yy, z);
    light.castShadow = castShadow;

    if (castShadow) {
      light.shadow.mapSize.set(512, 512);
      light.shadow.bias = -0.0001;
      light.shadow.radius = 3;
    }

    lights.push(light);
    group.add(light);
  }

  scene.add(group);

  architecturalLightGroups.push({
    group,
    lights,
    baseIntensity: intensity,
    baseDistance: distance,
    extraDistance,
    maxMultiplier,
  });

  updateArchitecturalLights();
  return group;
}

function makeVisibleOnlyInMirrors(object, mirrors = []) {
  object.visible = false;

  mirrors.forEach((mirror) => {
    const previousOnBeforeRender = mirror.onBeforeRender.bind(mirror);

    mirror.onBeforeRender = function (...args) {
      const oldFog = scene.fog;

      object.visible = true;
      scene.fog = null;

      previousOnBeforeRender(...args);

      object.visible = false;
      scene.fog = oldFog;
    };
  });
}

// --- Room dimensions (în metri aproximativ) ---
// Camera este acum asimetrică: păstrăm partea stângă, dar scurtăm partea din dreapta.
// Dacă vrei partea dreaptă și mai scurtă/lungă, schimbă doar ROOM_RIGHT.
const ROOM_LEFT = -7.0;
const ROOM_RIGHT = 4.45; // tăiat încă puțin din partea dreaptă a camerei
const ROOM_W = ROOM_RIGHT - ROOM_LEFT;
const ROOM_CENTER_X = (ROOM_LEFT + ROOM_RIGHT) / 2;
const ROOM_D = 10;
const ROOM_H = 3.1;

// =========================
// FLOOR + PLATFORM + WALLS
// =========================

parquetMap.repeat.set(6, 6);

const floorWoodMat = new THREE.MeshStandardMaterial({
  map: parquetMap,
  color: new THREE.Color("#d7c0a7"),
  roughness: 0.96,
  metalness: 0.0,
});

// Platforma rămâne exact pe dimensiunile parchetului, nu depășește marginile.
const platformMat = new THREE.MeshStandardMaterial({
  color: "#f7f5f2",
  roughness: 1.0,
  metalness: 0.0,
});

const platform = new THREE.Mesh(
  new THREE.BoxGeometry(ROOM_W, 0.22, ROOM_D),
  platformMat
);
platform.position.set(ROOM_CENTER_X, -0.11, 0);
platform.receiveShadow = true;
scene.add(platform);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(ROOM_W, ROOM_D),
  floorWoodMat
);
floor.position.set(ROOM_CENTER_X, 0.003, 0);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// Ceiling
const ceiling = new THREE.Mesh(
  new THREE.PlaneGeometry(ROOM_W, ROOM_D),
  new THREE.MeshStandardMaterial({
    color: "#f4f1ed",
    roughness: 1.0,
    metalness: 0.0,
  })
);
ceiling.position.set(ROOM_CENTER_X, ROOM_H, 0);
ceiling.rotation.x = Math.PI / 2;
ceiling.receiveShadow = true;
scene.add(ceiling);

// Walls
const wallMat = new THREE.MeshStandardMaterial({
  color: "#ece7e2",
  roughness: 0.98,
  metalness: 0.0,
});

const sideWallMat = new THREE.MeshStandardMaterial({
  color: "#e7e3df",
  roughness: 0.98,
  metalness: 0.0,
});

box(ROOM_W, ROOM_H, 0.2, wallMat, [ROOM_CENTER_X, ROOM_H / 2, -ROOM_D / 2]); // back
box(0.2, ROOM_H, ROOM_D, sideWallMat, [ROOM_RIGHT, ROOM_H / 2, 0]); // right

// Lemn / rame calde ca în referință, dar fără peretele maro masiv lângă scară
const wood = mat("#6b4a37", 0.7, 0.05);
const darkWood = mat("#3a2419", 0.65, 0.05);

// Oglinzi reale pe peretele din dreapta, în zona încercuită cu roșu
function addRightWallMirror({
  z = -1.2,
  y = 1.55,
  width = 0.78,
  height = 2.1,
} = {}) {
  const mirrorGeometry = new THREE.PlaneGeometry(width, height);

  const mirror = new Reflector(mirrorGeometry, {
    clipBias: 0.003,
    textureWidth: getViewport().width * window.devicePixelRatio,
    textureHeight: getViewport().height * window.devicePixelRatio,
    color: 0x777777,
  });

  // Peretele din dreapta este pe axa X, deci rotim oglinda ca să stea pe el
  mirror.rotation.y = -Math.PI / 2;

  // O punem foarte puțin în fața peretelui, ca să nu facă flicker/z-fighting
  mirror.position.set(ROOM_RIGHT - 0.12, y, z);

  scene.add(mirror);

  // Ramă subțire de lemn în jurul oglinzii
  const frameDepth = 0.055;
  const frameThick = 0.045;
  const frameX = ROOM_RIGHT - 0.145;

  // sus
  box(frameDepth, frameThick, width + 0.09, darkWood, [
    frameX,
    y + height / 2 + frameThick / 2,
    z,
  ]);

  // jos
  box(frameDepth, frameThick, width + 0.09, darkWood, [
    frameX,
    y - height / 2 - frameThick / 2,
    z,
  ]);

  // stânga
  box(frameDepth, height + 0.09, frameThick, darkWood, [
    frameX,
    y,
    z - width / 2 - frameThick / 2,
  ]);

  // dreapta
  box(frameDepth, height + 0.09, frameThick, darkWood, [
    frameX,
    y,
    z + width / 2 + frameThick / 2,
  ]);

  return mirror;
}

// Cele 2 oglinzi verticale de pe peretele încercuit
const mirror1 = addRightWallMirror({
  z: 1.75,
  y: 1.55,
  width: 0.8,
  height: 2.1,
});

const mirror2 = addRightWallMirror({
  z: 2.78,
  y: 1.55,
  width: 0.8,
  height: 2.1,
});

// Separator vertical între oglinzi, ca în poza de referință
box(0.06, 2.25, 0.08, wood, [
  ROOM_RIGHT - 0.16,
  1.55,
  -1.265,
]);

// =========================
// PERETE INVIZIBIL PENTRU USER, VIZIBIL DOAR ÎN OGLINZI
// =========================

function addInvisibleMirrorWallWithLights() {
  const group = new THREE.Group();

  // Peretele este pe partea stângă a camerei, unde ai încercuit în poză.
  const wallX = ROOM_LEFT + 0.08;
  const wallY = ROOM_H / 2;
  const wallZ = 0;

  const mirrorWallMat = new THREE.MeshStandardMaterial({
    color: "#ece7e2",
    roughness: 0.96,
    metalness: 0.0,
  });

  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, ROOM_H, ROOM_D),
    mirrorWallMat
  );
  wall.position.set(wallX, wallY, wallZ);
  wall.castShadow = false;
  wall.receiveShadow = true;
  group.add(wall);

  const lightBodyMat = registerLightMaterial(new THREE.MeshStandardMaterial({
    color: "#fffaf0",
    emissive: new THREE.Color("#fff1d2"),
    emissiveIntensity: 1.15,
    roughness: 0.3,
    metalness: 0.0,
  }));

  const lightHeight = 1.65;
  const lightWidth = 0.075;
  const lightDepth = 0.035;
  const lightY = 1.65;

  function addMirrorOnlySconce(z) {
    // suportul discret
    const support = new THREE.Mesh(
      new THREE.BoxGeometry(0.018, lightHeight + 0.12, lightWidth + 0.08),
      mat("#d8d1c8", 0.75)
    );
    support.position.set(wallX + 0.095, lightY, z);
    group.add(support);

    // glow vertical vizibil doar în reflexie
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.75, lightHeight + 0.25),
      new THREE.MeshBasicMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
        side: THREE.FrontSide,
      })
    );

    glow.rotation.y = Math.PI / 2;
    glow.position.set(wallX + 0.105, lightY, z);
    group.add(glow);
    registerGlowMesh(glow);

    // corpul luminos
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(lightDepth, lightHeight, lightWidth),
      lightBodyMat
    );
    bar.position.set(wallX + 0.12, lightY, z);
    group.add(bar);

    // lumina reală rămâne activă în scenă, dar este distribuită pe toată banda.
    addVerticalPointLightStrip({
      x: wallX + 0.45,
      z,
      y: lightY,
      height: lightHeight,
      count: 11,
      intensity: 0.32,
      distance: 3.4,
      extraDistance: 3.6,
      maxMultiplier: 4.0,
      castShadow: false,
    });
  }

  addMirrorOnlySconce(-2.1);
  addMirrorOnlySconce(2.1);

  scene.add(group);

  // Peretele și corpurile de lumină nu apar în camera principală,
  // dar apar în oglinzi. În același timp, scoatem fog-ul din reflexie.
  makeVisibleOnlyInMirrors(group, [mirror1, mirror2]);

  return group;
}

addInvisibleMirrorWallWithLights();

function addInvisibleFrontMirrorWallWithLights() {
  const group = new THREE.Group();
  const wallX = ROOM_CENTER_X;
  const wallY = ROOM_H / 2;
  const wallZ = ROOM_D / 2 - 0.08;

  const mirrorWallMat = new THREE.MeshStandardMaterial({
    color: "#eee9e3",
    roughness: 0.96,
    metalness: 0.0,
  });

  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(ROOM_W, ROOM_H, 0.16),
    mirrorWallMat
  );
  wall.position.set(wallX, wallY, wallZ);
  wall.castShadow = false;
  wall.receiveShadow = true;
  group.add(wall);

  const lightBodyMat = registerLightMaterial(new THREE.MeshStandardMaterial({
    color: "#fffaf0",
    emissive: new THREE.Color("#fff1d2"),
    emissiveIntensity: 1.05,
    roughness: 0.32,
    metalness: 0.0,
  }));

  const lightHeight = 1.45;
  const lightWidth = 0.07;
  const lightDepth = 0.035;
  const lightY = 1.62;

  function addMirrorOnlySconce(x) {
    const support = new THREE.Mesh(
      new THREE.BoxGeometry(lightWidth + 0.08, lightHeight + 0.12, 0.018),
      mat("#d8d1c8", 0.75)
    );
    support.position.set(x, lightY, wallZ - 0.095);
    group.add(support);

    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.75, lightHeight + 0.25),
      new THREE.MeshBasicMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.18,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
        side: THREE.FrontSide,
      })
    );
    glow.position.set(x, lightY, wallZ - 0.105);
    group.add(glow);
    registerGlowMesh(glow);

    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(lightWidth, lightHeight, lightDepth),
      lightBodyMat
    );
    bar.position.set(x, lightY, wallZ - 0.12);
    group.add(bar);

    addVerticalPointLightStrip({
      x,
      z: wallZ - 0.45,
      y: lightY,
      height: lightHeight,
      count: 9,
      intensity: 0.24,
      distance: 3.0,
      extraDistance: 3.1,
      maxMultiplier: 3.6,
      castShadow: false,
    });
  }

  addMirrorOnlySconce(ROOM_CENTER_X - 2.35);
  addMirrorOnlySconce(ROOM_CENTER_X + 2.35);

  scene.add(group);
  makeVisibleOnlyInMirrors(group, [mirror1, mirror2]);
  return group;
}

addInvisibleFrontMirrorWallWithLights();

// “Panouri” decorative stânga (foarte simplu)
const panel = mat("#f1ece6", 0.98);
box(5.8, 2.0, 0.05, panel, [-3.2, 1.4, -ROOM_D / 2 + 0.11]);
box(5.4, 1.6, 0.03, mat("#ebe6e1", 0.99), [-3.2, 1.4, -ROOM_D / 2 + 0.14]);

// Covor gros, cu volum și textură procedurală de țesătură
function addMinimalWallDetails() {
  const frameMat = mat("#7f6a58", 0.72, 0.03);
  const lineMat = mat("#b8ada2", 0.92, 0.0);
  const accentMat = mat("#d3c5b8", 0.9, 0.0);
  const artMatA = new THREE.MeshStandardMaterial({
    map: createArtTexture({
      base: "#f0e7db",
      accent: "#8b6654",
      secondary: "#314653",
      warm: "#d4b27f",
    }),
    roughness: 0.92,
    metalness: 0.0,
  });
  const artMatB = new THREE.MeshStandardMaterial({
    map: createArtTexture({
      base: "#e9e1d8",
      accent: "#6f7d63",
      secondary: "#7f594d",
      warm: "#c9b9a7",
    }),
    roughness: 0.92,
    metalness: 0.0,
  });
  const artMatC = new THREE.MeshStandardMaterial({
    map: createArtTexture({
      base: "#eee9e3",
      accent: "#b79b5b",
      secondary: "#2f3c45",
      warm: "#d6c7b9",
    }),
    roughness: 0.9,
    metalness: 0.0,
  });

  function addBackFrame(cx, cy, w, h, artMat) {
    const z = -ROOM_D / 2 + 0.17;
    box(w - 0.12, h - 0.12, 0.018, artMat, [cx, cy, z + 0.012]);
    box(w, 0.035, 0.026, frameMat, [cx, cy + h / 2, z]);
    box(w, 0.035, 0.026, frameMat, [cx, cy - h / 2, z]);
    box(0.035, h, 0.026, frameMat, [cx - w / 2, cy, z]);
    box(0.035, h, 0.026, frameMat, [cx + w / 2, cy, z]);
  }

  function addBackLine(w, angle, x, y) {
    const mesh = box(w, 0.018, 0.022, lineMat, [x, y, -ROOM_D / 2 + 0.19]);
    mesh.rotation.z = angle;
    return mesh;
  }

  addBackFrame(-4.65, 1.62, 0.72, 0.86, artMatA);
  addBackLine(0.42, 0.18, -4.65, 1.72);
  addBackLine(0.34, -0.32, -4.65, 1.52);
  box(0.22, 0.22, 0.024, accentMat, [-4.47, 1.43, -ROOM_D / 2 + 0.19]);

  addBackFrame(-3.55, 1.62, 0.72, 0.86, artMatB);
  addBackLine(0.48, -0.16, -3.55, 1.65);
  addBackLine(0.3, 0.42, -3.54, 1.48);

  const rightX = ROOM_RIGHT - 0.135;
  box(0.022, 1.12, 0.98, artMatC, [rightX - 0.012, 1.72, -0.8]);
  box(0.025, 1.25, 0.035, frameMat, [rightX, 1.72, -1.35]);
  box(0.025, 1.25, 0.035, frameMat, [rightX, 1.72, -0.25]);
  box(0.025, 0.035, 1.1, frameMat, [rightX, 2.345, -0.8]);
  box(0.025, 0.035, 1.1, frameMat, [rightX, 1.095, -0.8]);
  box(0.026, 0.018, 0.72, lineMat, [rightX - 0.01, 1.76, -0.8]).rotation.x = 0.2;
  box(0.026, 0.018, 0.48, accentMat, [rightX - 0.01, 1.55, -0.67]).rotation.x = -0.35;
}

addMinimalWallDetails();

const rugTexture = createCarpetTexture();
const rugMat = new THREE.MeshStandardMaterial({
  map: rugTexture,
  bumpMap: rugTexture,
  bumpScale: 0.035,
  roughness: 1.0,
  metalness: 0.0,
});
const rug = new THREE.Mesh(new RoundedBoxGeometry(6.2, 0.075, 4.2, 5, 0.04), rugMat);
rug.position.set(-2.0, 0.04, 0.2);
rug.castShadow = true;
rug.receiveShadow = true;
scene.add(rug);

// --- Sofa modulară (3 blocuri + braț) ---
function sofaMat(repeatX = 6, repeatY = 6) {
  const map = sofaFabricBase.clone();
  map.needsUpdate = true;
  map.repeat.set(repeatX, repeatY);

  return new THREE.MeshStandardMaterial({
    map,
    bumpMap: map,
    bumpScale: 0.018,
    roughness: 0.95,
    metalness: 0.0,
  });
}
const seatH = 0.42;
const seatY = seatH / 2 + 0.02;

// materiale separate (repeat diferit)
const sofaSeatMat = sofaMat(7, 7);
const sofaBackMat = sofaMat(10, 10);
const sofaArmMat = sofaMat(8, 8);
const sofaDetailMat = mat("#8e857c", 0.96, 0.0);
const throwMat = new THREE.MeshStandardMaterial({
  color: new THREE.Color("#c9b9a7"),
  roughness: 0.98,
  metalness: 0.0,
});

// Chaise (stânga)
roundedBox(1.5, seatH, 2.4, sofaSeatMat, [-3.2, seatY, -2], {
  radius: 0.10, smooth: 8, puff: [1.02, 0.96, 1.02]
});
roundedBox(0.25, 0.45, 2.4, sofaBackMat, [-2.6, seatY + 0.38, -2], {
  radius: 0.07, smooth: 8, puff: [1.01, 0.98, 1.01]
});
roundedBox(1.5, seatH, 1.6, sofaSeatMat, [-4.7, seatY, -2.4], {
  radius: 0.10, smooth: 8, puff: [1.02, 0.96, 1.02]
});

// Middle
roundedBox(1.5, seatH, 2.2, sofaSeatMat, [-3.2, seatY, 0.3], {
  radius: 0.10, smooth: 8, puff: [1.02, 0.96, 1.02]
});
roundedBox(0.25, 0.45, 2.2, sofaBackMat, [-2.6, seatY + 0.38, 0.3], {
  radius: 0.07, smooth: 8, puff: [1.01, 0.98, 1.01]
});

// Arm rest (dreapta)
roundedBox(1.5, 0.75, 0.25, sofaArmMat, [-3.2, 0.75 / 2 + 0.02, 1.52], {
  radius: 0.09, smooth: 8, puff: [1.01, 0.98, 1.01]
});
// Arm rest (stanga)
roundedBox(1.5, 0.75, 0.25, sofaArmMat, [-3.2, 0.75 / 2 + 0.02, -3.32], {
  radius: 0.09, smooth: 8, puff: [1.01, 0.98, 1.01]
});

// function addSofaDetails() {
//   const seamPositions = [-2.75, -1.05, 0.0, 0.92];
//   seamPositions.forEach((z) => {
//     const seam = box(0.018, 0.016, 0.82, sofaDetailMat, [-3.96, seatY + 0.22, z]);
//     seam.rotation.y = 0.02;
//   });

//   const throwBlanket = roundedBox(1.05, 0.045, 1.35, throwMat, [-3.95, seatY + 0.27, -2.18], {
//     radius: 0.035,
//     smooth: 5,
//     rotY: -0.08,
//     puff: [1.0, 0.92, 1.04],
//   });
//   throwBlanket.castShadow = true;

//   box(0.95, 0.018, 0.025, sofaDetailMat, [-3.95, seatY + 0.305, -2.82]).rotation.y = -0.08;
//   box(0.95, 0.018, 0.025, sofaDetailMat, [-3.95, seatY + 0.305, -1.54]).rotation.y = -0.08;
// }

// addSofaDetails();

function pillowRounded({
  w = 0.55,
  h = 0.18,
  d = 0.35,
  radius = 0.06,
  smooth = 6,
  pos = [-4.6, 0.72, 0.2],
  rotY = 0,
  repeat = 4, // control pe fiecare pernă
} = {}) {
  const geo = new RoundedBoxGeometry(w, h, d, smooth, radius);

  // clone ca să poți schimba repeat per pernă (opțional)
  const map = pillowFabricMap.clone();
  map.needsUpdate = true;
  map.repeat.set(repeat, repeat);

  const mat = new THREE.MeshStandardMaterial({
    map,
    bumpMap: map,
    bumpScale: 0.012,
    roughness: 0.95,
    metalness: 0.0,
  });

  const m = new THREE.Mesh(geo, mat);
  m.position.set(...pos);
  m.rotation.y = rotY;

  // "puff" mic: perna nu e perfect simetrică
  m.scale.set(1.02, 0.95, 1.03);

  m.castShadow = true;
  m.receiveShadow = true;
  scene.add(m);
  return m;
}



// “Pernuțe” (rotunjite)
pillowRounded({
  w: 0.18, h: 0.55, d: 1,
  radius: 0.06, smooth: 6,
  color: "#d9d2ca",
  pos: [-2.8, 0.72, -2.6],
  rotY: 0
});

pillowRounded({
  w: 0.18, h: 0.55, d: 1,
  radius: 0.06, smooth: 6,
  color: "#d9d2ca",
  pos: [-2.8, 0.72, -1.5],
  rotY: 0
});

pillowRounded({
  w: 0.18, h: 0.55, d: 1,
  radius: 0.06, smooth: 6,
  color: "#d9d2ca",
  pos: [-2.8, 0.72, -0.5],
  rotY: 0
});

pillowRounded({
  w: 0.18, h: 0.55, d: 1,
  radius: 0.06, smooth: 6,
  color: "#d9d2ca",
  pos: [-2.8, 0.72, 0.6],
  rotY: 0
});



// --- Coffee table (cilindru + blat cu texturÄƒ de piatrÄƒ) ---
const coffeeStoneTexture = createStoneTexture();
const stone = new THREE.MeshStandardMaterial({
  map: coffeeStoneTexture,
  bumpMap: coffeeStoneTexture,
  bumpScale: 0.025,
  roughness: 0.82,
  metalness: 0.02,
});
cyl(0.65, 0.65, 0.28, stone, [-5.3, 0.14, -0.2]);
cyl(0.78, 0.78, 0.08, stone, [-5.3, 0.32, -0.2]);

// --- Dining zone (masă + scaune low poly) ---
function addCoffeeTableDetails() {
  const bookCoverA = mat("#8b6654", 0.86, 0.0);
  const bookCoverB = mat("#2f3c45", 0.82, 0.0);
  const paperMat = mat("#efe8dc", 0.98, 0.0);
  const metalMat = mat("#c8b071", 0.42, 0.45);
  const darkMetalMat = mat("#2e2d2a", 0.5, 0.35);

  const book1 = box(0.62, 0.045, 0.42, bookCoverA, [-5.54, 0.395, -0.18]);
  book1.rotation.y = -0.2;
  const pages1 = box(0.55, 0.025, 0.36, paperMat, [-5.54, 0.43, -0.18]);
  pages1.rotation.y = -0.2;

  const book2 = box(0.54, 0.04, 0.34, bookCoverB, [-5.47, 0.47, -0.15]);
  book2.rotation.y = -0.1;
  const pages2 = box(0.48, 0.02, 0.28, paperMat, [-5.47, 0.5, -0.15]);
  pages2.rotation.y = -0.1;

  const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.62, 18), darkMetalMat);
  pen.position.set(-5.03, 0.405, -0.42);
  pen.rotation.z = Math.PI / 2;
  pen.rotation.y = 0.28;
  pen.castShadow = true;
  pen.receiveShadow = true;
  scene.add(pen);

  const penTip = new THREE.Mesh(new THREE.ConeGeometry(0.019, 0.06, 18), metalMat);
  penTip.position.set(-4.73, 0.405, -0.51);
  penTip.rotation.z = -Math.PI / 2;
  penTip.rotation.y = 0.28;
  penTip.castShadow = true;
  scene.add(penTip);

  const keyRing = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.009, 10, 28), metalMat);
  keyRing.position.set(-5.05, 0.405, 0.18);
  keyRing.rotation.x = Math.PI / 2;
  keyRing.castShadow = true;
  scene.add(keyRing);

  const keyStem = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.015, 0.035), metalMat);
  keyStem.position.set(-4.88, 0.405, 0.18);
  keyStem.rotation.y = -0.18;
  keyStem.castShadow = true;
  scene.add(keyStem);

  const keyHead = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.014, 0.085), metalMat);
  keyHead.position.set(-4.75, 0.405, 0.17);
  keyHead.rotation.y = -0.18;
  keyHead.castShadow = true;
  scene.add(keyHead);
}

addCoffeeTableDetails();

const tableTop = box(2.2, 0.08, 4.0, mat("#f4f1ec", 0.9), [0.3, 0.77, -0.6]);
box(0.18, 0.8, 0.18, mat("#d9d2ca", 0.95), [-0.55, 0.35, -2.2]);
box(0.18, 0.8, 0.18, mat("#d9d2ca", 0.95), [-0.55, 0.35, 1]);
box(0.18, 0.8, 0.18, mat("#d9d2ca", 0.95), [1.1, 0.35, -2.2]);
box(0.18, 0.8, 0.18, mat("#d9d2ca", 0.95), [1.1, 0.35, 1]);

function addDiningTableDetails() {
  const ceramicMat = mat("#f2eee8", 0.86, 0.0);
  const darkCeramicMat = mat("#b8aa9c", 0.88, 0.0);
  const brassMat = mat("#b79b5b", 0.38, 0.35);
  const leafMat = mat("#6f7d63", 0.8, 0.0);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: "#edf8f7",
    roughness: 0.06,
    metalness: 0.0,
    transmission: 0.35,
    thickness: 0.025,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
  });

  function addPlaceSetting(x, z, rot = 0) {
    const plate = cyl(0.22, 0.22, 0.018, ceramicMat, [x, 0.83, z]);
    plate.scale.y = 0.35;
    plate.rotation.y = rot;

    const innerPlate = cyl(0.15, 0.15, 0.012, darkCeramicMat, [x, 0.847, z]);
    innerPlate.scale.y = 0.35;

    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.18, 20), glassMat);
    glass.position.set(x + Math.cos(rot + 0.75) * 0.25, 0.91, z + Math.sin(rot + 0.75) * 0.25);
    glass.castShadow = true;
    glass.receiveShadow = true;
    scene.add(glass);
  }

  addPlaceSetting(-0.55, -1.6, 0.1);
  addPlaceSetting(1.12, -1.58, Math.PI);
  addPlaceSetting(-0.55, 0.4, -0.15);
  addPlaceSetting(1.12, 0.38, Math.PI + 0.1);



  const candle = cyl(0.055, 0.055, 0.22, mat("#efe1c6", 0.92, 0.0), [0.3, 0.90, -0.55]);
  const flame = new THREE.Mesh(
    new THREE.SphereGeometry(0.035, 14, 10),
    new THREE.MeshBasicMaterial({ color: "#ffd28a" })
  );
  flame.position.set(0.3, 1.07, -0.55);
  flame.scale.set(0.65, 1.2, 0.65);
  scene.add(flame);

  const cutleryMat = mat("#c9c4bb", 0.34, 0.55);
  [
    [-0.82, -1.6, 0.1],
    [0.85, -1.58, 0.1],
    [-0.82, 0.4, -0.1],
    [0.85, 0.38, -0.1],
  ].forEach(([x, z, angle]) => {
    const fork = box(0.018, 0.012, 0.32, cutleryMat, [x, 0.855, z]);
    fork.rotation.y = angle;
  });

  candle.castShadow = true;
}

addDiningTableDetails();

function chair(x, z, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);

  const m = mat("#d6c7b9", 0.95);

  // seat
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.55), m);
  seat.position.set(0, 0.5, 0);
  seat.castShadow = true;
  seat.receiveShadow = true;
  g.add(seat);

  const cushion = new THREE.Mesh(
    new RoundedBoxGeometry(0.48, 0.045, 0.48, 5, 0.035),
    new THREE.MeshStandardMaterial({
      map: pillowFabricMap.clone(),
      roughness: 0.96,
      metalness: 0.0,
    })
  );
  cushion.position.set(0.015, 0.565, 0);
  cushion.castShadow = true;
  cushion.receiveShadow = true;
  g.add(cushion);

  // back (păstrăm orientarea ta inițială)
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 0.55), m);
  back.position.set(-0.233, 0.81, 0);
  back.castShadow = true;
  back.receiveShadow = true;
  g.add(back);

  const backDetail = new THREE.Mesh(
    new THREE.BoxGeometry(0.018, 0.36, 0.42),
    mat("#b9aa9b", 0.92, 0.0)
  );
  backDetail.position.set(-0.278, 0.82, 0);
  backDetail.castShadow = true;
  backDetail.receiveShadow = true;
  g.add(backDetail);
// legs (4 cilindri)
const legMat = mat("#8a6a55", 0.75, 0.05); // lemn/metal simplu
const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.45, 16);

function addLeg(lx, lz) {
  const leg = new THREE.Mesh(legGeo, legMat);
  // înălțimea piciorului: 0.45 => centrul la 0.225
  leg.position.set(lx, 0.235, lz);
  leg.castShadow = true;
  leg.receiveShadow = true;
  g.add(leg);
}

// colțurile sub șezut (seat 0.55x0.55)
addLeg( 0.24,  0.24);
addLeg(-0.24,  0.24);
addLeg( 0.24, -0.24);
addLeg(-0.24, -0.24);
  return g;
}
// 3 scaune pe partea stângă a mesei - mai apropiate între ele
chair(-1.0, -1.75, 0);
chair(-1.0, -0.6, 0);
chair(-1.0, 0.55, 0);

// 3 scaune pe partea dreaptă a mesei - mai apropiate între ele
chair(1.6, -1.75, Math.PI);
chair(1.6, -0.6, Math.PI);
chair(1.6, 0.55, Math.PI);

// 1 scaun la capătul din față al mesei
chair(0.3, -2.85, -Math.PI / 2);

// 1 scaun la capătul din spate al mesei
chair(0.3, 1.65, Math.PI / 2);

// --- Perete separator în spatele scaunului din capătul stâng al mesei ---

const dividerWallMat = mat("#e9e2d8", 0.95, 0.0);

function addDividerWallBehindEndChair() {
  const wallWidth = 2.65;
  const wallHeight = ROOM_H;
  const wallThickness = 0.16;

  // poziția scaunului de la capătul stâng al mesei
  const endChairX = 0.3;
  const endChairZ = -2.75;

  // scaunul are spătarul spre z negativ;
  // îl punem la aprox. 20cm în spatele lui
  const wallZ = endChairZ - 0.68;

  const wallY = ROOM_H / 2;

  // peretele propriu-zis
  box(wallWidth, wallHeight, wallThickness, dividerWallMat, [
    endChairX,
    wallY,
    wallZ,
  ]);
// Light blocker invizibil în spatele peretelui.
// Ajută ca lumina să nu treacă deloc în spate.
const blockerMat = new THREE.MeshBasicMaterial({
  colorWrite: false,
  depthWrite: true,
  depthTest: true,
});

const lightBlocker = new THREE.Mesh(
  new THREE.BoxGeometry(wallWidth + 0.15, wallHeight + 0.1, 0.08),
  blockerMat
);

lightBlocker.position.set(
  endChairX,
  wallY,
  wallZ - wallThickness / 2 - 0.06
);

lightBlocker.castShadow = true;
lightBlocker.receiveShadow = false;

scene.add(lightBlocker);
  // mici muchii laterale, ca peretele să pară mai finisat
  const sideTrimMat = mat("#d8cfc5", 0.9, 0.0);

  box(0.06, wallHeight, wallThickness + 0.04, sideTrimMat, [
    endChairX - wallWidth / 2,
    wallY,
    wallZ,
  ]);

  box(0.06, wallHeight, wallThickness + 0.04, sideTrimMat, [
    endChairX + wallWidth / 2,
    wallY,
    wallZ,
  ]);

  // blocuri verticale de iluminat pe lateralele peretelui - variantă mai realistă

// folosim glowTexture-ul global pentru toate benzile verticale

const lightBlockMat = registerLightMaterial(new THREE.MeshStandardMaterial({
  color: new THREE.Color("#fffaf0"),
  emissive: new THREE.Color("#fff1d2"),
  emissiveIntensity: 1.05,
  roughness: 0.3,
  metalness: 0.0,
}));

const lightHeight = 1.55;
const lightWidth = 0.075;
const lightDepth = 0.035;
const lightY = 1.65;

const lightLeftX = endChairX - wallWidth / 2 + 0.18;
const lightRightX = endChairX + wallWidth / 2 - 0.18;
const lightZ = wallZ - wallThickness / 2 - 0.045; // luminile mutate în spatele peretelui

// funcție pentru o aplică verticală realistă
function addWallSconce(x) {
  // suport discret în spate
  box(lightWidth + 0.08, lightHeight + 0.12, 0.018, mat("#d8d1c8", 0.75), [
    x,
    lightY,
    wallZ - wallThickness / 2 - 0.032,
  ]);

  // glow vertical pe toată înălțimea benzii
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75, lightHeight + 0.25),
    new THREE.MeshBasicMaterial({
      map: glowTexture,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
    })
  );

  glow.position.set(x, lightY, wallZ - wallThickness / 2 - 0.055);
  scene.add(glow);
  registerGlowMesh(glow);

  // corpul alb luminos
  const bar = box(lightWidth, lightHeight, lightDepth, lightBlockMat, [
    x,
    lightY,
    wallZ - wallThickness / 2 - 0.075,
  ]);

  // IMPORTANT: în loc de o singură lumină în centru,
  // folosim mai multe puncte distribuite pe toată banda.
  const stripLights = addVerticalPointLightStrip({
    x,
    z: wallZ - wallThickness / 2 - 0.22,
    y: lightY,
    height: lightHeight,
    count: 11,
    intensity: 0.34,
    distance: 3.6,
    extraDistance: 3.8,
    maxMultiplier: 4.2,
    castShadow: false,
  });

  return { bar, glow, stripLights };
}

addWallSconce(lightLeftX);
addWallSconce(lightRightX);
}

addDividerWallBehindEndChair();

// --- Lampadar suspendat deasupra mesei, inspirat din poza de referință ---
function addDiningPendantLamp() {
  const lampGroup = new THREE.Group();
  scene.add(lampGroup);

  const lampX = 0.3;
  const lampY = 2.25;
  const lampZ = -0.6;

  const metalMat = mat("#17130f", 0.55, 0.25);
  const warmColor = getTemperatureColor();

  const lampMat = registerLightMaterial(new THREE.MeshStandardMaterial({
    color: warmColor,
    emissive: warmColor,
    emissiveIntensity: 2.2,
    roughness: 0.28,
    metalness: 0.0,
  }));

  // două tije subțiri din tavan.
  // Lampadarul rămâne pe centrul mesei, dar este rotit pe direcția axei Z
  // ca să urmeze linia roșie din poza trimisă.
  addCylinderBetween(
    new THREE.Vector3(lampX, ROOM_H - 0.02, lampZ - 0.75),
    new THREE.Vector3(lampX, lampY + 0.08, lampZ - 0.75),
    0.018,
    metalMat
  );
  addCylinderBetween(
    new THREE.Vector3(lampX, ROOM_H - 0.02, lampZ + 0.75),
    new THREE.Vector3(lampX, lampY + 0.08, lampZ + 0.75),
    0.018,
    metalMat
  );

  // bara luminoasă lungă, orizontală peste masă, pe lungimea mesei
  const tube = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.08, 1.85, 12, 32),
    lampMat
  );
  tube.position.set(lampX, lampY, lampZ);
  tube.rotation.x = Math.PI / 2;
  tube.castShadow = false;
  tube.receiveShadow = false;
  lampGroup.add(tube);

const centerCollar = new THREE.Mesh(
  new THREE.CylinderGeometry(0.085, 0.085, 0.08, 32),
  new THREE.MeshStandardMaterial({
    color: "#1b120d",
    roughness: 0.45,
    metalness: 0.35,
  })
);

centerCollar.position.set(0.3, 2.25, -0.6); // centrul lampadarului
centerCollar.rotation.x = Math.PI / 2;      // de sus în jos, ca linia roșie
centerCollar.castShadow = true;
centerCollar.receiveShadow = true;

scene.add(centerCollar);

  // inele/coliere discrete negre ca în referință
  // const ringGeo = new THREE.TorusGeometry(0.095, 0.012, 10, 32);
  // const ring1 = new THREE.Mesh(ringGeo, metalMat);
  // ring1.position.set(lampX, lampY, lampZ - 0.45);
  // ring1.rotation.x = Math.PI / 2;
  // lampGroup.add(ring1);

  // const ring2 = ring1.clone();
  // ring2.position.set(lampX, lampY, lampZ + 0.45);
  // lampGroup.add(ring2);

  // lumină reală, caldă/rece controlată din consolă, orientată spre masă
  const tableLight = new THREE.PointLight(0xffd49a, 0.85, 5.2, 1.35);
  tableLight.position.set(lampX, lampY - 0.08, lampZ);
  tableLight.castShadow = true;
  tableLight.shadow.mapSize.set(1024, 1024);
  lampGroup.add(tableLight);

  architecturalLightGroups.push({
    group: lampGroup,
    lights: [tableLight],
    baseIntensity: 0.85,
    baseDistance: 5.2,
    extraDistance: 2.5,
    maxMultiplier: 2.4,
  });

  updateArchitecturalLights();
  return lampGroup;
}

addDiningPendantLamp();


// --- Staircase (trepte: box-uri pe o rampă) ---
const steps = new THREE.Group();
scene.add(steps);

const stepMat = mat("#b79274", 0.75, 0.05);
const stepW = 2.0;
const stepH = 0.17;
const stepD = 0.32;
const stepCount = 12;

const stairStart = new THREE.Vector3(4.5, stepH / 2, 1.0);
const stairDir = new THREE.Vector3(0, stepH, -0.22); // urcă + merge spre spate

for (let i = 0; i < stepCount; i++) {
  const p = stairStart.clone().add(stairDir.clone().multiplyScalar(i));
  const s = new THREE.Mesh(new THREE.BoxGeometry(stepW, stepH, stepD), stepMat);
  s.position.copy(p);
  s.castShadow = true;
  s.receiveShadow = true;
  steps.add(s);
}

// Pereți de sticlă pentru scară, în locul peretelui maro masiv
const railMat = mat("#3a2a23", 0.45, 0.18);
const leftGlassX = 3.43;
const rightGlassX = 5.55;

for (let i = 0; i < stepCount - 1; i += 2) {
  const p = stairStart.clone().add(stairDir.clone().multiplyScalar(i));
  const panelY = p.y + 0.68;
  const panelZ = p.z - 0.12;

  // două laterale de sticlă, ca balustrade transparente
  addGlassPanel(0.045, 1.15, 0.74, [leftGlassX, panelY, panelZ]);
  addGlassPanel(0.045, 1.15, 0.74, [rightGlassX, panelY, panelZ]);
}

// panou de sticlă pe zona de sus / landing
addGlassPanel(2.05, 1.15, 0.045, [4.5, 2.25, -1.75]);

// mână curentă subțire, închisă, deasupra sticlei
addCylinderBetween(
  new THREE.Vector3(leftGlassX, 1.05, 1.12),
  new THREE.Vector3(leftGlassX, 2.82, -1.55),
  0.035,
  railMat
);
addCylinderBetween(
  new THREE.Vector3(rightGlassX, 1.05, 1.12),
  new THREE.Vector3(rightGlassX, 2.82, -1.55),
  0.035,
  railMat
);

// mici prinderi verticale pentru sticlă
for (let i = 0; i <= stepCount; i += 3) {
  const p = stairStart.clone().add(stairDir.clone().multiplyScalar(i));
  const postY = p.y + 0.55;
  const postZ = p.z;
  addCylinderBetween(new THREE.Vector3(leftGlassX, p.y, postZ), new THREE.Vector3(leftGlassX, postY + 0.55, postZ), 0.018, railMat);
  addCylinderBetween(new THREE.Vector3(rightGlassX, p.y, postZ), new THREE.Vector3(rightGlassX, postY + 0.55, postZ), 0.018, railMat);
}

// --- Lighting ---
scene.add(new THREE.AmbientLight(0xffffff, 0.7));

// “Sun” light (key light)
// const sun = new THREE.DirectionalLight(0xffffff, 1.2);
// sun.position.set(8, 9, 6);
// sun.castShadow = true;
// sun.shadow.mapSize.set(2048, 2048);
// sun.shadow.camera.left = -15;
// sun.shadow.camera.right = 15;
// sun.shadow.camera.top = 15;
// sun.shadow.camera.bottom = -15;
// scene.add(sun);

// Pendant light (emissive bar) ca în poză
// const pendant = new THREE.Mesh(
//   new THREE.CapsuleGeometry(1.6, 0.03, 8, 16),
//   new THREE.MeshStandardMaterial({
//     color: "#fff2de",
//     emissive: new THREE.Color("#fff2de"),
//     emissiveIntensity: 2.2,
//     roughness: 0.4,
//     metalness: 0.0,
//   })
// );
// pendant.position.set(3.0, 2.05, -0.6);
// scene.add(pendant);

// Spot light deasupra mesei (ca să “simulate” glow)
// const tableSpot = new THREE.SpotLight(0xffffff, 1.2, 20, Math.PI / 6, 0.35, 1);
// tableSpot.position.set(3.0, 2.7, -0.6);
// tableSpot.target.position.set(3.0, 0.7, -0.6);
// tableSpot.castShadow = true;
// scene.add(tableSpot);
// scene.add(tableSpot.target);

// --- Render loop ---
let frameId = 0;
let disposed = false;

function animate() {
  if (disposed) return;
  frameId = requestAnimationFrame(animate);
  clampCameraTarget();
  controls.update();
  renderer.render(scene, camera);
}
animate();

function resize() {
  const { width, height } = getViewport();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

const resizeObserver = new ResizeObserver(resize);
resizeObserver.observe(container);
window.addEventListener("resize", resize);
resize();

return () => {
  disposed = true;
  cancelAnimationFrame(frameId);
  resizeObserver.disconnect();
  window.removeEventListener("resize", resize);
  controls.dispose();
  renderer.dispose();
  renderer.domElement.remove();
  scene.traverse((object) => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => {
        Object.keys(material).forEach((key) => {
          const value = material[key];
          if (value && typeof value.dispose === "function") value.dispose();
        });
        material.dispose();
      });
    }
  });
};
}
