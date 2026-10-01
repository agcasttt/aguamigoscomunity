/* -------------------------------------------------------------
   BASE DE DATOS Y LÓGICA: NACIMIENTOS DE AGUA EN MÉXICO
------------------------------------------------------------- */
const datosNacimientos = {
  "Puebla": [
    {
      nombre: "Almoloya (Ojo de Agua)",
      ubicacion: "Chignahuapan, Puebla",
      coordenadas: "19.8375, -98.0319",
      descripcion: "Manantial natural de agua dulce subterránea que da vida a la laguna y abastece zonas circundantes.",
      recomendaciones: [
        "Evitar tirar basuras, plástico o desechos orgánicos en las riberas.",
        "No utilizar jabones o bloqueadores no biodegradables al ingresar.",
        "Respetar la vegetación acuática nativa como los tulares."
      ]
    },
    {
      nombre: "Manantiales de San Baltazar Tetela",
      ubicacion: "Cuautinchán / Presa Valsequillo, Puebla",
      coordenadas: "18.9167, -98.1167",
      descripcion: "Afloramientos subterráneos que alimentan la cuenca central de Puebla.",
      recomendaciones: [
        "Mantener libre de vertidos químicos agropecuarios.",
        "Promover la reforestación con flora nativa para favorecer la infiltración."
      ]
    }
  ],
  "Veracruz": [
    {
      nombre: "Nacimiento del Río Filobobos",
      ubicacion: "Tlapacoyan / Atzalan, Veracruz",
      coordenadas: "19.9622, -97.2114",
      descripcion: "Manantial de alta cordillera que da origen a uno de los ríos con mayor biodiversidad y caudal en el estado.",
      recomendaciones: [
        "Prohibir la deforestación de las laderas circundantes.",
        "Recoger todo desecho generado durante visitas ecoturísticas."
      ]
    },
    {
      nombre: "Ojo de Agua de Nogales",
      ubicacion: "Nogales, Veracruz",
      coordenadas: "18.8219, -97.1636",
      descripcion: "Nacimiento natural proveniente del deshielo y filtraciones subterráneas del Pico de Orizaba.",
      recomendaciones: [
        "Proteger la vegetación de galería (ahuehuetes ancestrales).",
        "Evitar la sobreexplotación turística e industrial sin regulación."
      ]
    }
  ],
  "Michoacan": [
    {
      nombre: "Manantial de Camecuaro",
      ubicacion: "Tangancícuaro, Michoacán",
      coordenadas: "19.8863, -102.2078",
      descripcion: "Nacimiento cristalino rodeado de ahuehuetes centenarios, alimentado por acuíferos subterráneos.",
      recomendaciones: [
        "Prohibir el uso de lanchas de motor o combustibles contaminantes.",
        "Cuidar las raíces de los ahuehuetes evitando la erosión del suelo."
      ]
    },
    {
      nombre: "Nacimiento de la Cienega de Zacapu",
      ubicacion: "Zacapu, Michoacán",
      coordenadas: "19.8250, -101.7917",
      descripcion: "Ojo de agua origen de ríos locales e hábitat del hacho (ambystoma dumerilii).",
      recomendaciones: [
        "Proteger las especies endémicas evitando la introducción de peces exóticos.",
        "Evitar descargas de aguas residuales urbanas."
      ]
    }
  ],
  "Chiapas": [
    {
      nombre: "Nacimiento del Río San Vicente (El Chiflón)",
      ubicacion: "Tzimol, Chiapas",
      coordenadas: "16.1925, -92.2800",
      descripcion: "Origen de potentes corrientes de aguas turquesas enriquecidas con minerales cársticos.",
      recomendaciones: [
        "Mantener senderos delimitados para no erosionar el suelo.",
        "No depositar químicos, repelentes o cremas en la corriente."
      ]
    }
  ],
  "Oaxaca": [
    {
      nombre: "Manantial de Hierve el Agua",
      ubicacion: "San Lorenzo Albarradas, Oaxaca",
      coordenadas: "16.8658, -96.2758",
      descripcion: "Manantiales naturales de agua carbonatada que han formado cascadas petrificadas a lo largo de milenios.",
      recomendaciones: [
        "Respetar las áreas de pozas naturales y la carga turística regulada.",
        "No alterar la composición mineral extrayendo formaciones calcáreas."
      ]
    }
  ],
  "San Luis Potosi": [
    {
      nombre: "Nacimiento del Río Huasteco (Media Luna)",
      ubicacion: "Rioverde, San Luis Potosí",
      coordenadas: "21.8622, -100.0244",
      descripcion: "Manantial subacuático térmico de extraordinaria claridad con seis aberturas de surgencia.",
      recomendaciones: [
        "Ingresar únicamente con equipos limpios para no contaminar la cuenca.",
        "Protección estricta de la flora acuática sumergida."
      ]
    }
  ],
  "Estado de Mexico": [
    {
      nombre: "Manantiales de San Pedro Atlapulco",
      ubicacion: "Ocoyoacac, Estado de México",
      coordenadas: "19.2311, -99.3758",
      descripcion: "Nacimiento natural alimentado por el bosque de agua del Parque Nacional La Marquesa.",
      recomendaciones: [
        "Preservar la cobertura forestal para garantizar la recarga del acuífero.",
        "Controlar el turismo masivo y el uso de cuatrimotos cercanas."
      ]
    }
  ],
  "Morelos": [
    {
      nombre: "Las Estacas (Nacimiento del Río Yautepec)",
      ubicacion: "Tlaltizapán, Morelos",
      coordenadas: "18.7281, -99.1128",
      descripcion: "Borbollón natural que brota a más de 7,000 litros por segundo formando un cristalino río natural.",
      recomendaciones: [
        "Uso exclusivo de bloqueadores solares 100% biodegradables.",
        "Evitar la alteración física del fondo de la fuente principal."
      ]
    }
  ],
  "Yucatan": [
    {
      nombre: "Cenote Abierto / Ojo de Agua Xlacah",
      ubicacion: "Dzibilchaltún, Yucatán",
      coordenadas: "21.0908, -89.5978",
      descripcion: "Afloramiento directo del manto freático del sistema kárstico de la península.",
      recomendaciones: [
        "Ducharse obligatoriamente antes de entrar para eliminar grasas corporales.",
        "Prohibido tocar o alterar la fauna acuática y formaciones rocosas."
      ]
    }
  ],
  "Quintana Roo": [
    {
      nombre: "Nacimiento Yalahau (Ojo de Agua)",
      ubicacion: "Holbox, Quintana Roo",
      coordenadas: "21.4678, -87.2889",
      descripcion: "Manantial natural de agua dulce rodeado de manglares que emerge muy cerca del mar.",
      recomendaciones: [
        "Conservar el ecosistema de manglar circundante.",
        "No dejar residuos plásticos que puedan llegar a la fauna marina."
      ]
    }
  ],
  "Jalisco": [
    {
      nombre: "Manantiales de Las Estacas / Los Camachos",
      ubicacion: "Zapopan / Ixtlahuacán del Río, Jalisco",
      coordenadas: "20.8522, -103.3283",
      descripcion: "Surgencias de agua termal y dulce en la cuenca del Río Santiago.",
      recomendaciones: [
        "Evitar la contaminación por basura de los visitantes.",
        "Proteger la vegetación de la barranca para evitar deslaves."
      ]
    }
  ]
};

function mostrarNacimientos(){
  const estado = document.getElementById("select-estado").value;
  const cont = document.getElementById("nacimientos-contenedor");
  cont.innerHTML = "";

  if(!estado || !datosNacimientos[estado]){
    cont.innerHTML = '<div class="card" style="grid-column: 1/-1;"><p>Selecciona un estado para ver la información.</p></div>';
    return;
  }

  datosNacimientos[estado].forEach(item => {
    const card = document.createElement("article");
    card.className = "nacimiento-card";
    
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.coordenadas || item.nombre + ' ' + item.ubicacion)}`;

    let recomendacionesHTML = "";
    item.recomendaciones.forEach(rec => {
      recomendacionesHTML += `<li>${escapeHTML(rec)}</li>`;
    });

    card.innerHTML = `
      <h3>🌱 ${escapeHTML(item.nombre)}</h3>
      <span class="ubicacion-tag">📍 ${escapeHTML(item.ubicacion)}</span>
      <p>${escapeHTML(item.descripcion)}</p>
      
      <div class="recomendaciones-list">
        <strong>🛡️ Recomendaciones de Cuidado:</strong>
        <ul>${recomendacionesHTML}</ul>
      </div>

      <a href="${mapsUrl}" target="_blank" class="btn-link primary" style="width:100%">🗺️ Abrir ubicación en Google Maps</a>
    `;
    cont.appendChild(card);
  });
}


/* -------------------------------------------------------------
   LÓGICA EXISTENTE DE REPORTES Y CANVAS
------------------------------------------------------------- */
let imagenData = "";
let reportes = JSON.parse(localStorage.getItem("aquaforma_reportes") || "[]");

const foto = document.getElementById("foto");
const preview = document.getElementById("preview");

if (foto) {
  foto.addEventListener("change", e => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      imagenData = reader.result;
      preview.src = imagenData;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });
}

function crearReporte(){
  const titulo = document.getElementById("titulo").value.trim();
  const categoria = document.getElementById("categoria").value;
  const ubicacion = document.getElementById("ubicacion").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();

  if(!titulo || !ubicacion || !descripcion){
    alert("Completa el título, ubicación y descripción.");
    return;
  }

  const reporte = {
    titulo, categoria, ubicacion, descripcion,
    imagen: imagenData,
    fecha: new Date().toLocaleString("es-MX")
  };

  reportes.unshift(reporte);
  localStorage.setItem("aquaforma_reportes", JSON.stringify(reportes));
  renderReportes();
  actualizarContadores();
  limpiarFormulario(false);
  location.hash = "galeria";
}

function renderReportes(){
  const cont = document.getElementById("reports");
  if (!cont) return;
  cont.innerHTML = "";

  if(reportes.length === 0){
    cont.innerHTML = '<div class="card"><p>El archivo visual está vacío. Crea la primera expresión artística.</p></div>';
    return;
  }

  reportes.forEach((r, i) => {
    const article = document.createElement("article");
    article.className = "report";
    
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.ubicacion)}`;

    article.innerHTML = `
      ${r.imagen ? `<img src="${r.imagen}" alt="Reporte">` : `<div style="background:#0077b6;width:110px;height:90px;border-radius:4px"></div>`}
      <div>
        <div class="status">${escapeHTML(r.categoria)} · ${escapeHTML(r.fecha)}</div>
        <h3>${escapeHTML(r.titulo)}</h3>
        <p><b>📍 Ubicación:</b> ${escapeHTML(r.ubicacion)}</p>
        <p>${escapeHTML(r.descripcion)}</p>
        <div class="report-actions">
          <a href="${mapsUrl}" target="_blank" class="btn-link primary">🗺️ Ver en Google Maps</a>
          <button class="secondary" onclick="eliminarReporte(${i})">Eliminar</button>
        </div>
      </div>`;
    cont.appendChild(article);
  });
}

function eliminarReporte(i){
  reportes.splice(i,1);
  localStorage.setItem("aquaforma_reportes", JSON.stringify(reportes));
  renderReportes();
  actualizarContadores();
}

function actualizarContadores(){
  const contador = document.getElementById("contador");
  const barra = document.getElementById("barra");
  if (contador) contador.textContent = reportes.length;
  if (barra) barra.style.width = Math.min(reportes.length * 10, 100) + "%";
}

function limpiarFormulario(resetImagen=true){
  ["titulo","ubicacion","descripcion"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  if(resetImagen){
    if (foto) foto.value = "";
    imagenData = "";
    if (preview) preview.style.display = "none";
  }
}

function escapeHTML(text){
  return text.replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function usarUbicacionActual(){
  if(!navigator.geolocation){
    alert("Tu navegador no soporta geolocalización.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    posicion => {
      const lat = posicion.coords.latitude.toFixed(5);
      const lng = posicion.coords.longitude.toFixed(5);
      document.getElementById("ubicacion").value = `${lat}, ${lng}`;
    },
    () => alert("No se pudo obtener la ubicación automáticamente.")
  );
}

/* -------------------------------------------------------------
   LABORATORIO DE DIBUJO Y PUBLICACIÓN
------------------------------------------------------------- */
const canvas = document.getElementById("canvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let dibujando = false;
let modoActual = "linea";
let ultimo = null;
let t = 0;

function fondoCanvas(){
  if (!ctx || !canvas) return;
  ctx.fillStyle = "#02111b"; 
  ctx.fillRect(0,0,canvas.width,canvas.height);
  
  ctx.strokeStyle = "rgba(0, 180, 216, 0.08)";
  ctx.lineWidth = 1;
  for(let x=0; x<canvas.width; x+=30){
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke();
  }
  for(let y=0; y<canvas.height; y+=30){
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke();
  }
}

if (canvas) {
  fondoCanvas();

  function pos(e){
    const r = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) * canvas.width / r.width,
      y: (e.clientY - r.top) * canvas.height / r.height
    };
  }

  canvas.addEventListener("pointerdown", e=>{
    dibujando = true;
    ultimo = pos(e);
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener("pointermove", e=>{
    if(!dibujando) return;
    const p = pos(e);
    const dx = p.x - ultimo.x, dy = p.y - ultimo.y;
    const distancia = Math.hypot(dx,dy);
    
    const color = document.getElementById("pincel-color").value;
    const grosor = document.getElementById("pincel-grosor").value;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = grosor;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(modoActual === "linea"){
      ctx.beginPath();
      ctx.moveTo(ultimo.x, ultimo.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }

    if(modoActual === "onda"){
      ctx.beginPath();
      ctx.moveTo(ultimo.x, ultimo.y);
      const cx = (ultimo.x + p.x)/2;
      const cy = (ultimo.y + p.y)/2 + Math.sin(ultimo.x * 0.05 + t) * 20;
      ctx.quadraticCurveTo(cx, cy, p.x, p.y);
      ctx.stroke();
    }

    if(modoActual === "gota"){
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.random() * (grosor * 2) + 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.random() * (grosor * 5) + grosor, 0, Math.PI * 2);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    if(modoActual === "spray"){
      for(let i = 0; i < 12; i++){
        const offsetX = (Math.random() - 0.5) * (grosor * 3);
        const offsetY = (Math.random() - 0.5) * (grosor * 3);
        ctx.fillRect(p.x + offsetX, p.y + offsetY, 1.5, 1.5);
      }
    }

    if(modoActual === "trama" && distancia > 4){
      for(let i = -2; i <= 2; i++){
        ctx.beginPath();
        ctx.moveTo(ultimo.x + i*5, ultimo.y - i*5);
        ctx.lineTo(p.x + i*5, p.y - i*5);
        ctx.stroke();
      }
    }

    ultimo = p;
  });

  canvas.addEventListener("pointerup", e=>{
    dibujando = false;
    try{ canvas.releasePointerCapture(e.pointerId) }catch(_){}
  });
  canvas.addEventListener("pointercancel", ()=> dibujando = false);
}

function setModo(m){
  modoActual = m;
  document.querySelectorAll('.tools button').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`btn-${m}`);
  if(btn) btn.classList.add('active');
}

function limpiarCanvas(){ fondoCanvas(); }

function descargarCanvas(){
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = 'arte-agua-aguamigos.png';
  link.href = canvas.toDataURL();
  link.click();
}

function abrirModalArte(){
  document.getElementById("modalArte").style.display = "flex";
}

function cerrarModalArte(){
  document.getElementById("modalArte").style.display = "none";
}

function publicarArteLienzo(){
  const titulo = document.getElementById("arte-titulo").value.trim();
  const categoria = document.getElementById("arte-categoria").value;
  const ubicacion = document.getElementById("arte-ubicacion").value.trim() || "Laboratorio Visual";
  const descripcion = document.getElementById("arte-descripcion").value.trim();

  if(!titulo || !descripcion){
    alert("Por favor ingresa un título y una pequeña descripción de tu obra.");
    return;
  }

  const reporteArte = {
    titulo: `🎨 ${titulo}`,
    categoria,
    ubicacion,
    descripcion,
    imagen: canvas ? canvas.toDataURL() : "",
    fecha: new Date().toLocaleString("es-MX")
  };

  reportes.unshift(reporteArte);
  localStorage.setItem("aquaforma_reportes", JSON.stringify(reportes));
  renderReportes();
  actualizarContadores();
  
  cerrarModalArte();
  document.getElementById("arte-titulo").value = "";
  document.getElementById("arte-descripcion").value = "";
  location.hash = "galeria";
}

function animar(){
  t += 0.03;
  requestAnimationFrame(animar);
}
animar();

renderReportes();
actualizarContadores();
