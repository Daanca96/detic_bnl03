const CATEGORIES = [
  { id: "navegacion", label: "Navegación" },
  { id: "gobierno", label: "Gobierno" },
  { id: "puestos", label: "Puestos" },
  { id: "seguridad", label: "Seguridad" },
  { id: "confort", label: "Confort" }
];

const TOUR = [
  {
    id: "proa",
    title: "Vista de proa",
    category: "navegacion",
    spots: [{ u: 0.5, v: 0.42 }],
    aim: { u: 0.48, v: 0.5 },
    body: "Los cristales de proa son la referencia de quien gobierna: horizonte, boyas, tráfico y la propia proa. La franja oscura bajo las ventanas corta el reflejo de las luces de dentro. Las aspas blancas marcan el vidrio, para no confundirlo con un hueco, y sirven de referencia visual. No son un instrumento.",
    say: "Por estos cristales se gobierna a la vista. Lo que queda centrado es la proa."
  },
  {
    id: "babor",
    title: "Banda de babor",
    category: "navegacion",
    spots: [{ u: 0.12, v: 0.44 }],
    aim: { u: 0.12, v: 0.52 },
    body: "Ventanal de la banda izquierda, mirando hacia proa. En la foto da al muelle y a las grúas del puerto: desde aquí se juzga la distancia al costado y el través. Babor es siempre la izquierda navegando hacia proa, no la izquierda de quien mira la foto.",
    say: "Babor es la izquierda yendo hacia proa. Este cristal controla el costado y el muelle."
  },
  {
    id: "timon",
    title: "Timón",
    category: "gobierno",
    spots: [{ u: 0.442, v: 0.66 }],
    aim: { u: 0.442, v: 0.74 },
    body: "Rueda de gobierno, en el eje del puente. Al girarla se ordena el ángulo de la pala, a través del servotimón, y el buque cae a una banda o a la otra. No desplaza el barco de costado: cambia el rumbo. A la vía, la pala queda centrada.",
    say: "El timón cambia el rumbo. A la vía, la pala queda al centro."
  },
  {
    id: "joystick",
    title: "Joystick",
    category: "gobierno",
    spots: [{ u: 0.458, v: 0.632 }],
    aim: { u: 0.46, v: 0.7 },
    body: "Joystick junto a la rueda, en la misma consola del timón. Desde el puesto de gobierno manda la maniobra fina: propulsor, hélice de proa o un eje combinado, según cómo esté asignado en este buque. Es otro mando distinto de la palanca que está en la consola de babor.",
    say: "Este joystick está al lado del timón. Sirve para mover el buque de costado en la maniobra."
  },
  {
    id: "rpm",
    title: "Tablero de RPM",
    category: "gobierno",
    spots: [{ u: 0.478, v: 0.572 }],
    aim: { u: 0.47, v: 0.64 },
    body: "Indicador de revoluciones de los motores, encima de las palancas. Muestra si el régimen sube, baja o se queda en lo ordenado. La palanca da la orden; este tablero confirma que la máquina respondió.",
    say: "Aquí se leen las revoluciones. La palanca ordena y el tablero dice si el motor obedeció."
  },
  {
    id: "pito",
    title: "Pito",
    category: "gobierno",
    spots: [{ u: 0.49, v: 0.648 }],
    aim: { u: 0.48, v: 0.72 },
    body: "Mando de la bocina del buque. Con él se hacen las pitadas de maniobra y de visibilidad reducida. No es una alarma de la consola: el sonido sale hacia fuera, para que lo oigan los otros barcos.",
    say: "El pito es la bocina. Avisa la maniobra a quien está fuera."
  },
  {
    id: "palancas-motores",
    title: "Palancas de motores",
    category: "gobierno",
    spots: [{ u: 0.515, v: 0.632 }],
    aim: { u: 0.5, v: 0.7 },
    body: "Palancas de los motores y propulsores, con puño rojo. Hacia adelante, avante; hacia atrás, atrás; en el centro, paro. Cada una corresponde a un eje o a un propulsor. El resultado se mira en el tablero de RPM, no solo en la palanca.",
    say: "Estas palancas dan avante, atrás o paro. Las revoluciones se confirman en el tablero de al lado."
  },
  {
    id: "parabrisas",
    title: "Parabrisas",
    category: "gobierno",
    spots: [{ u: 0.548, v: 0.628 }],
    aim: { u: 0.53, v: 0.7 },
    body: "Mandos del limpiaparabrisas: interruptores y selector de velocidad, en el costado de estribor de la consola. Con lluvia o roción limpian los cristales de proa. El cristal está arriba; aquí solo está el mando.",
    say: "Desde aquí se acciona el limpiaparabrisas. Sin cristal limpio no hay guardia visual."
  },
  {
    id: "distribucion",
    title: "Tablero de distribución",
    category: "gobierno",
    spots: [{ u: 0.54, v: 0.568 }],
    aim: { u: 0.52, v: 0.64 },
    body: "Interruptores de esta consola. Reparten la alimentación de pantallas, luces, limpiaparabrisas y el resto de consumidores del puente de gobierno. Si un equipo de aquí se apaga, lo primero es mirar si su interruptor está caído. No es el cuadro principal del buque.",
    say: "Este tablero enciende y protege los equipos de la consola. No es el cuadro eléctrico del barco."
  },
  {
    id: "puesto-timon",
    title: "Puesto del timón",
    category: "puestos",
    spots: [{ u: 0.375, v: 0.8 }],
    aim: { u: 0.4, v: 0.7 },
    body: "Silla enfrentada a la rueda. Quien se sienta aquí tiene la proa enfilada por el cristal y la consola de gobierno al alcance. En la mar puede ocuparla el timonel; en la maniobra, quien lleva la conducción.",
    say: "Desde esta silla, el timón queda delante y la proa en el cristal."
  },
  {
    id: "palanca",
    title: "Palanca de babor",
    category: "gobierno",
    spots: [{ u: 0.15, v: 0.68 }],
    aim: { u: 0.16, v: 0.62 },
    body: "Palanca de la consola de babor, no el joystick que está junto al timón. Con el buque casi parado el timón rinde poco, y esta palanca da el empuje lateral de la maniobra: hélice de proa, propulsor o un mando combinado, según cómo esté asignada en este buque.",
    say: "Esta es la palanca del puesto de babor. El joystick del timón es el otro, junto a la rueda."
  },
  {
    id: "radar",
    title: "Radar",
    category: "navegacion",
    spots: [
      { u: 0.366, v: 0.568 },
      { u: 0.155, v: 0.575 }
    ],
    aim: { u: 0.36, v: 0.64 },
    body: "Hay una pantalla grande junto al timón y otras en la consola de babor. Muestran el radar: costa, boyas y otros buques, también de noche o con niebla. La de tono verde es la imagen típica. El radar dice qué hay alrededor; el GPS y la carta dicen dónde está el buque.",
    say: "El radar muestra lo que el ojo no alcanza. Hay pantalla junto al timón y en el puesto de babor."
  },
  {
    id: "gps",
    title: "GPS",
    category: "navegacion",
    spots: [
      { u: 0.34, v: 0.552 },
      { u: 0.348, v: 0.605 }
    ],
    aim: { u: 0.35, v: 0.64 },
    body: "Receptores de posición por satélite, en el costado de babor de la consola del timón. Dan la latitud y la longitud del buque. Van repetidos a propósito: si uno falla, el otro sigue. Esa posición se contrasta con la carta y con lo que se ve por el cristal.",
    say: "El GPS dice dónde estamos. Hay más de uno para no quedarse sin posición si falla un equipo."
  },
  {
    id: "compas",
    title: "Compás satelital",
    category: "navegacion",
    spots: [{ u: 0.37, v: 0.502 }],
    aim: { u: 0.37, v: 0.58 },
    body: "Compás que toma el rumbo de los satélites, montado alto para leerlo sin soltar la vista de proa. Dentro de un casco de acero es más estable que un compás magnético. De ese rumbo se alimentan el radar, la carta y el piloto, cuando lo hay.",
    say: "El compás satelital da el rumbo de la proa. Es la referencia del radar y de la carta."
  },
  {
    id: "ecosonda",
    title: "Ecosonda",
    category: "navegacion",
    spots: [{ u: 0.348, v: 0.64 }],
    aim: { u: 0.36, v: 0.7 },
    body: "Mide la profundidad bajo el buque con un pulso de sonido que rebota en el fondo. En puerto, canal o aguas poco profundas se vigila todo el tiempo. La carta dice el fondo que debería haber; la ecosonda dice el fondo que hay ahora.",
    say: "La ecosonda mide el agua que queda debajo. No sustituye a la carta: la comprueba."
  },
  {
    id: "monitor",
    title: "Monitor de guardia",
    category: "navegacion",
    spots: [{ u: 0.27, v: 0.515 }],
    aim: { u: 0.28, v: 0.58 },
    body: "Pantalla aparte, sobre el escritorio, de cara al puesto de babor. Ahí se deja la carta, una cámara, el parte o el programa de la guardia, sin tapar el radar ni la consola de gobierno.",
    say: "Este monitor es de consulta. No sustituye al radar ni al timón."
  },
  {
    id: "puesto-babor",
    title: "Puesto de babor",
    category: "puestos",
    spots: [{ u: 0.18, v: 0.76 }],
    aim: { u: 0.2, v: 0.66 },
    body: "Silla de la consola de radar. Desde aquí se sigue el tráfico y la carta, al lado de quien gobierna, con el ventanal de babor a la vista. Es un puesto de guardia, no un asiento de paso.",
    say: "Desde aquí se vigilan las pantallas y, de reojo, la banda de babor."
  },
  {
    id: "luces",
    title: "Luces del puente",
    category: "confort",
    spots: [{ u: 0.38, v: 0.23 }],
    aim: { u: 0.42, v: 0.32 },
    body: "Tubos del techo. De día pueden ir así, en blanco. De noche se bajan o se pasan a rojo: una luz blanca fuerte dentro del puente apaga la visión de fuera y llena los cristales de reflejo.",
    say: "De noche el puente se oscurece. Con el techo así de blanco, fuera no se ve."
  },
  {
    id: "emergencia",
    title: "Equipo del techo",
    category: "seguridad",
    spots: [{ u: 0.548, v: 0.135 }],
    aim: { u: 0.52, v: 0.24 },
    body: "Cilindro rojo trincado al techo, sobre la zona de proa. Por el color y por cómo va sujeto es material de emergencia. En muchos buques ese volumen es una balsa embalada o un equipo de salvamento. El nombre exacto está en su etiqueta y en el plano de seguridad, no en la foto.",
    say: "Lo rojo del techo es emergencia. El nombre exacto se lee en la etiqueta del buque."
  },
  {
    id: "puerta",
    title: "Puerta de estribor",
    category: "seguridad",
    spots: [{ u: 0.71, v: 0.48 }],
    aim: { u: 0.68, v: 0.55 },
    body: "Puerta metálica con junta, en el costado de estribor. Cierra el puente al agua, al viento y al ruido, y es la salida por esa banda. En la mar va cerrada. La letra del cristal es una marca de este buque para identificar la puerta, no un equipo de navegación.",
    say: "Esta puerta cierra el puente y es la salida por estribor."
  },
  {
    id: "salida",
    title: "Señal de salida",
    category: "seguridad",
    spots: [{ u: 0.955, v: 0.57 }],
    aim: { u: 0.9, v: 0.5 },
    body: "Señal verde junto al costado de estribor. Indica el camino para evacuar el puente. Se lee junto con la puerta: la señal marca el sentido y la puerta es el paso.",
    say: "La señal verde marca por dónde se sale del puente si hay que evacuar."
  },
  {
    id: "casilleros",
    title: "Casilleros",
    category: "navegacion",
    spots: [{ u: 0.8, v: 0.4 }],
    aim: { u: 0.78, v: 0.48 },
    body: "Estantería de casillas en el mamparo de estribor. Ordena lo que la guardia todavía consulta en papel: cartas, derroteros, avisos a los navegantes y planos. Cada casilla evita buscar un documento por todo el puente.",
    say: "Aquí está la documentación en papel: cartas, publicaciones y planos."
  },
  {
    id: "calefactor",
    title: "Calefactor de estribor",
    category: "confort",
    spots: [{ u: 0.81, v: 0.66 }],
    aim: { u: 0.78, v: 0.58 },
    body: "Unidad blanca de lamas, a la altura de la cubierta, bajo los casilleros. Apoya la calefacción o mueve el aire en esta banda, donde el equipo del techo no reparte igual. Un cristal empañado o una guardia helada se corrigen también desde aquí.",
    say: "Esta unidad de abajo calienta o mueve el aire en la banda de estribor."
  },
  {
    id: "clima",
    title: "Aire acondicionado",
    category: "confort",
    spots: [
      { u: 0.05, v: 0.2 },
      { u: 0.875, v: 0.2 }
    ],
    aim: { u: 0.05, v: 0.28 },
    body: "Hay dos equipos en el techo, uno por banda. El de babor está marcado a la izquierda y el de estribor sobre los casilleros. No están solo por confort: mantienen las pantallas y evitan que los cristales se empañen. Si el cristal se empaña, se pierde la guardia visual.",
    say: "El aire acondicionado mantiene el cristal despejado. Hay uno en cada banda."
  },
  {
    id: "cubierta",
    title: "Cubierta del puente",
    category: "confort",
    spots: [{ u: 0.45, v: 0.9 }],
    aim: { u: 0.42, v: 0.78 },
    body: "Suelo azul con relieve. El dibujo agarra el calzado cuando entra agua de la ropa o de una puerta, y el color separa la cubierta de las consolas cuando alguien se mueve deprisa en la maniobra.",
    say: "El suelo es antideslizante: en el puente el agua es normal y la gente se mueve rápido."
  }
];

const TOUR_ORDER = TOUR.map((item) => item.id);
const byId = Object.fromEntries(TOUR.map((item) => [item.id, item]));

const state = {
  activeId: null,
  anim: null,
  dragging: false,
  lastX: 0,
  lastY: 0
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function dirFromUV(u, v) {
  const THREE = AFRAME.THREE;
  const phi = u * Math.PI * 2;
  const theta = v * Math.PI;
  const sinTheta = Math.sin(theta);
  return new THREE.Vector3(
    Math.cos(phi) * sinTheta,
    Math.cos(theta),
    Math.sin(phi) * sinTheta
  );
}

const aimCamera = new AFRAME.THREE.PerspectiveCamera();

function anglesFor(u, v) {
  const THREE = AFRAME.THREE;
  aimCamera.position.set(0, 0, 0);
  aimCamera.up.set(0, 1, 0);
  aimCamera.lookAt(dirFromUV(u, v));
  const euler = new THREE.Euler().setFromQuaternion(aimCamera.quaternion, "YXZ");
  return { yaw: euler.y, pitch: euler.x };
}

function lookControls() {
  return document.getElementById("cam").components["look-controls"];
}

function applyAngles(yaw, pitch) {
  const controls = lookControls();
  if (!controls) return;
  controls.yawObject.rotation.y = yaw;
  controls.pitchObject.rotation.x = Math.max(-1.15, Math.min(1.15, pitch));
}

function shortest(from, to) {
  let delta = to - from;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  return from + delta;
}

function lookAtUV(u, v, animate) {
  const target = anglesFor(u, v);
  const controls = lookControls();
  if (!controls || !animate || reducedMotion) {
    applyAngles(target.yaw, target.pitch);
    state.anim = null;
    return;
  }
  const fromYaw = controls.yawObject.rotation.y;
  const fromPitch = controls.pitchObject.rotation.x;
  const toYaw = shortest(fromYaw, target.yaw);
  state.anim = { fromYaw, fromPitch, toYaw, toPitch: target.pitch, start: performance.now(), duration: 900 };
}

function categoryOf(id) {
  return CATEGORIES.find((category) => category.id === id);
}

function buildList() {
  const list = document.getElementById("list");
  TOUR.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "equipo";
    button.dataset.id = item.id;
    const indexEl = document.createElement("span");
    indexEl.className = "index";
    indexEl.textContent = String(index + 1).padStart(2, "0");
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = item.title;
    const cat = document.createElement("span");
    cat.className = "cat";
    cat.textContent = categoryOf(item.category).label;
    button.append(indexEl, name, cat);
    button.addEventListener("click", () => select(item.id));
    list.appendChild(button);
  });
}

function buildMarkers() {
  const layer = document.getElementById("markers");
  TOUR.forEach((item) => {
    item.spots.forEach((spot, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "marker" + (item.category === "seguridad" ? " seguridad" : "");
      button.dataset.id = item.id;
      button.dataset.spot = String(index);
      button.setAttribute("aria-label", item.title);
      const tip = document.createElement("span");
      tip.className = "tip";
      tip.textContent = item.title;
      button.appendChild(tip);
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        select(item.id);
      });
      layer.appendChild(button);
    });
  });
}

function renderCard(item) {
  const card = document.getElementById("card");
  const step = TOUR_ORDER.indexOf(item.id) + 1;
  const category = categoryOf(item.category);
  card.hidden = false;
  card.innerHTML = "";

  const kicker = document.createElement("div");
  kicker.className = "card-kicker";
  kicker.innerHTML = "<span></span><span></span>";
  kicker.firstChild.textContent = category.label;
  kicker.lastChild.textContent = step + " / " + TOUR.length;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const body = document.createElement("p");
  body.textContent = item.body;

  const say = document.createElement("p");
  say.className = "say";
  const sayLabel = document.createElement("span");
  sayLabel.textContent = "Para contarlo";
  say.append(sayLabel, document.createTextNode(item.say));

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "step";
  prev.textContent = "Anterior";
  prev.disabled = step === 1;
  prev.addEventListener("click", () => stepBy(-1));
  const next = document.createElement("button");
  next.type = "button";
  next.className = "primary";
  next.textContent = step === TOUR.length ? "Cerrar" : "Siguiente";
  next.addEventListener("click", () => {
    if (step === TOUR.length) closeCard();
    else stepBy(1);
  });
  const close = document.createElement("button");
  close.type = "button";
  close.className = "ghost";
  close.textContent = "Cerrar";
  close.addEventListener("click", closeCard);
  actions.append(prev, next, close);

  card.append(kicker, title, body, say, actions);
  document.getElementById("app").classList.add("has-card");
  document.querySelectorAll(".equipo").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === item.id);
  });
  document.querySelectorAll(".marker").forEach((marker) => {
    const on = marker.dataset.id === item.id;
    marker.classList.toggle("active", on);
    marker.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function dismissWelcome() {
  document.getElementById("welcome").hidden = true;
  document.getElementById("app").classList.add("exploring");
}

function select(id) {
  const item = byId[id];
  if (!item) return;
  state.activeId = id;
  dismissWelcome();
  renderCard(item);
  lookAtUV(item.aim.u, item.aim.v, true);
  const url = new URL(window.location.href);
  url.searchParams.set("equipo", id);
  history.replaceState(null, "", url);
}

function closeCard() {
  state.activeId = null;
  document.getElementById("card").hidden = true;
  document.getElementById("app").classList.remove("has-card");
  document.querySelectorAll(".equipo, .marker").forEach((node) => node.classList.remove("active"));
  const url = new URL(window.location.href);
  url.searchParams.delete("equipo");
  history.replaceState(null, "", url);
}

function stepBy(delta) {
  const current = Math.max(0, TOUR_ORDER.indexOf(state.activeId));
  const next = Math.min(TOUR.length - 1, Math.max(0, current + delta));
  select(TOUR_ORDER[next]);
}

function startTour() {
  document.getElementById("welcome").hidden = true;
  select(TOUR_ORDER[0]);
}

function frame(time) {
  const controls = lookControls();
  if (state.anim && controls) {
    const t = Math.min(1, (time - state.anim.start) / state.anim.duration);
    const eased = 1 - Math.pow(1 - t, 3);
    applyAngles(
      state.anim.fromYaw + (state.anim.toYaw - state.anim.fromYaw) * eased,
      state.anim.fromPitch + (state.anim.toPitch - state.anim.fromPitch) * eased
    );
    if (t >= 1) state.anim = null;
  }

  const entity = document.getElementById("cam");
  const camera = entity && entity.getObject3D("camera");
  if (!camera) return;
  camera.updateMatrixWorld(true);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const forward = new AFRAME.THREE.Vector3();
  camera.getWorldDirection(forward);

  document.querySelectorAll(".marker").forEach((marker) => {
    const item = byId[marker.dataset.id];
    const spot = item.spots[Number(marker.dataset.spot)];
    const point = dirFromUV(spot.u, spot.v);
    const facing = forward.dot(point.clone().normalize());
    if (facing < 0.12) {
      marker.style.display = "none";
      return;
    }
    const projected = point.clone().project(camera);
    const x = (projected.x * 0.5 + 0.5) * width;
    const y = (-projected.y * 0.5 + 0.5) * height;
    marker.style.display = "block";
    marker.style.left = x + "px";
    marker.style.top = y + "px";
    const dx = x / width - 0.5;
    const dy = y / height - 0.42;
    marker.classList.toggle("near", dx * dx + dy * dy < 0.006);
  });
}

function bindLook() {
  const canvas = document.querySelector("a-scene").canvas;
  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    state.dragging = true;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    state.anim = null;
    canvas.classList.add("is-grabbing");
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!state.dragging) return;
    const dx = event.clientX - state.lastX;
    const dy = event.clientY - state.lastY;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    const controls = lookControls();
    controls.yawObject.rotation.y += dx * 0.0026;
    controls.pitchObject.rotation.x = Math.max(
      -1.15,
      Math.min(1.15, controls.pitchObject.rotation.x + dy * 0.0022)
    );
  });
  const endDrag = () => {
    state.dragging = false;
    canvas.classList.remove("is-grabbing");
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);

  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    const camera = document.getElementById("cam");
    const current = Number(camera.getAttribute("camera").fov);
    const next = Math.min(95, Math.max(38, current + Math.sign(event.deltaY) * 3));
    camera.setAttribute("camera", "fov", next);
  }, { passive: false });

  window.addEventListener("keydown", (event) => {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "BUTTON" || tag === "INPUT") {
      if (event.key === "Escape") closeCard();
      return;
    }
    const controls = lookControls();
    if (!controls) return;
    const step = 0.06;
    if (event.key === "ArrowLeft") controls.yawObject.rotation.y += step;
    if (event.key === "ArrowRight") controls.yawObject.rotation.y -= step;
    if (event.key === "ArrowUp") controls.pitchObject.rotation.x += step;
    if (event.key === "ArrowDown") controls.pitchObject.rotation.x -= step;
    if (event.key === "Escape") closeCard();
    if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
      state.anim = null;
      event.preventDefault();
    }
  });
}

function bindUI() {
  document.getElementById("start-tour").addEventListener("click", startTour);
  document.getElementById("free-look").addEventListener("click", () => {
    dismissWelcome();
    lookAtUV(0.45, 0.5, false);
  });
  const toggle = document.getElementById("toggle-list");
  toggle.addEventListener("click", () => {
    const list = document.getElementById("list");
    const collapsed = list.classList.toggle("collapsed");
    toggle.textContent = collapsed ? "Mostrar" : "Ocultar";
    toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
  });
}

let ready = false;

function showReady() {
  if (ready) return;
  ready = true;
  window.__tourReady = true;
  document.getElementById("loader").hidden = true;
  const requested = new URLSearchParams(window.location.search).get("equipo");
  if (requested && byId[requested]) select(requested);
  else lookAtUV(0.45, 0.5, false);
}

window.addEventListener("error", (event) => {
  window.__tourError = event.message;
});

AFRAME.registerComponent("tour-binder", {
  init() {
    buildList();
    buildMarkers();
    bindUI();
    const sky = document.getElementById("sky");
    const fail = () => {
      const loader = document.getElementById("loader");
      loader.hidden = false;
      loader.textContent = "No se pudo cargar la foto del puente.";
    };
    sky.addEventListener("materialtextureloaded", showReady);
    sky.addEventListener("materialtextureerror", fail);
    this.el.addEventListener("loaded", () => {
      bindLook();
      setTimeout(() => {
        if (!document.getElementById("loader").hidden && document.getElementById("sky").getObject3D("mesh")) {
          const mesh = document.getElementById("sky").getObject3D("mesh");
          if (mesh && mesh.material && mesh.material.map) showReady();
        }
      }, 1500);
    });
  },
  tock(time) {
    frame(time);
  }
});
