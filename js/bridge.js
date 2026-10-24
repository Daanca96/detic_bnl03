window.addEventListener("error", (event) => {
  const el = document.getElementById("boot-error");
  if (el) el.textContent = event.message;
});

const THREE = AFRAME.THREE;

const EQUIPOS = [
  { id: "proa", title: "Vista de proa", category: "Navegación", body: "Los cristales de proa son la referencia de quien gobierna: horizonte, boyas, tráfico y la propia proa. Las aspas blancas marcan el vidrio para no confundirlo con un hueco. No son un instrumento.", say: "Por estos cristales se gobierna a la vista. Lo que queda centrado es la proa." },
  { id: "babor", title: "Banda de babor", category: "Navegación", body: "Ventanales de la banda izquierda, mirando hacia proa. Desde aquí se juzga la distancia al costado y el través. Babor es la izquierda navegando hacia proa.", say: "Babor es la izquierda yendo hacia proa. Este cristal controla el costado." },
  { id: "timon", title: "Timón", category: "Gobierno", body: "Rueda de gobierno. Al girarla se ordena el ángulo de la pala y el buque cae a una banda o a la otra. No desplaza el barco de costado: cambia el rumbo. A la vía, la pala queda centrada.", say: "El timón cambia el rumbo. A la vía, la pala queda al centro." },
  { id: "joystick", title: "Joystick", category: "Gobierno", body: "Joystick junto a la rueda. Desde el puesto de gobierno manda la maniobra fina: propulsor, hélice de proa o un eje combinado, según este buque. Es distinto de la palanca de la consola de babor.", say: "Este joystick está al lado del timón. Mueve el buque de costado en la maniobra." },
  { id: "rpm", title: "Tablero de RPM", category: "Gobierno", body: "Indicador de revoluciones, encima de las palancas. La palanca da la orden; este tablero confirma que la máquina subió o bajó de régimen.", say: "Aquí se leen las revoluciones. La palanca ordena y el tablero confirma." },
  { id: "pito", title: "Pito", category: "Gobierno", body: "Mando de la bocina del buque. Con él se hacen las pitadas de maniobra y de visibilidad reducida. El sonido sale hacia fuera, para los otros barcos.", say: "El pito es la bocina. Avisa la maniobra a quien está fuera." },
  { id: "palancas-motores", title: "Palancas de motores", category: "Gobierno", body: "Palancas de motores y propulsores, con puño rojo. Adelante, avante; atrás, atrás; al centro, paro. El resultado se mira en el tablero de RPM.", say: "Estas palancas dan avante, atrás o paro. Las revoluciones se confirman al lado." },
  { id: "parabrisas", title: "Parabrisas", category: "Gobierno", body: "Mandos del limpiaparabrisas. Con lluvia o roción limpian los cristales de proa. El cristal está en el ventanal; aquí solo está el mando.", say: "Desde aquí se acciona el limpiaparabrisas." },
  { id: "distribucion", title: "Tablero de distribución", category: "Gobierno", body: "Interruptores de esta consola. Alimentan pantallas, luces y limpiaparabrisas del puesto de gobierno. No es el cuadro principal del buque.", say: "Este tablero enciende los equipos de la consola, no todo el barco." },
  { id: "puesto-timon", title: "Puesto del timón", category: "Puestos", body: "Silla enfrentada a la rueda. Quien se sienta aquí tiene la proa por el cristal y la consola al alcance.", say: "Desde esta silla, el timón queda delante y la proa en el cristal." },
  { id: "palanca", title: "Palanca de babor", category: "Gobierno", body: "Palanca de la consola de babor, no el joystick del timón. Con el buque casi parado da el empuje lateral para aguantar el través o arrimarse.", say: "Esta es la palanca del puesto de babor. El joystick del timón es el otro." },
  { id: "radar", title: "Radar", category: "Navegación", body: "Pantalla junto al timón y otra en la consola de babor. Muestran costa, boyas y otros buques, también de noche o con niebla. El radar dice qué hay alrededor.", say: "El radar muestra lo que el ojo no alcanza. Hay pantalla junto al timón y en babor." },
  { id: "gps", title: "GPS", category: "Navegación", body: "Receptores de posición por satélite. Van repetidos: si uno falla, el otro sigue. La posición se contrasta con la carta y con la vista.", say: "El GPS dice dónde estamos. Hay más de uno por si falla un equipo." },
  { id: "compas", title: "Compás satelital", category: "Navegación", body: "Compás que toma el rumbo de los satélites, montado alto para leerlo mirando a proa. Dentro de un casco de acero es más estable que un compás magnético.", say: "El compás satelital da el rumbo de la proa." },
  { id: "ecosonda", title: "Ecosonda", category: "Navegación", body: "Mide la profundidad bajo el buque con un pulso que rebota en el fondo. La carta dice el fondo previsto; la ecosonda dice el fondo de ahora.", say: "La ecosonda mide el agua que queda debajo." },
  { id: "monitor", title: "Monitor de guardia", category: "Navegación", body: "Pantalla de trabajo entre los dos puestos. Ahí se deja la carta, una cámara o el parte, sin tapar el radar ni el timón.", say: "Este monitor es de consulta. No sustituye al radar ni al timón." },
  { id: "puesto-babor", title: "Puesto de babor", category: "Puestos", body: "Silla de la consola de radar. Desde aquí se sigue el tráfico y la carta, con el ventanal de babor a la vista.", say: "Desde aquí se vigilan las pantallas y, de reojo, babor." },
  { id: "luces", title: "Luces del puente", category: "Confort", body: "Tubos del techo. De día pueden ir en blanco. De noche se bajan o se pasan a rojo para no perder la visión fuera del cristal.", say: "De noche el puente se oscurece. Con el techo así de blanco, fuera no se ve." },
  { id: "emergencia", title: "Equipo del techo", category: "Seguridad", body: "Cilindro rojo trincado al techo. Por el color es material de emergencia. El nombre exacto está en la etiqueta y en el plano de seguridad del buque.", say: "Lo rojo del techo es emergencia. El nombre se lee en la etiqueta." },
  { id: "puerta", title: "Puerta de estribor", category: "Seguridad", body: "Puerta metálica del costado de estribor. Cierra el puente al agua, al viento y al ruido, y es la salida por esa banda. En la mar va cerrada.", say: "Esta puerta cierra el puente y es la salida por estribor." },
  { id: "salida", title: "Señal de salida", category: "Seguridad", body: "Señal verde junto a la puerta de estribor. Indica el camino para evacuar el puente.", say: "La señal verde marca por dónde se sale si hay que evacuar." },
  { id: "casilleros", title: "Casilleros", category: "Navegación", body: "Estantería de casillas para cartas de papel, derroteros, avisos a los navegantes y planos.", say: "Aquí está la documentación en papel." },
  { id: "calefactor", title: "Calefactor de estribor", category: "Confort", body: "Unidad de lamas a la altura de la cubierta. Apoya la calefacción en la banda de estribor y ayuda a que el cristal no se empañe.", say: "Esta unidad de abajo calienta o mueve el aire en estribor." },
  { id: "clima", title: "Aire acondicionado", category: "Confort", body: "Hay un equipo en el techo de cada banda. Mantienen las pantallas y evitan que los cristales se empañen.", say: "El aire acondicionado mantiene el cristal despejado. Hay uno en cada banda." },
  { id: "cubierta", title: "Cubierta del puente", category: "Confort", body: "Suelo azul con relieve antideslizante. En el puente entra agua y la gente se mueve deprisa durante la maniobra.", say: "El suelo agarra el calzado cuando la cubierta está mojada." }
];

const byId = Object.fromEntries(EQUIPOS.map((item) => [item.id, item]));

const VIEW = {
  proa: { x: 0.1, z: 0.15, yaw: 0, pitch: 0.02 },
  babor: { x: -2.2, z: -0.2, yaw: 0.85, pitch: 0 },
  timon: { x: 0.55, z: 0.42, yaw: -0.15, pitch: -0.22 },
  joystick: { x: 0.45, z: 0.48, yaw: -0.1, pitch: -0.38 },
  rpm: { x: 0.5, z: 0.42, yaw: -0.2, pitch: -0.18 },
  pito: { x: 0.6, z: 0.5, yaw: -0.15, pitch: -0.42 },
  "palancas-motores": { x: 0.95, z: 0.48, yaw: -0.2, pitch: -0.42 },
  parabrisas: { x: 1.2, z: 0.5, yaw: -0.35, pitch: -0.32 },
  distribucion: { x: 1.05, z: 0.4, yaw: -0.45, pitch: -0.12 },
  "puesto-timon": { x: 0.7, z: 1.85, yaw: -0.4, pitch: -0.35 },
  palanca: { x: -2.55, z: 0.35, yaw: 0.1, pitch: -0.28 },
  radar: { x: -0.35, z: 0.4, yaw: 0.3, pitch: -0.12 },
  gps: { x: -0.75, z: 0.48, yaw: 0.4, pitch: -0.18 },
  compas: { x: -0.15, z: 0.4, yaw: 0.35, pitch: 0.18 },
  ecosonda: { x: -0.7, z: 0.55, yaw: 0.4, pitch: -0.28 },
  monitor: { x: -1.35, z: 0.5, yaw: 0.1, pitch: -0.08 },
  "puesto-babor": { x: -1.7, z: 1.6, yaw: -0.75, pitch: -0.28 },
  luces: { x: 0.2, z: 1.1, yaw: 0, pitch: 0.85 },
  emergencia: { x: 0.15, z: 0.35, yaw: 0.05, pitch: 0.7 },
  puerta: { x: 2.35, z: -0.55, yaw: -1.35, pitch: 0 },
  salida: { x: 2.45, z: 0.05, yaw: -1.35, pitch: 0.2 },
  casilleros: { x: 2.15, z: 1.15, yaw: -1.25, pitch: 0.05 },
  calefactor: { x: 2.15, z: 1.7, yaw: -1.1, pitch: -0.3 },
  clima: { x: -1.1, z: 0.6, yaw: 0.5, pitch: 0.7 },
  cubierta: { x: 0.4, z: 1.5, yaw: 0, pitch: -0.95 }
};

const interactives = [];
const colliders = [];
const keys = new Set();
const player = { x: 0.15, z: 1.95, r: 0.32 };
let renderer;
let scene;
let camera;
let rig;
let raycaster;
let radar;
let hoveredId = null;
let activeId = null;
let dragging = false;
let dragDist = 0;
let lastX = 0;
let lastY = 0;

function colorOf(hex, options) {
  return new THREE.MeshStandardMaterial(Object.assign({
    color: hex,
    roughness: 0.78,
    metalness: 0.05
  }, options));
}

function paint(canvas, draw) {
  const texture = new THREE.CanvasTexture(canvas);
  if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
  draw(canvas.getContext("2d"), canvas.width, canvas.height);
  texture.needsUpdate = true;
  return texture;
}

function makeRadar() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const texture = new THREE.CanvasTexture(canvas);
  if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
  return { canvas, texture, angle: 0.4 };
}

function drawRadar(item, dt) {
  item.angle += dt * 1.4;
  const ctx = item.canvas.getContext("2d");
  const w = item.canvas.width;
  const c = w / 2;
  ctx.fillStyle = "#071a0e";
  ctx.fillRect(0, 0, w, w);
  ctx.strokeStyle = "#1e7a38";
  ctx.lineWidth = 2;
  for (let r = 28; r <= 112; r += 28) {
    ctx.beginPath();
    ctx.arc(c, c, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(c, 10);
  ctx.lineTo(c, w - 10);
  ctx.moveTo(10, c);
  ctx.lineTo(w - 10, c);
  ctx.stroke();
  ctx.fillStyle = "#c6ff9e";
  [[0.22, -0.38], [-0.42, 0.12], [0.18, 0.48], [-0.08, -0.62]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(c + x * c * 0.9, c + y * c * 0.9, 5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.strokeStyle = "rgba(198, 255, 158, 0.9)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(c, c);
  ctx.lineTo(c + Math.cos(item.angle) * 108, c + Math.sin(item.angle) * 108);
  ctx.stroke();
  item.texture.needsUpdate = true;
}

function screenMaterial(texture, glow) {
  return new THREE.MeshStandardMaterial({
    map: texture,
    emissive: new THREE.Color(glow),
    emissiveMap: texture,
    emissiveIntensity: 0.85,
    roughness: 0.42,
    metalness: 0.05
  });
}

function diamondTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  return paint(canvas, (ctx) => {
    ctx.fillStyle = "#1d4eb8";
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.lineWidth = 3;
    for (let i = -256; i < 512; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 256, 256);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i, 256);
      ctx.lineTo(i + 256, 0);
      ctx.stroke();
    }
  });
}

function addBox(parent, width, height, depth, material, x, y, z, equipo, shadow) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = shadow !== false;
  mesh.receiveShadow = shadow !== false;
  parent.add(mesh);
  if (equipo) {
    mesh.userData.equipo = equipo;
    interactives.push(mesh);
  }
  return mesh;
}

function addMesh(parent, geometry, material, x, y, z, equipo) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  if (equipo) {
    mesh.userData.equipo = equipo;
    interactives.push(mesh);
  }
  return mesh;
}

function collide(x, z, width, depth) {
  colliders.push({
    minX: x - width / 2,
    maxX: x + width / 2,
    minZ: z - depth / 2,
    maxZ: z + depth / 2
  });
}

function blocked(x, z) {
  return colliders.some((block) => {
    const cx = Math.max(block.minX, Math.min(x, block.maxX));
    const cz = Math.max(block.minZ, Math.min(z, block.maxZ));
    const dx = x - cx;
    const dz = z - cz;
    return dx * dx + dz * dz < player.r * player.r;
  });
}

function movePlayer(dx, dz) {
  if (!blocked(player.x + dx, player.z)) player.x += dx;
  if (!blocked(player.x, player.z + dz)) player.z += dz;
}

function look(dx, dy) {
  rig.rotation.y -= dx * 0.0024;
  camera.rotation.x -= dy * 0.002;
  camera.rotation.x = Math.max(-1.15, Math.min(1.15, camera.rotation.x));
}

function buildOutside(materials) {
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(160, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0x8ec4e6, side: THREE.BackSide })
  );
  scene.add(sky);

  const waterTex = paint(document.createElement("canvas"), (ctx, w, h) => {
    const canvas = ctx.canvas;
    canvas.width = 128;
    canvas.height = 128;
    ctx.fillStyle = "#2f79b0";
    ctx.fillRect(0, 0, 128, 128);
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 4;
    for (let y = 8; y < 128; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(32, y - 6, 96, y + 6, 128, y);
      ctx.stroke();
    }
  });
  waterTex.wrapS = THREE.RepeatWrapping;
  waterTex.wrapT = THREE.RepeatWrapping;
  waterTex.repeat.set(18, 18);
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(220, 220),
    new THREE.MeshStandardMaterial({ map: waterTex, color: 0x7eb6d8, roughness: 0.35, metalness: 0.15 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, -1.35, -30);
  scene.add(water);
  scene.userData.water = water;

  const craneMat = colorOf(0xd08a2e, { roughness: 0.6, metalness: 0.25 });
  [[-14, -18], [-22, -26], [18, -22]].forEach(([x, z], index) => {
    const crane = new THREE.Group();
    crane.position.set(x, -1.2, z);
    const mast = new THREE.Mesh(new THREE.BoxGeometry(0.45, 11, 0.45), craneMat);
    mast.position.y = 5.5;
    const jib = new THREE.Mesh(new THREE.BoxGeometry(7, 0.28, 0.28), craneMat);
    jib.position.set(2.2, 10.2, 0);
    crane.add(mast, jib);
    scene.add(crane);
    if (index === 2) {
      const bank = new THREE.Mesh(new THREE.BoxGeometry(16, 1.4, 10), colorOf(0x5d8a45));
      bank.position.set(20, -0.5, -16);
      scene.add(bank);
    }
  });

  const hull = colorOf(0x8a3a32, { roughness: 0.7 });
  const ship = new THREE.Group();
  ship.position.set(7, -0.7, -24);
  const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.3, 11), hull);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.6, 2.4), colorOf(0xf2efe6));
  cabin.position.set(0, 1.3, -2);
  ship.add(body, cabin);
  scene.add(ship);
}

function buildWindows(materials) {
  const glassY = 1.68;
  const glassH = 1.05;
  [-3.15, -1.15, 0.85, 2.75].forEach((x, index) => {
    addBox(scene, 1.55, glassH, 0.04, materials.glass, x, glassY, -3.22, "proa", false);
    if (index === 1 || index === 2) {
      const mark = colorOf(0xf7f4ee, { roughness: 0.5 });
      const a = addBox(scene, 0.34, 0.025, 0.012, mark, x, glassY, -3.18, null, false);
      const b = addBox(scene, 0.34, 0.025, 0.012, mark, x, glassY, -3.18, null, false);
      a.rotation.z = Math.PI / 4;
      b.rotation.z = -Math.PI / 4;
    }
  });
  [-2.3, -0.7, 0.9].forEach((z) => {
    addBox(scene, 0.04, glassH, 1.35, materials.glass, -4.18, glassY, z, "babor", false);
  });
  addBox(scene, 8.7, 1.05, 0.18, materials.wall, 0, 0.52, -3.28);
  addBox(scene, 8.7, 0.4, 0.16, materials.wall, 0, 2.4, -3.28);
  [-3.95, -2.15, -0.15, 1.8, 3.7].forEach((x) => {
    addBox(scene, 0.1, glassH, 0.12, materials.frame, x, glassY, -3.24, null, false);
  });
  addBox(scene, 0.16, 1.05, 6.6, materials.wall, -4.26, 0.52, -0.05);
  addBox(scene, 0.14, 0.4, 6.6, materials.wall, -4.26, 2.4, -0.05);
  [-3.1, -1.5, 0.1, 1.7].forEach((z) => {
    addBox(scene, 0.1, glassH, 0.1, materials.frame, -4.2, glassY, z, null, false);
  });
  collide(0, -3.28, 8.7, 0.22);
  collide(-4.26, -0.05, 0.22, 6.6);
}

function buildWheel(parent, materials) {
  const group = new THREE.Group();
  const rim = addMesh(group, new THREE.TorusGeometry(0.4, 0.02, 8, 36), materials.darkMetal, 0, 0, 0, "timon");
  rim.castShadow = true;
  for (let i = 0; i < 6; i += 1) {
    const angle = (i / 6) * Math.PI * 2;
    const spoke = addMesh(group, new THREE.CylinderGeometry(0.009, 0.009, 0.38, 6), materials.silver, Math.cos(angle) * 0.19, Math.sin(angle) * 0.19, 0, "timon");
    spoke.rotation.z = angle - Math.PI / 2;
  }
  const hub = addMesh(group, new THREE.CylinderGeometry(0.05, 0.05, 0.05, 16), materials.silver, 0, 0, 0, "timon");
  hub.rotation.x = Math.PI / 2;
  for (let i = 0; i < 3; i += 1) {
    const angle = (i / 3) * Math.PI * 2 + 0.4;
    const grip = addMesh(group, new THREE.CylinderGeometry(0.016, 0.016, 0.11, 8), materials.darkMetal, Math.cos(angle) * 0.4, Math.sin(angle) * 0.4, 0.05, "timon");
    grip.rotation.x = Math.PI / 2;
  }
  group.position.set(0.02, 1.08, 0.5);
  parent.add(group);
}

function buildLever(parent, x, z, materials) {
  const base = addMesh(parent, new THREE.CylinderGeometry(0.05, 0.06, 0.04, 12), materials.darkMetal, x, 1.04, z, "palancas-motores");
  const shaft = addMesh(parent, new THREE.CylinderGeometry(0.018, 0.018, 0.28, 8), materials.silver, x, 1.18, z + 0.04, "palancas-motores");
  shaft.rotation.x = 0.35;
  const knob = addMesh(parent, new THREE.SphereGeometry(0.045, 12, 10), materials.red, x, 1.32, z + 0.09, "palancas-motores");
  knob.position.y = 1.33;
}

function buildHelm(materials, screens) {
  const group = new THREE.Group();
  group.position.set(0.2, 0, -1.22);
  addBox(group, 2.55, 0.16, 0.98, materials.console, 0, 0.08, 0);
  addBox(group, 2.35, 0.82, 0.82, materials.console, 0, 0.56, -0.02);
  addBox(group, 2.15, 0.08, 0.78, materials.consoleDark, 0, 1.0, -0.02, null, false);

  addBox(group, 0.5, 0.36, 0.05, screens.radarMat, -0.62, 1.22, -0.12, "radar");
  addBox(group, 0.28, 0.2, 0.05, screens.gpsMat, -1.02, 1.16, 0.02, "gps");
  addBox(group, 0.3, 0.18, 0.05, screens.gpsMat, -1.0, 0.9, 0.22, "gps");
  addBox(group, 0.34, 0.2, 0.05, screens.echoMat, -0.62, 0.86, 0.24, "ecosonda");
  const pole = addMesh(group, new THREE.CylinderGeometry(0.015, 0.015, 0.28, 8), materials.darkMetal, -0.28, 1.2, -0.22, "compas");
  addBox(group, 0.2, 0.14, 0.04, screens.compassMat, -0.28, 1.38, -0.2, "compas");
  addBox(group, 0.42, 0.18, 0.05, screens.rpmMat, 0.42, 1.16, -0.05, "rpm");
  addBox(group, 0.46, 0.28, 0.05, screens.breakers, 0.95, 1.2, -0.08, "distribucion");
  addBox(group, 0.32, 0.16, 0.05, screens.wipers, 1.02, 0.9, 0.22, "parabrisas");

  const stick = addMesh(group, new THREE.CylinderGeometry(0.02, 0.028, 0.16, 8), materials.darkMetal, 0.22, 1.1, 0.24, "joystick");
  addMesh(group, new THREE.SphereGeometry(0.045, 12, 10), materials.darkMetal, 0.22, 1.2, 0.24, "joystick");
  addMesh(group, new THREE.CylinderGeometry(0.09, 0.09, 0.03, 16), materials.consoleDark, 0.22, 1.02, 0.24, "joystick");
  addMesh(group, new THREE.CylinderGeometry(0.04, 0.04, 0.03, 12), materials.red, 0.48, 1.03, 0.3, "pito");

  buildLever(group, 0.72, 0.2, materials);
  buildLever(group, 0.9, 0.2, materials);
  buildWheel(group, materials);
  scene.add(group);
  collide(0.2, -1.22, 2.55, 1.15);
}

function buildPort(materials, screens) {
  const group = new THREE.Group();
  group.position.set(-2.75, 0, -1.15);
  addBox(group, 1.45, 1.0, 0.72, materials.console, 0, 0.5, 0);
  addBox(group, 0.42, 0.3, 0.05, screens.radarMat, -0.24, 1.16, -0.05, "radar");
  addBox(group, 0.38, 0.28, 0.05, screens.chartMat, 0.26, 1.14, -0.02, "monitor");
  const lever = addMesh(group, new THREE.CylinderGeometry(0.025, 0.03, 0.2, 8), materials.darkMetal, -0.2, 0.78, 0.32, "palanca");
  lever.rotation.x = -0.5;
  addMesh(group, new THREE.SphereGeometry(0.04, 10, 8), materials.red, -0.2, 0.66, 0.4, "palanca");
  scene.add(group);
  collide(-2.75, -1.15, 1.45, 0.8);
}

function buildChair(x, z, yaw, equipo, materials) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = yaw;
  addBox(group, 0.52, 0.1, 0.5, materials.chair, 0, 0.52, 0, equipo);
  addBox(group, 0.52, 0.62, 0.1, materials.chair, 0, 0.9, 0.2, equipo);
  addMesh(group, new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8), materials.metal, 0, 0.26, 0, equipo);
  addMesh(group, new THREE.CylinderGeometry(0.22, 0.22, 0.04, 12), materials.metal, 0, 0.05, 0, equipo);
  scene.add(group);
  collide(x, z, 0.56, 0.56);
}

function buildStarboard(materials) {
  const door = new THREE.Group();
  door.position.set(4.12, 0, -0.55);
  addBox(door, 0.08, 2.05, 0.96, materials.white, 0, 1.02, 0, "puerta");
  addBox(door, 0.02, 0.42, 0.28, materials.glass, -0.05, 1.45, 0, "puerta", false);
  addBox(door, 0.03, 0.08, 0.08, materials.metal, -0.06, 1.0, 0.28, "puerta");
  scene.add(door);

  const signTex = paint(Object.assign(document.createElement("canvas"), { width: 256, height: 128 }), (ctx) => {
    ctx.fillStyle = "#128a3c";
    ctx.fillRect(0, 0, 256, 128);
    ctx.fillStyle = "#f4fff6";
    ctx.font = "bold 54px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SALIDA", 128, 64);
  });
  const sign = addBox(scene, 0.08, 0.18, 0.42, screenMaterial(signTex, 0x0c6b30), 4.02, 2.05, 0.35, "salida", false);

  const shelf = new THREE.Group();
  shelf.position.set(3.95, 0, 1.35);
  addBox(shelf, 0.28, 1.7, 1.15, materials.wood, 0, 1.15, 0, "casilleros");
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      addBox(shelf, 0.06, 0.28, 0.28, materials.wallDark, -0.12, 0.55 + row * 0.38, -0.36 + col * 0.36, "casilleros", false);
    }
  }
  scene.add(shelf);
  collide(3.95, 1.35, 0.4, 1.2);

  const heater = new THREE.Group();
  heater.position.set(3.55, 0, 2.15);
  addBox(heater, 0.28, 0.55, 1.1, materials.white, 0, 0.4, 0, "calefactor");
  for (let i = 0; i < 4; i += 1) {
    addBox(heater, 0.04, 0.03, 0.9, materials.consoleDark, -0.14, 0.28 + i * 0.1, 0, "calefactor", false);
  }
  scene.add(heater);
  collide(3.55, 2.15, 0.35, 1.15);
  sign.lookAt = null;
}

function buildCeiling(materials) {
  addBox(scene, 8.7, 0.1, 6.7, materials.ceiling, 0, 2.62, -0.05, null, false);
  [-1.6, 0.4, 1.8].forEach((x) => {
    addBox(scene, 1.1, 0.06, 0.16, materials.glow, x, 2.48, -1.3, "luces", false);
  });
  addBox(scene, 0.7, 0.28, 0.45, materials.white, -3.3, 2.35, -1.4, "clima");
  addBox(scene, 0.7, 0.28, 0.45, materials.white, 3.2, 2.35, 0.8, "clima");
  const canister = new THREE.Group();
  canister.position.set(0.45, 2.32, -1.7);
  const shell = addMesh(
    canister,
    THREE.CapsuleGeometry ? new THREE.CapsuleGeometry(0.11, 0.55, 4, 10) : new THREE.CylinderGeometry(0.11, 0.11, 0.75, 12),
    materials.red,
    0, 0, 0,
    "emergencia"
  );
  shell.rotation.z = Math.PI / 2;
  scene.add(canister);
}

function setupScene() {
  const canvas = document.getElementById("view");
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  if (THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x8ec4e6);
  scene.fog = new THREE.Fog(0x8ec4e6, 24, 70);

  rig = new THREE.Group();
  camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.08, 220);
  camera.position.y = 1.62;
  camera.rotation.x = 0.08;
  rig.add(camera);
  rig.position.set(player.x, 0, player.z);
  scene.add(rig);

  const hemi = new THREE.HemisphereLight(0xf4f8ff, 0x6d6248, 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff4dd, 1.25);
  sun.position.set(-4, 9, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -10;
  sun.shadow.camera.right = 10;
  sun.shadow.camera.top = 10;
  sun.shadow.camera.bottom = -10;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 28;
  sun.shadow.bias = -0.0004;
  scene.add(sun, sun.target);
  sun.target.position.set(0, 0.5, -1);
  const lamp = new THREE.PointLight(0xfff6e4, 0.22, 9, 2);
  lamp.position.set(0.2, 2.35, -0.6);
  scene.add(lamp);

  const floorTex = diamondTexture();
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(7, 5);
  floorTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  radar = makeRadar();
  const gpsCanvas = Object.assign(document.createElement("canvas"), { width: 256, height: 160 });
  const gpsTex = paint(gpsCanvas, (ctx) => {
    ctx.fillStyle = "#102033";
    ctx.fillRect(0, 0, 256, 160);
    ctx.fillStyle = "#d7ecff";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("GPS", 16, 36);
    ctx.font = "22px sans-serif";
    ctx.fillText("LAT  10°26.80' N", 16, 78);
    ctx.fillText("LON 075°32.10' W", 16, 110);
    ctx.fillStyle = "#8fd0ff";
    ctx.fillText("SOG 0.2 kn", 16, 144);
  });
  const echoCanvas = Object.assign(document.createElement("canvas"), { width: 256, height: 160 });
  const echoTex = paint(echoCanvas, (ctx) => {
    ctx.fillStyle = "#07140c";
    ctx.fillRect(0, 0, 256, 160);
    ctx.strokeStyle = "#7dff9a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 40);
    for (let x = 10; x < 250; x += 8) ctx.lineTo(x, 48 + Math.sin(x * 0.12) * 16 + (x > 140 ? 20 : 0));
    ctx.stroke();
    ctx.fillStyle = "#d8ffe4";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText("8.4 m", 16, 130);
  });
  const rpmCanvas = Object.assign(document.createElement("canvas"), { width: 256, height: 128 });
  const rpmTex = paint(rpmCanvas, (ctx) => {
    ctx.fillStyle = "#1a1e16";
    ctx.fillRect(0, 0, 256, 128);
    ctx.fillStyle = "#d8f5b0";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("RPM", 16, 32);
    ctx.font = "28px sans-serif";
    ctx.fillText("P  420", 16, 78);
    ctx.fillText("S  418", 16, 112);
  });
  const breakerTex = paint(Object.assign(document.createElement("canvas"), { width: 256, height: 160 }), (ctx) => {
    ctx.fillStyle = "#2b3136";
    ctx.fillRect(0, 0, 256, 160);
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        ctx.fillStyle = col === 4 && row === 1 ? "#c4372f" : "#111417";
        ctx.fillRect(18 + col * 38, 18 + row * 46, 26, 32);
      }
    }
  });
  const wiperTex = paint(Object.assign(document.createElement("canvas"), { width: 256, height: 128 }), (ctx) => {
    ctx.fillStyle = "#343a40";
    ctx.fillRect(0, 0, 256, 128);
    ctx.fillStyle = "#15181b";
    ctx.fillRect(24, 36, 40, 56);
    ctx.fillRect(80, 36, 40, 56);
    ctx.beginPath();
    ctx.fillStyle = "#d0d4d8";
    ctx.arc(176, 64, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#c4372f";
    ctx.fillRect(172, 40, 6, 26);
  });
  const chartTex = paint(Object.assign(document.createElement("canvas"), { width: 256, height: 160 }), (ctx) => {
    ctx.fillStyle = "#d7e4ef";
    ctx.fillRect(0, 0, 256, 160);
    ctx.fillStyle = "#7eaf6a";
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(80, 40);
    ctx.lineTo(60, 160);
    ctx.lineTo(0, 160);
    ctx.fill();
    ctx.strokeStyle = "#24506e";
    ctx.lineWidth = 2;
    ctx.strokeRect(8, 8, 240, 144);
    ctx.fillStyle = "#16324a";
    ctx.beginPath();
    ctx.moveTo(150, 70);
    ctx.lineTo(138, 98);
    ctx.lineTo(162, 98);
    ctx.fill();
  });
  const compassTex = paint(Object.assign(document.createElement("canvas"), { width: 128, height: 96 }), (ctx) => {
    ctx.fillStyle = "#101820";
    ctx.fillRect(0, 0, 128, 96);
    ctx.strokeStyle = "#e8eef2";
    ctx.beginPath();
    ctx.arc(64, 48, 28, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#e8eef2";
    ctx.font = "bold 18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("012°", 64, 54);
  });

  const materials = {
    wall: colorOf(0xe6e0d4),
    wallDark: colorOf(0xc9b39a, { roughness: 0.8 }),
    console: colorOf(0xb4bdc4, { roughness: 0.55, metalness: 0.16 }),
    consoleDark: colorOf(0x2c333a, { roughness: 0.45, metalness: 0.25 }),
    metal: colorOf(0x8e989f, { roughness: 0.3, metalness: 0.75 }),
    silver: colorOf(0xd7dee3, { roughness: 0.22, metalness: 0.88 }),
    darkMetal: colorOf(0x24282c, { roughness: 0.38, metalness: 0.62 }),
    chair: colorOf(0x17191c, { roughness: 0.58 }),
    wood: colorOf(0x6b4126, { roughness: 0.72 }),
    red: colorOf(0xc4372f, { roughness: 0.4 }),
    white: colorOf(0xf3f0e8),
    ceiling: colorOf(0xf3efe4, { emissive: 0x6a624f, emissiveIntensity: 0.55, roughness: 0.95 }),
    glow: colorOf(0xfff6df, { emissive: 0xfff1c9, emissiveIntensity: 0.9, roughness: 0.4 }),
    glass: new THREE.MeshStandardMaterial({
      color: 0xb7d4e4,
      transparent: true,
      opacity: 0.22,
      roughness: 0.04,
      metalness: 0.05,
      depthWrite: false
    }),
    frame: colorOf(0x3c4650, { metalness: 0.35, roughness: 0.4 })
  };

  const screens = {
    radarMat: screenMaterial(radar.texture, 0x0d3a1c),
    gpsMat: screenMaterial(gpsTex, 0x12304a),
    echoMat: screenMaterial(echoTex, 0x0d3a1c),
    rpmMat: screenMaterial(rpmTex, 0x243018),
    breakers: screenMaterial(breakerTex, 0x222222),
    wipers: screenMaterial(wiperTex, 0x222222),
    chartMat: screenMaterial(chartTex, 0x24506e),
    compassMat: screenMaterial(compassTex, 0x203040)
  };

  const floor = addBox(scene, 8.55, 0.08, 6.55, colorOf(0xffffff, { map: floorTex, roughness: 0.94 }), 0, -0.04, -0.05, "cubierta");
  floor.receiveShadow = true;
  addBox(scene, 8.7, 2.6, 0.16, materials.wall, 0, 1.3, 3.28);
  collide(0, 3.28, 8.7, 0.2);
  addBox(scene, 0.16, 2.6, 6.6, materials.wall, 4.28, 1.3, -0.05);
  collide(4.28, -0.05, 0.2, 6.6);

  buildWindows(materials);
  buildOutside(materials);
  buildHelm(materials, screens);
  buildPort(materials, screens);
  buildChair(-0.35, 1.4, 0, "puesto-timon", materials);
  buildChair(-2.55, 0.95, 0.15, "puesto-babor", materials);
  buildStarboard(materials);
  buildCeiling(materials);

  const desk = new THREE.Group();
  desk.position.set(-1.45, 0, -0.95);
  addBox(desk, 0.7, 0.74, 0.5, materials.console, 0, 0.37, 0);
  addBox(desk, 0.46, 0.32, 0.04, screens.chartMat, 0, 0.95, -0.08, "monitor");
  scene.add(desk);
  collide(-1.45, -0.95, 0.7, 0.55);

  raycaster = new THREE.Raycaster();
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

function renderCard(id) {
  const item = byId[id];
  const card = document.getElementById("card");
  if (!item) return;
  activeId = id;
  const index = EQUIPOS.findIndex((entry) => entry.id === id);
  card.hidden = false;
  document.getElementById("app").classList.add("has-card");
  card.innerHTML = "";
  const kicker = document.createElement("div");
  kicker.className = "card-kicker";
  kicker.innerHTML = "<span></span><span></span>";
  kicker.firstChild.textContent = item.category;
  kicker.lastChild.textContent = (index + 1) + " / " + EQUIPOS.length;
  const title = document.createElement("h3");
  title.textContent = item.title;
  const body = document.createElement("p");
  body.textContent = item.body;
  const say = document.createElement("p");
  say.className = "say";
  const label = document.createElement("span");
  label.textContent = "Para contarlo";
  say.append(label, document.createTextNode(item.say));
  const actions = document.createElement("div");
  actions.className = "card-actions";
  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "step";
  prev.textContent = "Anterior";
  prev.disabled = index === 0;
  prev.addEventListener("click", () => go(EQUIPOS[index - 1].id));
  const next = document.createElement("button");
  next.type = "button";
  next.className = "primary";
  next.textContent = index === EQUIPOS.length - 1 ? "Cerrar" : "Siguiente";
  next.addEventListener("click", () => {
    if (index === EQUIPOS.length - 1) closeCard();
    else go(EQUIPOS[index + 1].id);
  });
  const close = document.createElement("button");
  close.type = "button";
  close.className = "ghost";
  close.textContent = "Cerrar";
  close.addEventListener("click", closeCard);
  actions.append(prev, next, close);
  card.append(kicker, title, body, say, actions);
  document.querySelectorAll(".equipo").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === id);
  });
}

function closeCard() {
  activeId = null;
  document.getElementById("card").hidden = true;
  document.getElementById("app").classList.remove("has-card");
  document.querySelectorAll(".equipo").forEach((button) => button.classList.remove("active"));
}

function go(id) {
  const spot = VIEW[id];
  if (!spot) return;
  let x = spot.x;
  let z = spot.z;
  for (let step = 0; step < 10 && blocked(x, z); step += 1) {
    x += Math.sin(spot.yaw) * 0.18;
    z += Math.cos(spot.yaw) * 0.18;
  }
  if (!blocked(x, z)) {
    player.x = x;
    player.z = z;
    rig.rotation.y = spot.yaw;
    camera.rotation.x = spot.pitch;
  }
  renderCard(id);
}

function interact() {
  if (hoveredId) go(hoveredId);
}

function bindUI() {
  const list = document.getElementById("list");
  EQUIPOS.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "equipo";
    button.dataset.id = item.id;
    const num = document.createElement("span");
    num.className = "index";
    num.textContent = String(index + 1).padStart(2, "0");
    button.append(num, document.createTextNode(item.title));
    button.addEventListener("click", () => go(item.id));
    list.appendChild(button);
  });
  document.getElementById("toggle-list").addEventListener("click", () => {
    const collapsed = list.classList.toggle("collapsed");
    const toggle = document.getElementById("toggle-list");
    toggle.textContent = collapsed ? "Mostrar" : "Ocultar";
    toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
  });
  document.getElementById("play").addEventListener("click", () => {
    document.getElementById("welcome").hidden = true;
    const view = document.getElementById("view");
    const lock = view.requestPointerLock && view.requestPointerLock();
    if (lock && lock.catch) lock.catch(() => {});
  });

  const canvas = document.getElementById("view");
  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragging = true;
    dragDist = 0;
    lastX = event.clientX;
    lastY = event.clientY;
    canvas.classList.add("is-grabbing");
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!dragging || document.pointerLockElement === canvas) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    dragDist += Math.abs(dx) + Math.abs(dy);
    look(dx, dy);
  });
  const endDrag = () => {
    const tapped = dragDist < 8;
    dragging = false;
    canvas.classList.remove("is-grabbing");
    if (tapped && document.getElementById("welcome").hidden) interact();
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", () => { dragging = false; });
  canvas.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("mousemove", (event) => {
    if (document.pointerLockElement !== canvas) return;
    look(event.movementX || 0, event.movementY || 0);
  });
  document.addEventListener("keydown", (event) => {
    if (event.code === "Tab") {
      event.preventDefault();
      document.getElementById("toggle-list").click();
      return;
    }
    if (["KeyW", "KeyA", "KeyS", "KeyD", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)) {
      keys.add(event.code);
      event.preventDefault();
    }
    if (event.code === "KeyE") interact();
    if (event.code === "Escape") closeCard();
  });
  document.addEventListener("keyup", (event) => keys.delete(event.code));
}

function frame() {
  const dt = Math.min(0.05, clock.getDelta());
  drawRadar(radar, dt);
  let forward = 0;
  let strafe = 0;
  if (keys.has("KeyW") || keys.has("ArrowUp")) forward += 1;
  if (keys.has("KeyS") || keys.has("ArrowDown")) forward -= 1;
  if (keys.has("KeyD") || keys.has("ArrowRight")) strafe += 1;
  if (keys.has("KeyA") || keys.has("ArrowLeft")) strafe -= 1;
  if (forward || strafe) {
    const yaw = rig.rotation.y;
    const speed = 2.5 * dt;
    const sin = Math.sin(yaw);
    const cos = Math.cos(yaw);
    const length = Math.hypot(forward, strafe) || 1;
    movePlayer(
      (-sin * forward + cos * strafe) / length * speed,
      (-cos * forward - sin * strafe) / length * speed
    );
  }
  rig.position.set(player.x, 0, player.z);
  if (scene.userData.water) scene.userData.water.material.map.offset.x += dt * 0.03;

  rig.updateMatrixWorld(true);
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const hits = raycaster.intersectObjects(interactives, false);
  const hit = hits.find((entry) => entry.distance < 3.6 && entry.object.userData.equipo);
  hoveredId = hit ? hit.object.userData.equipo : null;
  const prompt = document.getElementById("prompt");
  const cardOpen = !document.getElementById("card").hidden;
  if (hoveredId && !cardOpen && document.getElementById("welcome").hidden) {
    prompt.hidden = false;
    prompt.innerHTML = "<kbd>E</kbd> " + byId[hoveredId].title;
  } else {
    prompt.hidden = true;
  }
  renderer.render(scene, camera);
}

const clock = new THREE.Clock();

setupScene();
bindUI();
renderer.setAnimationLoop(frame);
window.puente = { go, equipos: EQUIPOS, player, blocked };
