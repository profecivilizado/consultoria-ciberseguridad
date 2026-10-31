/* Expediente 002 · Lucía Navas
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.lucia = {
 no: "002", name: "Lucía Navas", short: "Lucía", age: 19,
 study: "2.º de Fisioterapia (Universidad de Valdemora)",
 nick: "lunavas_runs", picto: "lu.runs.valdemora", h: 150,
 hook: "Un desconocido parece saber dónde y cuándo corre cada mañana.",
 situation: "Lucía ha empezado a recibir mensajes de un desconocido que comenta detalles de sus entrenamientos. Además, Picto le avisó de un inicio de sesión desde un dispositivo que no reconoce. Lucía dice que «nunca ha publicado su dirección».",

 /* ---------- Misión 1 · CyberSearch ---------- */
 search: {
  q: ["lunavas_runs", "lucia navas", "lucía navas", "lu.runs.valdemora", "lucia.navas@valmail.es"],
  res: [
   {c: "H1", u: "runtrack.app › athletes › lunavas_runs", t: "Lucía N. (lunavas_runs) | RunTrack",
    s: "312 actividades · Valdemora · Perfil público · Última: «Carrera matutina», hoy a las 07:02",
    page: `<div class="sh">RunTrack · lunavas_runs</div><table><tr><th>Actividad</th><th>Fecha</th><th>Inicio</th></tr><tr><td>Carrera matutina · 8,0 km</td><td>28/10</td><td>07:02</td></tr><tr><td>Rodaje suave · 6,1 km</td><td>27/10</td><td>07:04</td></tr><tr><td>Series · 7,4 km</td><td>21/10</td><td>07:05</td></tr><tr><td>Carrera matutina · 8,1 km</td><td>20/10</td><td>07:01</td></tr></table>
<p><b>Segmento favorito:</b> «Olmo → Parque del Río» (2,3 km)</p><p><b>Seguidores recientes:</b> runner_lover_88, patri.gm, clubzancadas</p>`},
   {c: "H2", u: "clubzancadas.es › resultados › media-valdemora-2026", t: "Clasificación · Media Maratón de Valdemora 2026",
    s: "…1287 · NAVAS, LUCÍA · F-SUB23 · C.A. Zancadas · 1:42:10…",
    page: `<div class="sh">C.A. Zancadas · Resultados</div><table><tr><th>Dorsal</th><th>Nombre</th><th>Categoría</th><th>Tiempo</th></tr><tr><td>1203</td><td>GIL, MARTA</td><td>F-SUB23</td><td>1:39:48</td></tr><tr><td>1287</td><td>NAVAS, LUCÍA</td><td>F-SUB23</td><td>1:42:10</td></tr><tr><td>1310</td><td>PARDO, ELENA</td><td>F-SUB23</td><td>1:44:02</td></tr></table><p><b>Entrenamientos del club:</b> lunes, miércoles y viernes a las 19:00 en la pista municipal.</p>`},
   {c: "H3", u: "latahona.es › equipo", t: "Nuestro equipo — Café La Tahona",
    s: "«Lucía, los fines de semana: la reina del café con avena» · Abrimos sábados y domingos de 8 a 15",
    page: `<div class="sh">Café La Tahona · Nuestro equipo</div><p>Somos una cafetería de barrio en la calle Real. <b>Lucía</b>, los fines de semana: la reina del café con avena ☕</p><p>Horario de fin de semana: de 8:00 a 15:00.</p>`}
  ]},
 log: {c: "H4", rows: [["Servicio", "RunTrack (sesión propia de Lucía)"], ["Fecha", "28/10/2026 · 07:44"], ["Dirección IP", "81.40.22.xxx (Valdenet Móvil)"], ["Ubicación aproximada", "Valdemora, España"], ["Dispositivo", "Samsung Galaxy S23 · Android 16"], ["Permisos de la app", "Ubicación «siempre», contactos, fotos"], ["Perfil publicitario deducido", "Deportista · 18-24 años · running y nutrición"]]},

 /* ---------- Misión 1 · Picto ---------- */
 pic: {
  bio: "🏃‍♀️ Running todos los días a las 7\nFisio en proceso 🦴\nMedia maratón en 1:42", posts: 347, fol: "860", seg: "612",
  hl: [["🏅", "Carreras"], ["☕", "Curro"], ["🐱", "Nala"], ["🥞", "Recetas"]],
  feed: [
   {c: "R1", shot: ["run", 1], date: "28 de octubre · 07:44", likes: 74, cap: "Mis 8 km de cada mañana 🌅 Siempre la misma ruta, siempre sola, mi momento", cm: [["patri.gm", "Qué constancia, tía 💪"], ["runner_lover_88", "Hoy ibas con la sudadera rosa, ¿no? 😉"]]},
   {c: "R2", shot: ["run", 2], date: "21 de octubre · 07:50", likes: 61, cap: "Lunes, miércoles y viernes: series en el parque del Río 🔥", cm: []},
   {c: "R3", img: "lucia-1", ph: ["🏅", "Carrera popular"], date: "19 de octubre · 11:02", loc: "Media Maratón de Valdemora", likes: 139, cap: "Dorsal 1287 y marca personal con el Zancadas 💪", cm: [["clubzancadas", "¡Enhorabuena, Lucía! 🧡"]]},
   {c: "R4", img: "lucia-2", ph: ["☕", "Café con arte latte"], date: "12 de octubre · 15:20", loc: "Café La Tahona", likes: 58, cap: "Finde de curro ☕ Sábados y domingos de 8 a 15", cm: []},
   {c: "R5", img: "lucia-3", ph: ["🌅", "Vistas desde un balcón"], date: "9 de octubre · 07:58", likes: 66, cap: "Las vistas que me tocan cada mañana", cm: []},
   {c: "R6", shot: ["story", {bg: "linear-gradient(160deg,#5b4a72,#2a2140)", text: "Patri KO en el bus de vuelta 😂😂", sub: "[foto: amiga dormida con la boca abierta]", foot: "Historia · 5 de octubre"}], date: "5 de octubre · 01:12", likes: 0, cap: "", cm: [["patri.gm", "Bórralo YA 😡"]]},
   {c: "R7", img: "lucia-4", ph: ["🐱", "Gata en el sofá"], date: "2 de octubre · 21:10", likes: 93, cap: "Nala, la reina de la casa 🐱 Mi primera mascota", cm: [["carla_navas", "Que vas a llegar tarde a la clase de las 9 😂"]]},
   {c: "R8", img: "lucia-5", ph: ["🥞", "Tortitas de avena"], date: "28 de septiembre · 09:40", likes: 102, cap: "Tortitas de avena post-entreno 🥞 La receta, en destacadas", cm: [["patri.gm", "Pásamela!!"]]}
  ],
  priv: {c: "R9", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Siempre"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Verificación en dos pasos", "No"], ["Compartir actividades de RunTrack en Picto", "Automático"]]}
 },

 /* ---------- Misión 1 · Archivos ---------- */
 files: [
  {c: "A1", name: "lucia-3.jpg", kind: "jpg", ph: ["🌅", "Vistas desde un balcón"], note: "Foto original de la publicación R5"},
  {c: "A2", name: "carrera_matutina.gpx", kind: "gpx", props: [["Creado por", "RunTrack 8.2"], ["Fecha", "28/10/2026 · 07:02"], ["Punto de inicio", "39.40333, -13.21350"], ["Punto final", "39.40333, -13.21350"], ["Puntos registrados", "1.948"]], gps: [39.40333, -13.21350]},
  {c: "A3", name: "horario_2C_fisio.pdf", kind: "pdf", props: [["Título", "Horario 2.º C Fisioterapia"], ["Autor", "Lucía Navas Ortiz"], ["Aplicación", "Microsoft Word"], ["Creado", "10/09/2026"], ["Contenido", "Clases de lunes a viernes de 9:00 a 14:00"]]}
 ],
 meta: {
  "lucia-3.jpg": {make: "samsung", model: "Galaxy S23", date: "09/10/2026 07:56:41", gps: [39.40333, -13.21350]}
 },

 /* ---------- Misión 2 · Cuentas ---------- */
 acc: [
  {c: "C1", svc: "Valmail", ic: "✉️", id: "lucia.navas@valmail.es", kv: [["Verificación en dos pasos", "Activada (app)"], ["Recuperación", "Teléfono"], ["Contraseña cambiada", "02/02/2026"]], act: [["27/10 14:00", "Inicio de sesión · Valdemora · Chrome/Windows · Red «UVal-Alumnos»"]]},
  {c: "C2", svc: "Picto", ic: "📸", id: "@lu.runs.valdemora", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "10/05/2025"]], act: [["27/10 14:02", "Inicio de sesión desde un dispositivo nuevo · Valdemora · Chrome/Windows · Red «UVal-Alumnos»", 1], ["28/10 07:44", "Inicio de sesión · Valdemora · Galaxy S23"]]},
  {c: "C3", svc: "RunTrack", ic: "🏃‍♀️", id: "lunavas_runs", kv: [["Quién ve tus actividades", "Todo el mundo"], ["Zonas de privacidad (ocultar inicio y fin)", "Ninguna"], ["Aprobar seguidores", "Automático"]], act: [["15/10", "Nuevo seguidor: runner_lover_88"], ["14 días", "runner_lover_88 ha visto tus actividades 48 veces", 1], ["28/10 07:51", "runner_lover_88 dio «ánimo» a «Carrera matutina»", 1]]},
  {c: "C4", svc: "Campus UVal", ic: "🎓", id: "20734418", kv: [["Verificación en dos pasos", "Activada"], ["Cambio de contraseña", "Obligatorio cada 180 días"], ["Último cambio", "01/09/2026"]], act: [["27/10 13:58", "Inicio de sesión · biblioteca de la UVal"]]}
 ],
 lab: {svc: "Picto", user: "@lu.runs.valdemora", q: "¿Cómo se llama tu mascota?", hash: "yj2fgn"},

 /* ---------- Misión 3 · Bandeja ---------- */
 inbox: [
  {c: "M1", ch: "Correo", ic: "🎓", name: "Secretaría UVal", addr: "avisos@uvaldemora-matricula.com", sub: "Tu matrícula ha sido bloqueada", txt: "Hola, Lucía:\n\nTu matrícula de 2.º de Fisioterapia ha sido bloqueada por una incidencia en el pago. Para no perder la convocatoria, accede con tu número de estudiante y tu contraseña antes de 48 horas.", link: ["acortar.li/x7Kq", "http://uval-acceso.xyz/login"]},
  {c: "M2", ch: "Mensaje directo", ic: "🏃", name: "Club Zancadas", addr: "@clubzancadas (cuenta del club que sigues)", sub: "Series del miércoles", txt: "¡Hola Lucía! El miércoles las series son en la pista municipal, que el parque está en obras. Confírmalo en el grupo del club 🧡"},
  {c: "M3", ch: "Mensaje directo", ic: "💬", name: "runner_lover_88", addr: "@runner_lover_88 · cuenta creada hace 3 semanas · sin publicaciones", sub: "Solicitud de mensaje", txt: "Hola Lucía 😊 Te veo casi todas las mañanas por la calle del Olmo, siempre tan concentrada… ¿Por qué no corremos juntos un día? Sé que el miércoles tienes series 😉"},
  {c: "M4", ch: "WhatsApp", ic: "💜", name: "+34 611 000 742 (número no guardado)", addr: "+34 611 000 742", sub: "Lu soy Carla, número nuevo", txt: "Lu soy Carla, se me ha roto el móvil y este es mi número nuevo 😩 ¿Me haces un Bizum de 150 €? Te lo devuelvo mañana, es urgente, no se lo digas a mamá", audio: "0:14 · nota de voz con la voz de Carla"}
 ],

 /* ---------- Misión 4 · Bienestar ---------- */
 wb: {days: [3.9, 4.2, 4.0, 4.5, 5.1, 6.3, 5.8], week: "Semana del 20 al 26 de octubre",
  apps: [["Picto", 105], ["WhatsApp", 65], ["YouTube", 40], ["RunTrack", 35], ["Música", 30]],
  tiles: [["B3", "55 min", "de uso al día entre las 00:00 y las 07:00"], ["B4", "06:40", "hora del despertador; última consulta media a las 01:05"], ["B5", "25", "visitas al día a perfiles de otras corredoras"]]}
};
