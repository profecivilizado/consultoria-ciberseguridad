/* Operación Lupa · código común a todas las páginas */

/* =================== MISIONES Y HERRAMIENTAS =================== */
const MISIONES = [
 {n: 1, t: "Investiga a la persona", sub: "Huella digital, redes sociales y metadatos", tema: "3.1", tools: ["cybersearch", "picto", "archivos"]},
 {n: 2, t: "Sus cuentas", sub: "Contraseñas y autenticación", tema: "3.2", tools: ["cuentas"]}
];
const TOOLS = {
 cybersearch: {name: "CyberSearch", m: 1, code: "H", intro: c => `Buscad a ${c.short} en Internet. Escribid en el buscador su nombre de usuario, <b>${c.nick}</b>, y abrid cada resultado.`},
 picto: {name: "Picto", m: 1, code: "R", intro: c => `Buscad a ${c.short} en la red social Picto. Cuidado: hay varias personas con nombres parecidos. Cuando encontréis su cuenta, pulsad en cada publicación y leed el texto, la ubicación, la fecha y los comentarios.`},
 archivos: {name: "Archivos", m: 1, code: "A", intro: c => `Estos son algunos archivos originales de ${c.short}. Pulsad en cada uno para ver sus propiedades (los metadatos).`},
 cuentas: {name: "Panel de cuentas", m: 2, code: "C", intro: c => `Estas son las cuentas de ${c.short}. Leed cada tarjeta y fijaos especialmente en las líneas en rojo.`}
};
const ORDER = ["cybersearch", "picto", "archivos", "cuentas"];

/* =================== UTILIDADES =================== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, ch => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[ch]));
const ev = c => `<span class="ev">${c}</span>`;
const ini = n => n.split(" ").map(w => w[0]).join("").slice(0, 2);
function hz(s) {
 s = s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\b(ceip|colegio|cole|el|la)\b/g, "").replace(/[^a-z0-9]/g, "");
 let x = 5381; for (const ch of s) x = (Math.imul(x, 33) ^ ch.charCodeAt(0)) >>> 0; return x.toString(36);
}
function caseId() { const h = location.hash.slice(1); return (window.CASOS && CASOS[h]) ? h : null; }
function photo(file, ph, h) { return `<div class="ph" style="--h:${h}"><span><em>${ph[0]}</em>${esc(ph[1])}</span><img src="img/${file}" alt="${esc(ph[1])}" loading="lazy" onerror="this.remove()"></div>`; }
function avatar(id, sm) { const c = CASOS[id]; return `<div class="av${sm ? " sm" : ""}"><div class="in">${ini(c.name)}<img src="img/${id}-avatar.jpg" alt="" onerror="this.remove()"></div></div>`; }

/* =================== VENTANA EMERGENTE =================== */
const X = `<button class="x" aria-label="Cerrar">×</button>`;
function openSheet(html, label) {
 const sh = $("#sheet");
 sh.innerHTML = `<div class="card" role="dialog" aria-modal="true" aria-label="${esc(label)}">${html}</div>`;
 sh.hidden = false; const x = sh.querySelector(".x"); x && x.focus();
}
function closeSheet() { const sh = $("#sheet"); if (sh) { sh.hidden = true; sh.innerHTML = ""; } }

/* =================== ESTRUCTURA DE LA PÁGINA =================== */
function chrome() {
 document.body.insertAdjacentHTML("afterbegin", `<header class="bar"><div class="wrap">
  <a class="brand" href="index.html" aria-label="Operación Lupa, inicio"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5c518" stroke-width="2.4" aria-hidden="true"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l6 6" stroke-linecap="round"/></svg>Operación Lupa</a>
  <nav class="crumb" id="crumb" aria-label="Ruta"></nav></div></header>`);
 document.body.insertAdjacentHTML("beforeend", `<footer class="wrap">Práctica P4 · Consultoría de Ciberseguridad · Informática 1.º de Bachillerato. Todas las personas, empresas, cuentas, direcciones y mensajes son ficticios. Valdemora es una ciudad inventada.</footer><div class="sheet" id="sheet" hidden></div>`);
 $("#sheet").addEventListener("click", e => { if (e.target.id === "sheet" || e.target.closest(".x")) closeSheet(); });
 document.addEventListener("keydown", e => { if (e.key === "Escape") closeSheet(); });
}
function setCrumb(parts) { $("#crumb").innerHTML = parts.map(p => p[1] ? `<a href="${p[1]}">${esc(p[0])}</a>` : `<span>${esc(p[0])}</span>`).join('<span aria-hidden="true">›</span>'); }
function noCase() {
 $("#view").innerHTML = `<section class="hero"><h1>Primero, elegid vuestro expediente</h1><p class="lead">Esta herramienta necesita saber qué caso estáis investigando.</p><a class="btn" href="index.html">Ir a los expedientes</a></section>`;
}

/* Página de herramienta: cabecera de misión, entorno y preguntas */
function toolPage(key, render) {
 chrome();
 const id = caseId(); if (!id) { setCrumb([]); noCase(); return; }
 const c = CASOS[id], t = TOOLS[key], m = MISIONES[t.m - 1];
 document.title = `${t.name} · Operación Lupa`;
 setCrumb([[`Expediente ${c.no}`, `expediente.html#${id}`], [`Misión ${m.n}`], [t.name]]);
 const i = ORDER.indexOf(key), prev = ORDER[i - 1], next = ORDER[i + 1];
 const tabs = m.tools.length > 1 ? `<nav class="tooltabs" aria-label="Herramientas de la misión ${m.n}">${m.tools.map((k, j) => `<a href="${k}.html#${id}"${k === key ? ' aria-current="page"' : ""}><b>${j + 1}</b>${TOOLS[k].name}</a>`).join("")}</nav>` : "";
 $("#view").innerHTML = `<section class="mhead"><span class="eyebrow">Expediente ${c.no} · ${c.name} · Misión ${m.n}: ${m.t}</span>
  ${tabs}<h1>${t.name}</h1>
  <div class="tags"><span>${m.sub}</span><span>Tema 3 · ${m.tema}</span><span>Misión ${m.n} de 2</span><span>Evidencias ${t.code}</span></div>
  <p class="lead" style="color:var(--ink)">${t.intro(c)}</p></section>
  <div class="env" id="env"></div>
  <section class="task panel"><h2>Preguntas guiadas · ${t.name}</h2><p class="small" style="margin:0 0 8px">Respondedlas en orden mientras exploráis: las respuestas van en vuestro informe.</p><ol>${c.preg[key].map(x => `<li>${x}</li>`).join("")}</ol></section>
  <nav class="mnav">${prev ? `<a class="btn ghost" href="${prev}.html#${id}">‹ ${TOOLS[prev].name}</a>` : `<a class="btn ghost" href="expediente.html#${id}">‹ Expediente</a>`}
  ${next ? `<a class="btn" href="${next}.html#${id}">${TOOLS[next].m !== t.m ? `Misión ${TOOLS[next].m}: ` : ""}${TOOLS[next].name} ›</a>` : `<a class="btn" href="informe.html#${id}">Informe final ›</a>`}</nav>`;
 render(c, id, $("#env"));
 window.addEventListener("hashchange", () => location.reload());
}

/* =================== MAPA DE VALDEMORA (ficticio) =================== */
const MAP = {lat0: 39.40, lat1: 39.42, lon0: -13.22, lon1: -13.20};
function inMap(g) { return g && g[0] >= MAP.lat0 && g[0] <= MAP.lat1 && g[1] >= MAP.lon0 && g[1] <= MAP.lon1; }
function mapBase() {
 return `<rect width="400" height="300" fill="#e7ebe4"/>
 <path d="M220 20 Q330 0 390 60 L390 140 Q300 150 250 110 Z" fill="#c9e2b8"/><text x="292" y="72" font-size="11" fill="#4d7a3a" font-family="sans-serif">Parque del Río</text>
 <g stroke="#fff" stroke-width="10" fill="none"><path d="M0 250H400M0 110H400M0 200H400M0 60H400M60 0V300M130 0V300M210 0V300M300 0V300"/></g>
 <g font-size="10" fill="#6b7280" font-family="sans-serif"><text x="136" y="266">C/ del Olmo</text><text x="6" y="106">Av. de la Estación</text><text x="216" y="196">C/ Real</text><text x="6" y="56">C/ Mayor de San Roque</text></g>`;
}
function mapSVG(g) {
 const x = (g[1] - MAP.lon0) / (MAP.lon1 - MAP.lon0) * 400, y = 300 - (g[0] - MAP.lat0) / (MAP.lat1 - MAP.lat0) * 300;
 return `<svg viewBox="0 0 400 300" role="img" aria-label="Mapa de Valdemora con la ubicación marcada">${mapBase()}
 <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="16" fill="#e2533b" opacity=".22"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="#e2533b" stroke="#fff" stroke-width="3"/>
 <text x="394" y="292" font-size="10" fill="#6b7280" text-anchor="end" font-family="sans-serif">Valdemora · mapa municipal</text></svg>`;
}
function gpsBlock(g) {
 if (!g) return "";
 const s = `${g[0].toFixed(5)}, ${g[1].toFixed(5)}`;
 if (inMap(g)) return `<div class="map"><p style="margin:0 0 6px;font-size:13.5px">Coordenadas <b style="font-family:var(--mono)">${s}</b> situadas en el mapa municipal:</p>${mapSVG(g)}</div>`;
 return `<p style="margin:0;font-size:13.5px">Coordenadas <b style="font-family:var(--mono)">${s}</b> fuera de Valdemora. <a href="https://www.openstreetmap.org/?mlat=${g[0]}&mlon=${g[1]}#map=14/${g[0]}/${g[1]}" target="_blank" rel="noopener">Ver en OpenStreetMap ↗</a></p>`;
}

/* =================== LECTOR EXIF (JPEG) =================== */
async function readExif(url) {
 const res = await fetch(url); if (!res.ok) return null;
 const v = new DataView(await res.arrayBuffer());
 if (v.getUint16(0) !== 0xFFD8) return null;
 let o = 2;
 while (o < v.byteLength - 4) {
  const mk = v.getUint16(o), len = v.getUint16(o + 2);
  if (mk === 0xFFE1 && v.getUint32(o + 4) === 0x45786966) {
   const t = o + 10, le = v.getUint16(t) === 0x4949;
   const u16 = p => v.getUint16(p, le), u32 = p => v.getUint32(p, le);
   const str = (p, n) => { let s = ""; for (let i = 0; i < n; i++) { const ch = v.getUint8(p + i); if (!ch) break; s += String.fromCharCode(ch); } return s; };
   const ifd = p => { const out = {}, n = u16(t + p); for (let i = 0; i < n; i++) { const e = t + p + 2 + i * 12, tag = u16(e), type = u16(e + 2), cnt = u32(e + 4), vo = e + 8;
     const dp = (type === 2 && cnt > 4) || type === 5 ? t + u32(vo) : vo;
     if (type === 2) out[tag] = str(dp, cnt);
     else if (type === 5) out[tag] = Array.from({length: cnt}, (_, k) => u32(dp + k * 8) / u32(dp + k * 8 + 4));
     else if (type === 4) out[tag] = u32(vo); else if (type === 3) out[tag] = u16(vo); }
    return out; };
   const i0 = ifd(u32(t + 4)), ex = i0[0x8769] ? ifd(i0[0x8769]) : {}, g = i0[0x8825] ? ifd(i0[0x8825]) : {};
   const dms = a => a[0] + a[1] / 60 + a[2] / 3600;
   let gps = null; if (g[2] && g[4]) gps = [dms(g[2]) * (g[1] === "S" ? -1 : 1), dms(g[4]) * (g[3] === "W" ? -1 : 1)];
   const d = ex[0x9003] || i0[0x132] || "";
   return {make: i0[0x10F] || "—", model: i0[0x110] || "—", date: d ? d.replace(/^(\d{4}):(\d{2}):(\d{2})/, "$3/$2/$1") : "—", soft: i0[0x131], gps};
  }
  o += 2 + len;
 }
 return {make: "—", model: "—", date: "—", gps: null};
}

/* =================== CAPTURAS GENERADAS =================== */
function SHOT(kind, a) {
 const bar = d => `<div class="bar"${d ? ' style="color:#eef0f4"' : ""}><span>9:41</span><span>●●● 4G ▮</span></div>`;
 switch (kind) {
 case "boarding": return `<div class="shot" style="background:#e9edf5"><div class="sc" style="display:grid;place-items:center;padding:24px">
  <div style="background:#fff;border-radius:14px;width:100%;max-width:420px;box-shadow:0 6px 20px rgb(0 0 0 / .15);overflow:hidden;color:#16181d">
   <div style="background:#1d3f7a;color:#fff;padding:12px 16px;display:flex;justify-content:space-between;font-weight:700;letter-spacing:.06em;font-size:13px"><span>SKYVALDEMORA</span><span>TARJETA DE EMBARQUE</span></div>
   <div style="padding:14px 16px;display:grid;gap:10px;font-size:13px">
    <div><small style="color:#6b7280">PASAJERO</small><div style="font-weight:700;font-size:16px">FERRER / HUGO MR</div></div>
    <div style="display:flex;justify-content:space-between;align-items:center"><div><b style="font-size:30px">MAD</b><div>Madrid</div></div><div style="font-size:22px">✈</div><div style="text-align:right"><b style="font-size:30px">BKK</b><div>Bangkok</div></div></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">
     <div><small style="color:#6b7280">VUELO</small><div><b>SV0841</b></div></div><div><small style="color:#6b7280">FECHA</small><div><b>24OCT</b></div></div>
     <div><small style="color:#6b7280">EMBARQUE</small><div><b>05:55</b></div></div><div><small style="color:#6b7280">ASIENTO</small><div><b>32A</b></div></div></div>
    <div style="display:flex;justify-content:space-between;align-items:end;border-top:1px dashed #c8ced8;padding-top:10px">
     <div><small style="color:#6b7280">LOCALIZADOR</small><div style="font-family:var(--mono);font-weight:700;font-size:18px">K7Q4ZP</div></div>
     <div style="width:74px;height:74px;background:repeating-conic-gradient(#16181d 0 25%,#fff 0 50%) 0 0/12px 12px;border:4px solid #16181d"></div></div>
   </div></div></div></div>`;
 case "run": {
  const two = a === 2;
  const path = two ? "M130 250 L130 200 L210 200 L210 110 L300 110 Q350 90 340 50 L260 40 L210 70 L130 110 L130 250" : "M130 250 L60 250 L60 150 L130 110 L210 110 L300 160 L300 250 L210 280 L130 250";
  return `<div class="shot" style="background:#f3f4f1"><div class="sc" style="display:flex;flex-direction:column">${bar()}
  <div style="padding:6px 14px 2px;font-weight:700;font-size:17px">${two ? "Series en el parque 🔥" : "Carrera matutina 🌅"}</div>
  <div style="padding:0 14px;font-size:12px;color:#6b7280">${two ? "Martes, 21 oct · 07:05" : "Martes, 28 oct · 07:02"} · Valdemora · RunTrack</div>
  <svg viewBox="0 0 400 300" style="width:100%;flex:1;min-height:0" preserveAspectRatio="xMidYMid slice">${mapBase()}
   <path d="${path}" stroke="#e2533b" stroke-width="5" fill="none" stroke-linejoin="round"/>
   <circle cx="130" cy="250" r="9" fill="#1f8a5b" stroke="#fff" stroke-width="3"/>
   <rect x="142" y="224" width="86" height="20" rx="6" fill="#16181d"/><text x="150" y="238" font-size="11" fill="#fff" font-family="sans-serif">Inicio · Fin</text>
  </svg>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:10px 14px 14px;text-align:center">
   <div><b style="font-size:18px">${two ? "7,4" : "8,02"} km</b><div style="font-size:11px;color:#6b7280">Distancia</div></div>
   <div><b style="font-size:18px">${two ? "38:10" : "41:37"}</b><div style="font-size:11px;color:#6b7280">Tiempo</div></div>
   <div><b style="font-size:18px">${two ? "5:09" : "5:11"}/km</b><div style="font-size:11px;color:#6b7280">Ritmo</div></div></div></div></div>`; }
 case "notif": return `<div class="shot dark" style="background:linear-gradient(160deg,#2a3550,#141820)"><div class="sc" style="display:flex;flex-direction:column;align-items:center">${bar(1)}
  <div style="font-size:64px;font-weight:300;margin-top:18px;font-family:var(--display)">23:58</div><div style="font-size:14px;opacity:.8">martes, 27 de octubre</div>
  <div style="width:88%;margin-top:26px;display:grid;gap:8px">
   ${["482 ███", "719 ███", "205 ███"].map((c, i) => `<div style="background:rgb(255 255 255 / .14);border-radius:16px;padding:10px 12px;font-size:13px"><b>Mensajes</b> <span style="float:right;opacity:.7">hace ${i + 1} min</span><div>StreamZone: tu código de verificación es ${c}. No lo compartas con nadie.</div></div>`).join("")}
  </div></div></div>`;
 case "stream": return `<div class="shot dark"><div class="sc" style="display:grid;grid-template-rows:auto 1fr auto">
  <div style="display:flex;gap:8px;align-items:center;padding:10px 12px;font-size:13px"><span style="background:#e2533b;color:#fff;border-radius:4px;padding:1px 6px;font-weight:700">EN DIRECTO</span><b>dani0rtega</b><span style="opacity:.7">· 214 espectadores</span></div>
  <div style="background:linear-gradient(135deg,#253b5c,#4a2a5c);margin:0 12px;border-radius:10px;display:grid;place-items:center;position:relative;font-size:22px;font-weight:700;font-family:var(--display);text-align:center">🎉 3.000 SEGUIDORES 🎉
   <div style="position:absolute;left:10px;bottom:10px;font-size:12px;font-family:var(--mono);background:rgb(0 0 0 / .55);padding:4px 8px;border-radius:6px;font-weight:400">comunidad: chatterly.gg/thor2005</div></div>
  <div style="padding:10px 12px;font-size:12px;display:grid;gap:3px;opacity:.9"><div><b style="color:#6b9cf0">rubenx:</b> GGGG 🔥</div><div><b style="color:#4cc58c">moddeado:</b> ¡felicidades crack!</div><div><b style="color:#e3a94a">xX_lu_Xx:</b> ¿de qué barrio eres? jajaja</div></div></div></div>`;
 case "quiz": return `<div class="shot" style="background:linear-gradient(135deg,#ffcf5c,#ff7a59)"><div class="sc" style="display:grid;place-items:center;padding:30px;text-align:center">
  <div style="font-family:var(--display);font-weight:700;font-size:26px;line-height:1.2;color:#2b1608">🎯 RETO<br>¿Cómo se llamaba tu primer colegio y tu primera mascota?<div style="font-size:16px;font-weight:500;margin-top:14px">Responde en comentarios 👇</div></div></div></div>`;
 case "story": return `<div class="shot dark" style="background:#22252b"><div class="sc" style="display:flex;flex-direction:column">
  <div style="height:3px;background:rgb(255 255 255 / .9);margin:10px 12px 0;border-radius:2px"></div>
  <div style="flex:1;margin:14px;border-radius:12px;background:${a.bg};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:16px;text-align:center">
   <div style="background:#fff;color:#111;font-weight:800;font-size:24px;padding:6px 12px;border-radius:6px;font-family:var(--display);transform:rotate(-3deg)">${esc(a.text)}</div>
   <div style="font-size:15px;opacity:.9">${esc(a.sub)}</div></div>
  <div style="text-align:center;font-size:12px;padding-bottom:10px;opacity:.8">${esc(a.foot)}</div></div></div>`;
 case "old": return `<div class="shot" style="background:#fdfbf6"><div class="sc" style="display:flex;flex-direction:column;justify-content:center;gap:12px;padding:24px">
  <div style="font-size:12px;color:#6b7280">${esc(a.ctx)}</div>
  <div style="font-size:19px;line-height:1.4;font-weight:500">${esc(a.text)}</div>
  <div style="font-size:12px;color:#6b7280">${esc(a.date)}</div>
  <div style="display:grid;gap:6px;border-top:1px solid #e5e1d6;padding-top:10px">${a.rep.map(r => `<div style="font-size:13px">${esc(r)}</div>`).join("")}</div></div></div>`;
 }
 return "";
}
