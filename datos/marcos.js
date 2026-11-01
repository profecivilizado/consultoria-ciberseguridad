/* Expediente 004 · Marcos Bel
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.marcos = {
 no: "004", name: "Marcos Bel", short: "Marcos", age: 20,
 study: "2.º de Grado en Música (Conservatorio Superior de Valdemora)",
 nick: "marcosbel.music", picto: "marcosbel.music", h: 30,
 hook: "Le han robado el correo y su canal de música, que ahora anuncia criptomonedas.",
 situation: "El 26 de octubre por la noche, Marcos dejó de poder entrar en su correo. Una hora después, su canal de SoundWave, con 2.300 suscriptores, había cambiado de nombre y publicaba anuncios de criptomonedas. Marcos dice que su contraseña «era muy segura, con números y símbolos».",

 preg: {
  cybersearch: [
   "Busca <b>marcosbel.music</b>. ¿Cuántos resultados aparecen? Abre cada uno.",
   "<b>H1</b> · ¿Cuántos suscriptores tiene su canal de SoundWave? ¿Qué correo de contacto aparece?",
   "<b>H2</b> · En el foro de guitarras, ¿cuál fue su primer instrumento y a qué edad se lo regalaron? Apúntalo: lo necesitarás en la misión 2.",
   "<b>H3</b> · ¿La noticia de la audición del conservatorio supone algún riesgo? ¿Por qué?",
   "<b>H4</b> · El registro técnico recoge datos sin que Marcos los publique. Escribe tres. ¿Es huella digital activa o pasiva?"],
  picto: [
   "Busca a Marcos en Picto. Aparecen varias cuentas: ¿cuál es la suya? Escribe <b>dos datos</b> que te lo confirmen (piensa en lo que viste en CyberSearch).",
   "<b>R1</b> · Abre la foto de su rincón de grabación. ¿Qué pone en el pósit amarillo? ¿Por qué es tan grave haberlo publicado?",
   "<b>R2</b> · ¿Cuánto tiempo estuvo ahorrando para la guitarra? ¿Qué riesgo tiene enseñar objetos de valor?",
   "<b>R3</b> · ¿Cuál fue su primer instrumento? ¿Coincide con H2?",
   "<b>R5</b> · ¿Qué le ha pasado a Marcos con su correo? ¿Qué le dicen sus amigos?",
   "<b>R4</b> y <b>R6</b> · ¿Alguna de estas dos publicaciones supone un riesgo? ¿Por qué?",
   "<b>R7</b> · Mira los ajustes de privacidad. ¿Qué dos ajustes cambiarías primero?"],
  archivos: [
   "<b>A1</b> · Es la foto original de R2. ¿Tiene coordenadas GPS? ¿Qué lugar marca el mapa?",
   "<b>A1</b> · Junta A1 con R2: ¿qué puede saber ahora un desconocido?",
   "<b>A2</b> · ¿Qué datos aparecen en las propiedades de la canción? ¿Con qué ordenador se grabó?",
   "<b>A3</b> · ¿Esta partitura revela algún dato sensible?"],
  cuentas: [
   "¿En qué cuentas tiene Marcos activada la verificación en dos pasos?",
   "<b>C1</b> · ¿Desde dónde y cuándo entraron en su correo? ¿Necesitó el atacante adivinar la contraseña? (recuerda R1)",
   "<b>C2</b> · La contraseña de SoundWave era distinta. ¿Cómo consiguió el atacante entrar? Fíjate en «Recuperación».",
   "<b>C2</b> · ¿Qué hizo el atacante con el canal?",
   "<b>C3</b> · ¿Por qué el atacante no pudo entrar en Picto?",
   "Haz la <b>prueba de recuperación</b> de Valmail con lo que apuntaste en H2 o R3. ¿Lo has conseguido?",
   "Completa: «El atacante consiguió la contraseña del correo de Marcos en ___ y, con el correo, se quedó con ___»."]
 },

 search: {
  q: ["marcosbel.music", "marcos bel", "marcosbel", "marcos.bel@valmail.es"],
  res: [
   {c: "H1", u: "soundwave.fm › marcosbel.music", t: "Marcos Bel — Canal de SoundWave",
    s: "2.300 suscriptores · Versiones a la guitarra · Contacto: marcos.bel@valmail.es",
    page: `<div class="sh">SoundWave · Marcos Bel</div><p>Versiones acústicas y temas propios desde mi estudio casero 🎸</p><table><tr><td>Suscriptores</td><td>2.300</td></tr><tr><td>Contacto</td><td>marcos.bel@valmail.es</td></tr><tr><td>Último vídeo</td><td>«Hallelujah, versión acústica» · 20/10/2026</td></tr></table>`},
   {c: "H2", u: "guitarristas.net › foro › mi-primer-instrumento", t: "¿Cuál fue vuestro primer instrumento? — Guitarristas.net",
    s: "marcosbel.music · «El mío fue un ukelele que me regalaron con 8 años, todavía lo guardo»",
    page: `<div class="sh">Guitarristas.net · Charla general</div><div class="q"><b>marcosbel.music</b> · 4 de abril de 2026
El mío fue un ukelele que me regalaron con 8 años, todavía lo guardo 🥹 Luego ya vino la guitarra.</div><div class="q"><b>riff_master</b> · 4 de abril de 2026
Yo empecé con una flauta del cole jajaja</div>`},
   {c: "H3", u: "csmvaldemora.es › noticias › audicion-otono", t: "Audición de otoño del Conservatorio Superior",
    s: "…intervendrán alumnos de guitarra, piano y violín, entre ellos Marcos Bel. Entrada libre…",
    page: `<div class="sh">Conservatorio Superior de Valdemora</div><p>La audición de otoño será el 20 de noviembre en el auditorio. Intervendrán alumnos de guitarra, piano y violín, entre ellos Marcos Bel. Entrada libre hasta completar el aforo.</p>`}
  ]},
 log: {c: "H4", rows: [["Servicio", "SoundWave (sesión propia de Marcos)"], ["Fecha", "20/10/2026 · 23:41"], ["Dirección IP", "88.20.75.xxx (Valdenet Fibra)"], ["Ubicación aproximada", "Valdemora, España"], ["Dispositivo", "MacBook de Marcos Bel · macOS 16"], ["Cookies de terceros", "19 (publicidad: instrumentos, cursos de música, auriculares)"], ["Perfil publicitario deducido", "Músico · 18-24 años · interés en equipos de sonido"]]},

 pic: {
  search: {
   q: ["marcos", "bel", "marcos bel", "marcosbel", "marcosbel.music"],
   decoys: [
    {user: "marcos.bel.arq", name: "Marcos Bel", bio: "📐 Arquitecto\nValencia", posts: 412, fol: "2.330", seg: "510", tiles: [["🏛️", 210], ["📐", 200], ["🏠", 30], ["🌇", 20]]},
    {user: "marcosbel_", name: "Marcos B.", bio: "Huesca", posts: 27, fol: "150", seg: "220", priv: true},
    {user: "mbel.cocina", name: "Marcos Bel", bio: "👨‍🍳 Chef · Sevilla\nRecetas fáciles cada semana", posts: 690, fol: "11,4 mil", seg: "300", tiles: [["🍳", 30], ["🥘", 20], ["🍰", 330], ["🥗", 120], ["🍝", 10], ["🔪", 200]]}
   ],
   pos: 0},
  bio: "🎸 Guitarra · Conservatorio Superior de Valdemora\n🎧 Versiones en SoundWave\n📍 Valdemora", posts: 175, fol: "1.880", seg: "402",
  hl: [["🎸", "Guitarras"], ["🎤", "Directos"], ["🎧", "SoundWave"], ["🎼", "Clases"]],
  feed: [
   {c: "R1", shot: ["desk", {note: "Valmail:\nMarcos2006*"}], date: "22 de octubre · 20:10", likes: 156, cap: "Por fin terminé mi rincón para grabar 🎸 Ahora sí, más versiones cada semana", cm: [["riff_master", "Qué pasada de estudio"], ["laura.vlc", "Marcos… ¿eso del pósit es lo que creo? 😅"]]},
   {c: "R2", img: "marcos-1", ph: ["🎸", "Guitarra eléctrica"], date: "15 de octubre · 19:00", likes: 340, cap: "Mi guitarra nueva 🎸 Dos años ahorrando para esto", cm: [["riff_master", "¡Enhorabuena, crack!"]]},
   {c: "R3", img: "marcos-2", ph: ["🎵", "Ukelele"], date: "2 de octubre · 17:30", likes: 210, cap: "Mi primer instrumento: el ukelele que me regalaron con 8 años 🎵 Aquí empezó todo", cm: []},
   {c: "R4", shot: ["story", {bg: "linear-gradient(160deg,#2f4c8f,#16213e)", text: "Concierto el sábado 🎤", sub: "Bar La Nota · 22:00 · ¡entrada libre!", foot: "Historia destacada · «Directos»"}], date: "29 de septiembre · 13:00", likes: 0, cap: "", cm: []},
   {c: "R5", shot: ["notif", {time: "21:58", day: "lunes, 26 de octubre", lines: ["Valmail: la contraseña de tu cuenta se ha cambiado.", "SoundWave: tu contraseña se ha restablecido.", "SoundWave: el nombre de tu canal ha cambiado."]}], date: "26 de octubre · 21:58", likes: 98, cap: "¿Alguien sabe por qué no puedo entrar en mi correo? Dice que la contraseña ha cambiado 😩", cm: [["laura.vlc", "Tu canal de SoundWave ahora se llama «CRYPTO GIVEAWAY» 😳"], ["riff_master", "Te han hackeado, tío"]]},
   {c: "R6", img: "marcos-3", ph: ["🎼", "Partitura"], date: "20 de septiembre · 10:15", likes: 120, cap: "Estudiando para la audición de otoño 🎼", cm: []}
  ],
  priv: {c: "R7", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Siempre"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Verificación en dos pasos", "Sí"], ["Revisar fotos antes de publicarlas", "No"]]}
 },

 files: [
  {c: "A1", name: "marcos-1.jpg", kind: "jpg", ph: ["🎸", "Guitarra eléctrica"], note: "Foto original de la publicación R2"},
  {c: "A2", name: "hallelujah_acustica.mp3", kind: "mp3", props: [["Título", "Hallelujah (versión acústica)"], ["Artista", "Marcos Bel"], ["Grabado con", "MacBook de Marcos Bel · GarageBand"], ["Fecha", "20/10/2026"], ["Ubicación (GPS)", "No contiene"]]},
  {c: "A3", name: "partitura_audicion.pdf", kind: "pdf", props: [["Título", "Asturias (Leyenda) · I. Albéniz"], ["Páginas", "6"], ["Creado con", "MuseScore"]]}
 ],
 meta: {
  "marcos-1.jpg": {make: "samsung", model: "Galaxy S24", date: "15/10/2026 18:52:40", gps: [39.41300, -13.21000]}
 },

 acc: [
  {c: "C1", svc: "Valmail", ic: "✉️", id: "marcos.bel@valmail.es", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "12/09/2026"]], act: [["26/10 21:40", "Inicio de sesión correcto a la primera · Oporto (Portugal)", 1], ["26/10 21:44", "Contraseña cambiada", 1]]},
  {c: "C2", svc: "SoundWave", ic: "🎧", id: "marcosbel.music", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Enlace al correo (Valmail)"], ["Contraseña cambiada", "03/03/2024"]], act: [["26/10 21:50", "Contraseña restablecida con un enlace enviado al correo", 1], ["26/10 21:53", "Canal renombrado a «CRYPTO GIVEAWAY»", 1], ["26/10 22:10", "3 vídeos publicados: «Gana Bitcoin gratis»", 1]]},
  {c: "C3", svc: "Picto", ic: "📸", id: "@marcosbel.music", kv: [["Verificación en dos pasos", "Activada (SMS)"], ["Recuperación", "Teléfono"], ["Contraseña cambiada", "18/05/2025"]], act: [["26/10 21:55", "Restablecimiento solicitado desde Oporto · Bloqueado: falta el código SMS", 1]]},
  {c: "C4", svc: "MúsicaStore", ic: "🛒", id: "marcos.bel@valmail.es", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "10/10/2025"]], act: [["14/10 18:20", "Compra: guitarra eléctrica · 1.150 €"]]}
 ],
 lab: {svc: "Valmail", user: "marcos.bel@valmail.es", q: "¿Cuál fue tu primer instrumento musical?", hash: ["1jg61dq", "1j4vcdq", "qkbfqd"]}
};
