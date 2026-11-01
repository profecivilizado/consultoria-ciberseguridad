/* Expediente 005 · Irene Soto
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.irene = {
 no: "005", name: "Irene Soto", short: "Irene", age: 20,
 study: "2.º de Biología (Universidad de Valdemora)",
 nick: "irene.soto_bio", picto: "irene.soto_bio", h: 140,
 hook: "Sus amigos reciben mensajes con enlaces raros enviados desde su cuenta, y después alguien entró en su correo.",
 situation: "Desde el 24 de octubre, decenas de amigos de Irene han recibido por Picto un mensaje suyo con un enlace extraño. Ella no los ha escrito. Dos días después, alguien entró en su correo. Irene no entiende nada: «tengo la verificación en dos pasos activada en Picto».",

 preg: {
  cybersearch: [
   "Busca <b>irene.soto_bio</b>. ¿Cuántos resultados aparecen? Abre cada uno.",
   "<b>H1</b> · En la web de la protectora, ¿qué días y a qué hora está Irene?",
   "<b>H2</b> · ¿Qué aparece de Irene en la web de QuizMania? ¿Quién crees que lo ha publicado?",
   "<b>H3</b> · ¿La noticia del concurso de fotografía supone algún riesgo? ¿Por qué?",
   "<b>H4</b> · El registro técnico recoge datos sin que Irene los publique. Escribe tres. ¿Es huella digital activa o pasiva?"],
  picto: [
   "Busca a Irene en Picto. Aparecen varias cuentas: ¿cuál es la suya? Escribe <b>dos datos</b> que te lo confirmen (piensa en lo que viste en CyberSearch).",
   "<b>R1</b> · ¿Qué aplicación usó Irene? ¿Qué anima a hacer a sus seguidores?",
   "<b>R4</b> · ¿Qué permisos pedía la aplicación? ¿Los leyó Irene antes de pulsar «Permitir»?",
   "<b>R6</b> · ¿Qué mensaje recibieron sus amigos? ¿Lo envió ella?",
   "<b>R3</b> · ¿En qué pueblo nació Irene? Apúntalo: lo necesitarás en la misión 2.",
   "<b>R2</b> · ¿Qué parte de su rutina se ve en esta publicación? Relaciónalo con H1.",
   "<b>R5</b> · ¿Esta publicación supone algún riesgo?",
   "<b>R7</b> · Mira los ajustes de privacidad. ¿Qué dos ajustes cambiarías primero?"],
  archivos: [
   "<b>A1</b> · Es la foto original de R2. ¿Tiene coordenadas GPS? ¿Qué lugar marca el mapa?",
   "<b>A2</b> · Es la foto original de R5. ¿Qué lugar marca el mapa? ¿Qué se puede deducir?",
   "<b>A3</b> · ¿Qué datos aparecen en las propiedades del trabajo?"],
  cuentas: [
   "¿En qué cuentas tiene Irene activada la verificación en dos pasos?",
   "<b>C1</b> · Mira «Aplicaciones conectadas»: ¿qué permisos tiene QuizMania? ¿Qué hizo con ellos el 24 de octubre?",
   "¿Por qué la verificación en dos pasos de Picto no sirvió para frenar a QuizMania?",
   "<b>C2</b> · ¿Cómo entraron en el correo de Irene? Relaciónalo con lo que apuntaste en R3.",
   "<b>C4</b> · ¿Con qué cuenta se registró Irene en QuizMania?",
   "Haz la <b>prueba de recuperación</b> de Valmail con lo que apuntaste en R3. ¿Lo has conseguido?",
   "Completa: «QuizMania pudo enviar mensajes en nombre de Irene porque ___. Para evitarlo, debería ___»."]
 },

 search: {
  q: ["irene.soto_bio", "irene soto", "irenesoto", "irene.soto@valmail.es"],
  res: [
   {c: "H1", u: "protectoravaldemora.org › voluntariado", t: "Nuestro equipo de voluntarios — Protectora de Valdemora",
    s: "Turno de los sábados de 10:00 a 14:00: Irene Soto, Luis Pardo y Elena Ríos…",
    page: `<div class="sh">Protectora de Animales de Valdemora · Voluntariado</div><table><tr><th>Turno</th><th>Voluntarios</th></tr><tr><td>Lunes y miércoles · 17:00–20:00</td><td>Pablo Ruiz, Ana Gil</td></tr><tr><td>Sábados · 10:00–14:00</td><td>Irene Soto, Luis Pardo, Elena Ríos</td></tr></table><p class="small">¿Quieres ayudar? Escríbenos a voluntariado@protectoravaldemora.org</p>`},
   {c: "H2", u: "quizmania.app › ranking › personajes", t: "¿Qué personaje de serie eres? — Resultados de QuizMania",
    s: "irene.soto_bio (Irene Soto, Valdemora) ha obtenido: «La Sabia» · Compartido en Picto",
    page: `<div class="sh">QuizMania · Últimos resultados</div><table><tr><th>Usuario</th><th>Resultado</th></tr><tr><td>irene.soto_bio · Irene Soto · Valdemora</td><td>La Sabia</td></tr><tr><td>pablo_r · Pablo Ruiz · Valdemora</td><td>El Detective</td></tr></table><p class="small">Inicia sesión con Picto para descubrir tu personaje.</p>`},
   {c: "H3", u: "uvaldemora.es › ciencias › concurso-fotografia-cientifica", t: "Premiadas las mejores fotografías científicas del curso",
    s: "…el segundo premio fue para Irene Soto, de 2.º de Biología, por su imagen de una diatomea…",
    page: `<div class="sh">Universidad de Valdemora · Ciencias</div><p>El segundo premio del concurso de fotografía científica ha sido para Irene Soto, de 2.º de Biología, por su imagen de una diatomea vista al microscopio.</p>`}
  ]},
 log: {c: "H4", rows: [["Servicio", "Picto (sesión propia de Irene)"], ["Fecha", "24/10/2026 · 18:00"], ["Dirección IP", "81.45.60.xxx (Valdenet Móvil)"], ["Ubicación aproximada", "Valdemora, España"], ["Dispositivo", "Xiaomi Redmi Note 14 · Android 16"], ["Cookies de terceros", "21 (publicidad: mascotas, series, material de laboratorio)"], ["Perfil publicitario deducido", "Estudiante de ciencias · 18-24 años · amante de los animales"]]},

 pic: {
  search: {
   q: ["irene", "soto", "irene soto", "irenesoto", "irene.soto_bio"],
   decoys: [
    {user: "irenesoto.dance", name: "Irene Soto", bio: "💃 Bailarina\nBarcelona", posts: 780, fol: "15,2 mil", seg: "620", tiles: [["💃", 330], ["🩰", 300], ["🎶", 260], ["✨", 50]]},
    {user: "irene_soto99", name: "Irene S.", bio: "Murcia", posts: 52, fol: "301", seg: "410", priv: true},
    {user: "isoto.viajes", name: "Irene Soto", bio: "✈️ Agente de viajes\nAlicante", posts: 230, fol: "1.050", seg: "380", tiles: [["🏝️", 190], ["🗺️", 40], ["✈️", 210], ["🏔️", 200], ["🧳", 20], ["🌅", 30]]}
   ],
   pos: 1},
  bio: "🔬 Biología · UVal\n🐶 Voluntaria en la protectora\n📍 Valdemora", posts: 233, fol: "980", seg: "540",
  hl: [["🐶", "Protectora"], ["🔬", "Labo"], ["🌄", "Mi pueblo"], ["🧠", "Tests"]],
  feed: [
   {c: "R1", shot: ["card", {head: "QUIZMANIA", tag: "RESULTADO", color: "#b8399b", bg: "linear-gradient(135deg,#ffd1e8,#c9d6ff)", title: "¡Eres «La Sabia»! 🧙‍♀️", rows: [["Inteligencia", "98 %"], ["Valentía", "85 %"], ["Lealtad", "92 %"]], btn: "Descubre el tuyo con tu cuenta de Picto"}], date: "24 de octubre · 18:05", likes: 143, cap: "Jajaja me ha salido «La Sabia» 🧙‍♀️ ¡Haced el test y decidme qué os sale! 👇", cm: [["pablo_r", "A mí El Detective 🔍"], ["elena.rios", "Voy a probar"]]},
   {c: "R2", img: "irene-1", ph: ["🐶", "Perro en la protectora"], date: "19 de octubre · 13:40", likes: 260, cap: "Mis sábados en la protectora 🐶 Este es Toby y busca familia", cm: [["luis.pardo", "Toby es un amor ❤️"]]},
   {c: "R3", img: "irene-2", ph: ["🌄", "Paisaje de un pueblo"], date: "12 de octubre · 19:20", likes: 198, cap: "De vuelta a Riomayor, el pueblo donde nací 🌄 Nada como estar en casa", cm: [["mamá_irene", "¡Qué bien tenerte aquí, hija!"]]},
   {c: "R4", shot: ["perm", {app: "QuizMania", perms: ["Ver tu perfil y tus fotos", "Leer tus mensajes privados", "Enviar mensajes en tu nombre", "Ver tu lista de contactos"]}], date: "24 de octubre · 18:02", likes: 0, cap: "Para ver el resultado había que darle a «Permitir». Ni lo leí 🙈", cm: []},
   {c: "R5", img: "irene-3", ph: ["🔬", "Microscopio de laboratorio"], date: "8 de octubre · 11:00", likes: 175, cap: "Prácticas de laboratorio 🔬 Me encanta esta asignatura", cm: []},
   {c: "R6", shot: ["story", {bg: "linear-gradient(160deg,#c0392b,#5e1b14)", text: "¡NO abráis el enlace! ⚠️", sub: "Si os ha llegado un mensaje mío diciendo «¡Mira este vídeo donde sales tú! 😱 quizmania-video.win», NO lo he enviado yo 😭", foot: "Historia · 25 de octubre, 10:30"}], date: "25 de octubre · 10:30", likes: 0, cap: "", cm: [["pablo_r", "A mí me llegó ayer, menos mal que no lo abrí"]]}
  ],
  priv: {c: "R7", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Siempre"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Verificación en dos pasos", "Sí"], ["Aplicaciones conectadas", "1 (QuizMania)"]]}
 },

 files: [
  {c: "A1", name: "irene-1.jpg", kind: "jpg", ph: ["🐶", "Perro en la protectora"], note: "Foto original de la publicación R2"},
  {c: "A2", name: "irene-3.jpg", kind: "jpg", ph: ["🔬", "Microscopio de laboratorio"], note: "Foto original de la publicación R5"},
  {c: "A3", name: "trabajo_genetica.docx", kind: "docx", props: [["Título", "Trabajo de Genética · 2.º de Biología"], ["Autor", "Irene Soto Lara"], ["Organización", "Universidad de Valdemora"], ["Modificado", "21/10/2026"]]}
 ],
 meta: {
  "irene-1.jpg": {make: "Xiaomi", model: "Redmi Note 14", date: "19/10/2026 13:31:55", gps: [39.41800, -13.20800]},
  "irene-3.jpg": {make: "Xiaomi", model: "Redmi Note 14", date: "08/10/2026 10:52:18", gps: [39.40800, -13.21800]}
 },

 acc: [
  {c: "C1", svc: "Picto", ic: "📸", id: "@irene.soto_bio", kv: [["Verificación en dos pasos", "Activada (SMS)"], ["Aplicaciones conectadas", "QuizMania · ver perfil, leer mensajes, enviar mensajes en tu nombre, ver contactos"], ["Contraseña cambiada", "05/01/2026"]], act: [["24/10 18:02", "Permisos concedidos a QuizMania", 1], ["24/10 18:30", "QuizMania envió 182 mensajes privados a tus contactos", 1], ["25/10 09:00", "QuizMania envió 96 mensajes más", 1]]},
  {c: "C2", svc: "Valmail", ic: "✉️", id: "irene.soto@valmail.es", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "26/10/2026"]], act: [["26/10 02:10", "Contraseña restablecida respondiendo a la pregunta de seguridad · Kiev (Ucrania)", 1], ["26/10 02:15", "Se han leído y borrado 40 correos", 1]]},
  {c: "C3", svc: "Campus UVal", ic: "🎓", id: "irene.soto@uvaldemora.es", kv: [["Verificación en dos pasos", "Activada"], ["Recuperación", "Secretaría"], ["Contraseña cambiada", "01/09/2026"]], act: [["27/10 09:00", "Inicio de sesión · biblioteca de la UVal"]]},
  {c: "C4", svc: "QuizMania", ic: "🧠", id: "Inicio de sesión con Picto", kv: [["Cuenta creada", "24/10/2026 · 18:02"], ["Forma de registro", "«Iniciar sesión con Picto»"], ["Datos que ha guardado", "Perfil, fotos, contactos y mensajes"]], act: [["24/10 18:03", "Test completado: «¿Qué personaje eres?»"]]}
 ],
 lab: {svc: "Valmail", user: "irene.soto@valmail.es", q: "¿En qué pueblo naciste?", hash: "9w3qex"}
};
