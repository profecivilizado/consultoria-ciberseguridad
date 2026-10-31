/* Expediente 001 · Hugo Ferrer
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.hugo = {
 no: "001", name: "Hugo Ferrer", short: "Hugo", age: 20,
 study: "2.º de Turismo (Universidad de Valdemora)",
 nick: "hferrer06", picto: "hugo.ferrer.trips", h: 200,
 hook: "Mientras estaba de viaje, alguien intentó entrar en sus cuentas y jugó partidas con su perfil de videojuegos.",
 situation: "El 25 de octubre, de madrugada, Hugo recibió un aviso de Picto: alguien había pedido restablecer su contraseña. Ese mismo día descubrió partidas en su cuenta de PlayArena que él no había jugado. Hugo está de vacaciones con su familia y asegura que «solo sube fotos del viaje».",

 /* ---------- Misión 1 · CyberSearch ---------- */
 search: {
  q: ["hferrer06", "hugo ferrer", "hugo.ferrer.trips", "hferrer06@valmail.es", "hugoferrer"],
  res: [
   {c: "H1", u: "trotaforo.com › foro › asia › tailandia-octubre", t: "¿Llueve mucho en Tailandia en octubre? — TrotaForo",
    s: "hferrer06 · 2 sept. 2026 · «Vamos toda la familia del 24 de octubre al 8 de noviembre a Bangkok y Krabi…»",
    page: `<div class="sh">TrotaForo · Asia › Tailandia</div><div class="q"><b>hferrer06</b> · 2 de septiembre de 2026
Hola! Vamos toda la familia del 24 de octubre al 8 de noviembre a Bangkok y Krabi. ¿Llueve mucho esas fechas? ¿Merece la pena contratar seguro de viaje? Gracias!!

—
Hugo · hferrer06@valmail.es · Valdemora</div><div class="q"><b>mochila_azul</b> · 2 de septiembre de 2026
En Krabi a finales de octubre aún llueve por las tardes, pero se disfruta. El seguro, siempre.</div><p class="small">Usuario hferrer06 · miembro desde 2019 · 48 mensajes</p>`},
   {c: "H2", u: "playarena.gg › player › hferrer06", t: "hferrer06 · Nivel 54 · PlayArena",
    s: "Jugador de Valdemora (ES) · Última conexión: 25 oct. 2026 · 132 amigos",
    page: `<div class="sh">PlayArena · hferrer06</div><table><tr><td>Nombre visible</td><td>Hugo F.</td></tr><tr><td>Ubicación</td><td>Valdemora, España</td></tr><tr><td>Miembro desde</td><td>marzo de 2023</td></tr><tr><td>Última conexión</td><td>25/10/2026 · 03:21</td></tr></table>
<b>Partidas recientes</b><table><tr><th>Fecha</th><th>Modo</th><th>Resultado</th></tr><tr><td>25/10 · 05:40</td><td>Clasificatoria</td><td>Derrota</td></tr><tr><td>25/10 · 04:58</td><td>Clasificatoria</td><td>Derrota</td></tr><tr><td>25/10 · 03:22</td><td>Clasificatoria</td><td>Victoria</td></tr><tr><td>19/10 · 21:10</td><td>Normal</td><td>Victoria</td></tr></table>`},
   {c: "H3", u: "uvaldemora.es › noticias › rutas-sostenibles", t: "Estudiantes de Turismo, premiados en el concurso de rutas sostenibles",
    s: "…el equipo formado por Hugo Ferrer, Irene Gil y Marcos Vela ganó el primer premio con una ruta en bicicleta por la ribera…",
    page: `<div class="sh">Universidad de Valdemora · Noticias</div><p>12 de mayo de 2026. El equipo formado por Hugo Ferrer, Irene Gil y Marcos Vela, de 2.º de Turismo, ha ganado el primer premio del concurso de rutas sostenibles con una propuesta en bicicleta por la ribera del río.</p>`}
  ]},
 log: {c: "H4", rows: [["Servicio", "Picto (sesión propia de Hugo)"], ["Fecha", "23/10/2026 · 22:14"], ["Dirección IP", "88.12.41.xxx (Valdenet Fibra)"], ["Ubicación aproximada", "Valdemora, España"], ["Dispositivo", "iPhone 14 · iOS 19.1 · app Picto 12.4"], ["Cookies de terceros", "14 (publicidad: viajes, maletas, seguros de viaje)"], ["Perfil publicitario deducido", "Viajero frecuente · 18-24 años · interés en Asia"]]},

 /* ---------- Misión 1 · Picto ---------- */
 pic: {
  bio: "✈️ 14 países y contando\nValdemora → el mundo\nTurismo · UVal", posts: 212, fol: "1.240", seg: "486",
  hl: [["🗼", "París"], ["🍣", "Japón"], ["🏛️", "Roma"], ["🌴", "Tailandia"]],
  feed: [
   {c: "R1", img: "hugo-1", ph: ["🏝️", "Playa tropical"], date: "27 de octubre · 16:20", loc: "Railay Beach, Krabi (Tailandia)", likes: 318, cap: "Día 3. No quiero volver nunca 🏝️", cm: [["marcos_vld", "¿Y Rufo quién lo cuida?"], ["hugo.ferrer.trips", "En la residencia canina hasta que volvamos 🐶"], ["laura.prz", "Qué envidia 😭"]]},
   {c: "R2", shot: ["boarding"], date: "24 de octubre · 05:12", loc: "Aeropuerto de Madrid-Barajas", likes: 201, cap: "Primera escala ✈️", cm: [["mamá_ferrer", "Avisa cuando aterricéis ❤️"]]},
   {c: "R3", shot: ["story", {bg: "linear-gradient(160deg,#3b4a63,#1b2230)", text: "Alarma puesta 😎", sub: "Casa, nos vemos en 2 semanas 👋", foot: "Historia destacada · «Tailandia»"}], date: "24 de octubre · 04:30", likes: 0, cap: "", cm: []},
   {c: "R4", img: "hugo-2", ph: ["🌃", "Portal de noche"], date: "23 de octubre · 23:40", likes: 267, cap: "La última noche en casa… ¡mañana nos vamos 15 días a Tailandia! 🇹🇭 El vuelo sale a las 6", cm: [["mamá_ferrer", "¿Has cerrado el gas? 😂"], ["edu_99", "Tráeme algo!!"]]},
   {c: "R5", img: "hugo-3", ph: ["📖", "Guía de viaje"], date: "10 de octubre · 18:05", likes: 84, cap: "Deberes antes del viaje 📖 ¿Alguna recomendación de Bangkok?", cm: [["irene.gil", "El mercado flotante, sin duda"]]},
   {c: "R6", shot: ["old", {ctx: "Comentario de @hugo.ferrer.trips en una publicación de @restauranteelpuerto", text: "«Pésimo servicio. El camarero, Rubén, un inútil. A ver si lo echan ya 🤡»", date: "2 de septiembre de 2026", rep: ["restauranteelpuerto: Sentimos tu experiencia, Hugo. Escríbenos por privado.", "laura.prz: Hugo, eso no se dice así…"]}], date: "2 de septiembre de 2026", likes: 12, cap: "(Captura de un comentario público de Hugo)", cm: []},
   {c: "R7", img: "hugo-4", ph: ["🐕", "Perro en el parque"], date: "3 de julio de 2026", likes: 240, cap: "Rufo cumple 5 años 🐶 Mi primera mascota y la mejor", cm: [["mamá_ferrer", "El rey de la casa ❤️"]]},
   {c: "R8", img: "hugo-5", ph: ["🎂", "Tarta de cumpleaños"], date: "12 de marzo de 2024", likes: 188, cap: "18 con los de siempre 🎉 @laura.prz @marcos_vld @edu_99", cm: [["edu_99", "Bórrala porfa, que salgo fatal 😅"], ["laura.prz", "¡Felices 18! 🎂"]]}
  ],
  priv: {c: "R9", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Siempre"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Revisar etiquetas antes de publicarlas", "No"], ["Verificación en dos pasos", "No"]]}
 },

 /* ---------- Misión 1 · Archivos ---------- */
 files: [
  {c: "A1", name: "hugo-2.jpg", kind: "jpg", ph: ["🌃", "Portal de noche"], note: "Foto original de la publicación R4"},
  {c: "A2", name: "hugo-1.jpg", kind: "jpg", ph: ["🏝️", "Playa tropical"], note: "Foto original de la publicación R1"},
  {c: "A3", name: "itinerario_tailandia.docx", kind: "docx", props: [["Título", "Tailandia 24 oct – 8 nov"], ["Autor", "Hugo Ferrer"], ["Último en guardar", "PC-FERRER-SALON"], ["Creado", "15/09/2026 · 20:11"], ["Modificado", "20/10/2026 · 23:02"], ["Comentario oculto", "«Llaves de repuesto: maceta del rellano, 4.º»"]]}
 ],
 meta: {
  "hugo-1.jpg": {make: "Apple", model: "iPhone 14", date: "27/10/2026 16:18:31", gps: [8.01150, 98.83780]},
  "hugo-2.jpg": {make: "Apple", model: "iPhone 14", date: "23/10/2026 23:38:12", gps: [39.41600, -13.21500]}
 },

 /* ---------- Misión 2 · Cuentas ---------- */
 acc: [
  {c: "C1", svc: "Valmail", ic: "✉️", id: "hferrer06@valmail.es", kv: [["Verificación en dos pasos", "Activada (SMS)"], ["Recuperación", "Teléfono +34 6•• ••• •18"], ["Contraseña cambiada", "12/03/2023"]], act: [["24/10 05:01", "Inicio de sesión · Madrid · iPhone"], ["25/10 03:18", "Contraseña correcta desde Bucarest (Rumanía) · Bloqueado: no se introdujo el código SMS", 1]]},
  {c: "C2", svc: "Picto", ic: "📸", id: "@hugo.ferrer.trips", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "05/06/2024"]], act: [["25/10 03:24", "Inicio de sesión fallido · Bucarest (Rumanía) · contraseña incorrecta", 1], ["25/10 03:26", "Restablecimiento por pregunta de seguridad · 3 respuestas incorrectas", 1], ["27/10 16:19", "Inicio de sesión · Krabi (Tailandia) · iPhone"]]},
  {c: "C3", svc: "PlayArena", ic: "🎮", id: "hferrer06", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "12/03/2023"]], act: [["19/10 21:10", "Inicio de sesión · Valdemora · PC"], ["25/10 03:21", "Inicio de sesión · Bucarest (Rumanía) · Chrome/Windows", 1], ["25/10 05:44", "Canje de 1.200 monedas por objetos transferibles", 1]]},
  {c: "C4", svc: "TrotaForo", ic: "🗺️", id: "hferrer06", kv: [["Verificación en dos pasos", "No disponible"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "12/03/2023"]], act: [["02/09 19:40", "Mensaje publicado en «Asia › Tailandia»"]],
   alert: "Aviso público del 20/09/2026: un atacante accedió a la base de datos del foro. Se expusieron usuarios, correos y contraseñas (guardadas con un cifrado débil). Cuentas afectadas: 412.000."}
 ],
 lab: {svc: "Picto", user: "@hugo.ferrer.trips", q: "¿Cómo se llamaba tu primera mascota?", hash: "yjb7gr"},

 /* ---------- Misión 3 · Bandeja ---------- */
 inbox: [
  {c: "M1", ch: "Correo", ic: "✈️", name: "SkyValdemora Reservas", addr: "reservas@skyvaldemora-cambios.com", sub: "Cambio en su vuelo SV0841", txt: "Estimado/a Sr. FERRER:\n\nSu vuelo de regreso asociado a la reserva K7Q4ZP ha sufrido un cambio operativo. Para conservar sus asientos debe confirmar los datos de pago en las próximas 24 horas.\n\nSi no confirma, la reserva será cancelada sin reembolso.", link: ["Confirmar mi reserva", "http://skyvaldemora-cambios.com/confirmar?loc=K7Q4ZP"]},
  {c: "M2", ch: "Correo", ic: "📸", name: "Picto · Seguridad", addr: "seguridad@picto.app", sub: "Solicitud para restablecer tu contraseña", txt: "Hola, Hugo:\n\nHemos recibido una solicitud para restablecer la contraseña de @hugo.ferrer.trips desde Bucarest (Rumanía) el 25/10 a las 03:26.\n\nSi no fuiste tú, no tienes que hacer nada: la solicitud no se completó. Te recomendamos activar la verificación en dos pasos desde Ajustes > Seguridad en la app."},
  {c: "M3", ch: "Correo", ic: "🗺️", name: "TrotaForo", addr: "avisos@trotaforo.com", sub: "Información importante sobre tu cuenta", txt: "Hola, hferrer06:\n\nEl pasado septiembre sufrimos un incidente de seguridad que expuso contraseñas de usuarios. Hemos restablecido la tuya.\n\nSi usabas la misma contraseña en otros servicios, cámbiala también allí cuanto antes. Puedes elegir una nueva desde la configuración de tu cuenta en nuestra web."},
  {c: "M4", ch: "SMS", ic: "📦", name: "RapidEnvio", addr: "+44 7700 900 312", sub: "Paquete retenido", txt: "RapidEnvio: Tu paquete esta retenido en aduanas. Paga 1,99 EUR antes de hoy a las 23:59 o sera devuelto:", link: ["rapidenvio-aduana.top/pago", "http://rapidenvio-aduana.top/pago?id=HF2210"]}
 ],

 /* ---------- Misión 4 · Bienestar ---------- */
 wb: {days: [4.1, 3.8, 5.2, 6.9, 8.4, 7.6, 7.9], week: "Semana del 20 al 26 de octubre",
  apps: [["Picto", 170], ["Mensajes", 70], ["Mapas", 40], ["PlayArena", 35], ["Cámara", 25]],
  tiles: [["B3", "1 h 05 min", "de uso al día entre las 00:00 y las 07:00"], ["B4", "236", "notificaciones al día (118 de Picto)"], ["B5", "11", "publicaciones en directo en 4 días de viaje"]]}
};
