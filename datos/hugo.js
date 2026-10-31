/* Expediente 001 · Hugo Ferrer
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.hugo = {
 no: "001", name: "Hugo Ferrer", short: "Hugo", age: 20,
 study: "2.º de Turismo (Universidad de Valdemora)",
 nick: "hferrer06", picto: "hugo.ferrer.trips", h: 200,
 hook: "Mientras estaba de viaje, alguien intentó entrar en sus cuentas y jugó partidas con su perfil de videojuegos.",
 situation: "El 25 de octubre, de madrugada, Hugo recibió un aviso de Picto: alguien había intentado entrar en su cuenta. Ese mismo día descubrió partidas en su cuenta de PlayArena que él no había jugado. Hugo está de vacaciones con su familia y asegura que «solo sube fotos del viaje».",

 /* ---------- Preguntas guiadas de cada herramienta ---------- */
 preg: {
  cybersearch: [
   "Busca <b>hferrer06</b>. ¿Cuántos resultados aparecen? Abre cada uno.",
   "<b>H1</b> · En el foro, ¿qué fechas exactas dice Hugo que estará fuera de casa? ¿Quién se va con él?",
   "<b>H1</b> · ¿Qué correo electrónico aparece en la firma del mensaje?",
   "<b>H2</b> · Apunta el día y la hora de las últimas partidas de PlayArena. Las necesitarás más adelante.",
   "<b>H3</b> · ¿La noticia de la universidad supone algún riesgo? ¿Por qué?",
   "<b>H4</b> · El registro técnico recoge datos sin que Hugo los publique. Escribe tres. ¿Es huella digital activa o pasiva?"],
  picto: [
   "Busca a Hugo en Picto. Aparecen varias cuentas: ¿cuál es la suya? Escribe <b>dos datos</b> que te lo confirmen (piensa en lo que viste en CyberSearch).",
   "<b>R4</b> · ¿Cuántos días se va de viaje? ¿A qué hora sale el vuelo? ¿Se ve la entrada de su casa?",
   "<b>R3</b> · ¿Qué cuenta Hugo sobre la alarma de su casa?",
   "<b>R2</b> · Escribe todos los datos que se leen en la tarjeta de embarque.",
   "<b>R1</b> · ¿Dónde está Hugo el 27 de octubre? Lee los comentarios: ¿quién cuida de su perro? Entonces, ¿hay alguien en su casa?",
   "<b>R6</b> · ¿Cómo se llama su primera mascota? Apúntalo: lo necesitarás en la misión 2.",
   "<b>R7</b> · ¿Qué día es el cumpleaños de Hugo? ¿Qué le pide su amigo edu_99 y por qué?",
   "<b>R5</b> · ¿Esta publicación supone algún riesgo?",
   "<b>R8</b> · Mira los ajustes de privacidad. ¿Qué dos ajustes cambiarías primero?"],
  archivos: [
   "<b>A1</b> · Es la foto original de la publicación R4. ¿Tiene coordenadas GPS? ¿Qué lugar marca el mapa?",
   "<b>A1</b> · Junta A1 con R4: ¿qué puede saber ahora un desconocido?",
   "<b>A2</b> · Es la foto original de R1. ¿Dónde y a qué hora se hizo? ¿Coincide con lo que publicó Hugo?",
   "<b>A3</b> · Sin abrir el documento, ¿qué información dan sus propiedades (título, autor, ordenador)?"],
  cuentas: [
   "¿En qué cuentas tiene Hugo activada la verificación en dos pasos?",
   "Mira la fecha de «Contraseña cambiada» de <b>C1</b>, <b>C3</b> y <b>C4</b>. ¿Qué tienen en común? ¿Qué te hace pensar?",
   "<b>C4</b> · Lee el aviso de TrotaForo. ¿Qué datos se filtraron?",
   "<b>C3</b> · ¿Desde dónde se entró en PlayArena el 25 de octubre? Según R1, ¿pudo ser Hugo? ¿Qué hizo el atacante?",
   "<b>C1</b> · En Valmail, el atacante puso la contraseña correcta. ¿Por qué no pudo entrar?",
   "Haz la <b>prueba de recuperación</b> de Picto con lo que apuntaste en R6. ¿Lo has conseguido?",
   "Completa: «El atacante consiguió la contraseña de Hugo en ___ y pudo usarla en otras cuentas porque ___»."]
 },

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
  search: {
   q: ["hugo", "ferrer", "hugo ferrer", "hugo.ferrer.trips", "hferrer06", "hferrer"],
   decoys: [
    {user: "hugoferrer_", name: "Hugo Ferrer", bio: "📷 Fotógrafo de bodas\nBarcelona", posts: 845, fol: "12,3 mil", seg: "410", tiles: [["💍", 330], ["📷", 20], ["🌸", 300], ["🥂", 45], ["💐", 280], ["🌅", 30]]},
    {user: "hugo_ferrer_2003", name: "Hugo F.", bio: "Sevilla ⚽", posts: 38, fol: "212", seg: "380", priv: true},
    {user: "hferrer.music", name: "Hugo Ferrer", bio: "🎸 Guitarrista · Conciertos en Valencia\nNuevo single ya disponible", posts: 126, fol: "2.104", seg: "530", tiles: [["🎸", 10], ["🎤", 280], ["🎶", 220], ["🎧", 190]]}
   ],
   pos: 1},
  bio: "✈️ 14 países y contando\nValdemora → el mundo\nTurismo · UVal", posts: 212, fol: "1.240", seg: "486",
  hl: [["🗼", "París"], ["🍣", "Japón"], ["🏛️", "Roma"], ["🌴", "Tailandia"]],
  feed: [
   {c: "R1", img: "hugo-1", ph: ["🏝️", "Playa tropical"], date: "27 de octubre · 16:20", loc: "Railay Beach, Krabi (Tailandia)", likes: 318, cap: "Día 3. No quiero volver nunca 🏝️", cm: [["marcos_vld", "¿Y Rufo quién lo cuida?"], ["hugo.ferrer.trips", "Está en la residencia canina hasta que volvamos. En casa no queda nadie 🐶"], ["laura.prz", "Qué envidia 😭"]]},
   {c: "R2", shot: ["boarding"], date: "24 de octubre · 05:12", loc: "Aeropuerto de Madrid-Barajas", likes: 201, cap: "Primera escala ✈️", cm: [["mamá_ferrer", "Avisa cuando aterricéis ❤️"]]},
   {c: "R3", shot: ["story", {bg: "linear-gradient(160deg,#3b4a63,#1b2230)", text: "Alarma puesta 😎", sub: "Casa, nos vemos en 2 semanas 👋", foot: "Historia destacada · «Tailandia»"}], date: "24 de octubre · 04:30", likes: 0, cap: "", cm: []},
   {c: "R4", img: "hugo-2", ph: ["🌃", "Portal de noche"], date: "23 de octubre · 23:40", likes: 267, cap: "La última noche en casa… ¡mañana nos vamos 15 días a Tailandia! 🇹🇭 El vuelo sale a las 6", cm: [["mamá_ferrer", "¿Has cerrado el gas? 😂"], ["edu_99", "Tráeme algo!!"]]},
   {c: "R5", img: "hugo-3", ph: ["📖", "Mapa de viaje"], date: "10 de octubre · 18:05", likes: 84, cap: "Deberes antes del viaje 📖 ¿Alguna recomendación de Bangkok?", cm: [["irene.gil", "El mercado flotante, sin duda"]]},
   {c: "R6", img: "hugo-4", ph: ["🐕", "Perro en el parque"], date: "3 de julio de 2026", likes: 240, cap: "Rufo cumple 5 años 🐶 Mi primera mascota y la mejor", cm: [["mamá_ferrer", "El rey de la casa ❤️"]]},
   {c: "R7", img: "hugo-5", ph: ["🎂", "Tarta de cumpleaños"], date: "12 de marzo de 2024", likes: 188, cap: "¡Hoy cumplo 18! 🎉 Con los de siempre @laura.prz @marcos_vld @edu_99", cm: [["edu_99", "Quítame la etiqueta porfa, que no quiero que me vean en tu perfil 😅"], ["laura.prz", "¡Felices 18! 🎂"]]}
  ],
  priv: {c: "R8", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Siempre"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Revisar etiquetas antes de publicarlas", "No"], ["Verificación en dos pasos", "No"]]}
 },

 /* ---------- Misión 1 · Archivos ---------- */
 files: [
  {c: "A1", name: "hugo-2.jpg", kind: "jpg", ph: ["🌃", "Portal de noche"], note: "Foto original de la publicación R4"},
  {c: "A2", name: "hugo-1.jpg", kind: "jpg", ph: ["🏝️", "Playa tropical"], note: "Foto original de la publicación R1"},
  {c: "A3", name: "itinerario_tailandia.docx", kind: "docx", props: [["Título", "Viaje a Tailandia · 24 oct – 8 nov · familia Ferrer"], ["Autor", "Hugo Ferrer"], ["Ordenador", "PC-FERRER-SALON"], ["Creado", "15/09/2026 · 20:11"], ["Modificado", "20/10/2026 · 23:02"]]}
 ],
 meta: {
  "hugo-1.jpg": {make: "Apple", model: "iPhone 14", date: "27/10/2026 16:18:31", gps: [8.01150, 98.83780]},
  "hugo-2.jpg": {make: "Apple", model: "iPhone 14", date: "23/10/2026 23:38:12", gps: [39.41600, -13.21500]}
 },

 /* ---------- Misión 2 · Cuentas ---------- */
 acc: [
  {c: "C1", svc: "Valmail", ic: "✉️", id: "hferrer06@valmail.es", kv: [["Verificación en dos pasos", "Activada (SMS)"], ["Recuperación", "Teléfono +34 6•• ••• •18"], ["Contraseña cambiada", "12/03/2023"]], act: [["24/10 05:01", "Inicio de sesión · Madrid · iPhone"], ["25/10 03:18", "Contraseña correcta desde Bucarest (Rumanía) · Bloqueado: no se introdujo el código SMS", 1]]},
  {c: "C2", svc: "Picto", ic: "📸", id: "@hugo.ferrer.trips", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "05/06/2024"]], act: [["25/10 03:24", "Inicio de sesión fallido · Bucarest (Rumanía) · contraseña incorrecta", 1], ["25/10 03:26", "Restablecimiento por pregunta de seguridad · 3 respuestas incorrectas", 1], ["27/10 16:19", "Inicio de sesión · Krabi (Tailandia) · iPhone"]]},
  {c: "C3", svc: "PlayArena", ic: "🎮", id: "hferrer06", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "12/03/2023"]], act: [["19/10 21:10", "Inicio de sesión · Valdemora · PC"], ["25/10 03:21", "Inicio de sesión correcto · Bucarest (Rumanía) · Chrome/Windows", 1], ["25/10 05:44", "Canje de 1.200 monedas por objetos transferibles", 1]]},
  {c: "C4", svc: "TrotaForo", ic: "🗺️", id: "hferrer06", kv: [["Verificación en dos pasos", "No disponible"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "12/03/2023"]], act: [["02/09 19:40", "Mensaje publicado en «Asia › Tailandia»"]],
   alert: "Aviso público del 20/09/2026: un atacante robó la base de datos del foro. Se filtraron los nombres de usuario, los correos y las contraseñas. Cuentas afectadas: 412.000."}
 ],
 lab: {svc: "Picto", user: "@hugo.ferrer.trips", q: "¿Cómo se llamaba tu primera mascota?", hash: "yjb7gr"}
};
