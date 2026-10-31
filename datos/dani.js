/* Expediente 002 · Dani Ortega
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.dani = {
 no: "002", name: "Dani Ortega", short: "Dani", age: 21,
 study: "2.º de DAM (Desarrollo de Aplicaciones Multiplataforma)",
 nick: "dani0rtega", picto: "dani.0rtega.gg", h: 230,
 hook: "Le llegan códigos de verificación que no ha pedido y su correo registra un acceso desde otro país.",
 situation: "Dani lleva días recibiendo códigos de verificación que él no ha pedido, y su correo muestra un inicio de sesión desde Ámsterdam. Él no le da importancia: «no tengo nada que puedan robarme».",

 /* ---------- Preguntas guiadas de cada herramienta ---------- */
 preg: {
  cybersearch: [
   "Busca <b>dani0rtega</b>. ¿Cuántos resultados aparecen? Abre cada uno.",
   "<b>H1</b> · ¿Qué días y a qué horas hace directos Dani? ¿Cuánto dice que vale su equipo?",
   "<b>H2</b> · Abre el archivo config.txt. ¿Qué datos aparecen? ¿Por qué es tan grave que esté en un repositorio público?",
   "<b>H3</b> · Es un mensaje de 2016. ¿A qué colegio iba Dani? Apúntalo: lo necesitarás en la misión 2.",
   "<b>H4</b> · El registro técnico recoge datos sin que Dani los publique. Escribe tres. ¿Es huella digital activa o pasiva?"],
  picto: [
   "Busca a Dani en Picto. Aparecen varias cuentas: ¿cuál es la suya? Escribe <b>dos datos</b> que te lo confirmen (piensa en lo que viste en CyberSearch).",
   "<b>R4</b> · ¿Cómo se llama su perro?",
   "<b>R5</b> · Dani empezó a patinar en 2017 con 12 años. ¿En qué año nació? ¿Dónde se le puede encontrar los domingos?",
   "Compara lo que has encontrado en R4 y R5 con la contraseña de <b>H2</b>. ¿Qué observas?",
   "<b>R6</b> · ¿Qué responde Dani al reto? ¿Por qué es peligroso contestar a este tipo de juegos?",
   "<b>R1</b> · ¿Qué le está llegando al móvil? ¿Qué hace Dani al respecto?",
   "<b>R3</b> · ¿Cuánto dice que le ha costado su equipo? ¿Qué riesgo tiene publicarlo?",
   "<b>R7</b> · ¿Esta publicación supone algún riesgo?",
   "<b>R8</b> · Mira los ajustes de privacidad. ¿Qué dos ajustes cambiarías primero?"],
  archivos: [
   "<b>A1</b> · Es la foto original de R3. ¿Tiene coordenadas GPS? ¿Qué lugar marca el mapa?",
   "<b>A1</b> · ¿Qué nombre tiene el móvil con el que se hizo la foto? ¿Qué revela?",
   "<b>A2</b> · ¿Qué dicen las propiedades del documento sobre su autor y el ordenador donde se guardó?",
   "<b>A3</b> · ¿Este vídeo revela algún dato sensible?"],
  cuentas: [
   "¿En qué cuentas tiene Dani activada la verificación en dos pasos?",
   "Mira la fecha de «Contraseña cambiada» de <b>C1</b>, <b>C2</b> y <b>C4</b>. ¿Qué tienen en común? ¿Qué contraseña crees que es? (recuerda H2)",
   "<b>C1</b> · ¿Desde dónde entraron en el correo de Dani y qué hicieron después? ¿Por qué es tan peligroso?",
   "<b>C2</b> · En StreamZone, el atacante tenía la contraseña correcta. ¿Por qué no pudo entrar? Relaciónalo con R1.",
   "<b>C3</b> · ¿Cómo se recupera la cuenta de Picto? Si el atacante controla el correo, ¿qué podría hacer?",
   "Haz la <b>prueba de recuperación</b> de Valmail con lo que apuntaste en H3 o R6. ¿Lo has conseguido?",
   "Completa: «El atacante consiguió la contraseña de Dani en ___ y pudo entrar en su correo porque ___»."]
 },

 /* ---------- Misión 1 · CyberSearch ---------- */
 search: {
  q: ["dani0rtega", "dani ortega", "daniel ortega", "dani.0rtega.gg", "dani.ortega.2005@valmail.es"],
  res: [
   {c: "H1", u: "streamzone.tv › dani0rtega", t: "dani0rtega — Canal de StreamZone",
    s: "3.104 seguidores · Horario: martes y jueves de 22:00 a 02:00 · Comunidad: chatterly.gg/thor2005",
    page: `<div class="sh">StreamZone · dani0rtega</div><table><tr><td>Horario</td><td>Martes y jueves · 22:00–02:00</td></tr><tr><td>Comunidad</td><td>chatterly.gg/thor2005</td></tr><tr><td>Equipo</td><td>«PC montado por mí, 3.000 € de setup»</td></tr><tr><td>Ciudad</td><td>Valdemora</td></tr></table>`},
   {c: "H2", u: "codehub.dev › dani0rtega › proyecto-dam-tienda › config.txt", t: "proyecto-dam-tienda/config.txt · CodeHub",
    s: "Repositorio público · «subo config para que funcione en clase» · db_user=daniortega · db_password=…",
    page: `<div class="sh">CodeHub · dani0rtega/proyecto-dam-tienda</div><p class="small">Repositorio público · último cambio el 08/10/2026 · «subo config para que funcione en clase»</p><pre># Configuración de la base de datos
db_host=localhost
db_user=daniortega
db_password=Thor_2005!
admin_email=dani.ortega.2005@valmail.es</pre>`},
   {c: "H3", u: "gamerzone-foro.net › 2016 › concurso-robotica", t: "¡El CEIP San Martín gana el concurso de robótica! — GamerZone Foro (2016)",
    s: "dani0rtega · «Somos los mejores!! Dani, 6.º B»",
    page: `<div class="sh">GamerZone Foro · Off-topic (2016)</div><div class="q"><b>dani0rtega</b> · 14 de mayo de 2016
¡¡Mi cole, el CEIP San Martín, ha ganado el concurso de robótica de Valdemora!! Somos los mejores 🤖🏆
Dani, 6.º B</div><p class="small">Foro cerrado en 2019. El contenido sigue indexado.</p>`}
  ]},
 log: {c: "H4", rows: [["Servicio", "StreamZone (sesión propia de Dani)"], ["Fecha", "22/10/2026 · 00:12"], ["Dirección IP", "88.14.90.xxx (Valdenet Fibra)"], ["Ubicación aproximada", "Valdemora, España"], ["Dispositivo", "PC-DANI-STREAM · Windows 11 · OBS Studio"], ["Cookies de terceros", "22 (publicidad: hardware, skate, bebidas energéticas)"], ["Perfil publicitario deducido", "Gamer · 18-24 años · gasto alto en tecnología"]]},

 /* ---------- Misión 1 · Picto ---------- */
 pic: {
  search: {
   q: ["dani", "ortega", "dani ortega", "daniel ortega", "dani0rtega", "dani.0rtega.gg"],
   decoys: [
    {user: "daniortega_fit", name: "Daniel Ortega", bio: "💪 Entrenador personal\nMálaga · Clases online", posts: 512, fol: "8.430", seg: "290", tiles: [["🏋️", 10], ["🥗", 120], ["💪", 340], ["🏃", 200], ["🍎", 0], ["⏱️", 220]]},
    {user: "dani_ortega10", name: "Dani O.", bio: "Zaragoza", posts: 61, fol: "340", seg: "512", priv: true},
    {user: "d.ortega.photo", name: "Daniel Ortega", bio: "📷 Fotografía de paisaje\nBilbao", posts: 233, fol: "1.980", seg: "640", tiles: [["🏔️", 210], ["🌊", 190], ["🌲", 120], ["🌄", 30]]}
   ],
   pos: 2},
  bio: "🎮 Streamer de andar por casa\n🛹 Skater desde los 12\n🔴 Directos martes y jueves 22:00 · Valdemora", posts: 498, fol: "3.104", seg: "301",
  hl: [["🔴", "Directos"], ["🐺", "Thor"], ["🛹", "Skate"], ["🖥️", "Setup"]],
  feed: [
   {c: "R1", shot: ["notif"], date: "27 de octubre · 23:58", likes: 212, cap: "Si me llega otro código más me da algo 😤", cm: [["rubenx", "Eso no es normal bro"], ["dani.0rtega.gg", "Será un bug, paso"]]},
   {c: "R2", shot: ["stream"], date: "22 de octubre · 00:15", likes: 540, cap: "Gracias por los 3.000 🙏 Os espero en la comunidad", cm: [["moddeado", "Imparables 🔥"]]},
   {c: "R3", img: "dani-1", ph: ["🖥️", "Escritorio gamer"], date: "20 de octubre · 19:30", likes: 611, cap: "Setup terminado 🔥 Después de 2 años ahorrando", cm: [["rubenx", "¿Cuánto te ha costado todo? 😍"], ["dani.0rtega.gg", "Unos 3.000 pavos 💸"]]},
   {c: "R4", img: "dani-2", ph: ["🐺", "Husky cachorro"], date: "14 de octubre · 18:00", likes: 420, cap: "Así era Thor de cachorro 🐺 Hoy cumple 9 años, mi compañero de directos", cm: [["rubenx", "¡Qué bicho más bonito! Felicidades, Thor"]]},
   {c: "R5", img: "dani-3", ph: ["🛹", "Skatepark"], date: "5 de octubre · 17:45", loc: "Skatepark del Río, Valdemora", likes: 233, cap: "Mi sitio de siempre 🛹 Patinando aquí desde 2017, cuando tenía 12 años", cm: [["moddeado", "Los domingos por la tarde siempre está ahí jajaja"]]},
   {c: "R6", shot: ["quiz"], date: "25 de septiembre · 21:00", likes: 188, cap: "Retito rápido, a ver quién se anima 👇", cm: [["dani.0rtega.gg", "CEIP San Martín y Thor, obvio"], ["rubenx", "Los Pinos y Coco"]]},
   {c: "R7", img: "dani-4", ph: ["🎮", "Consola portátil"], date: "30 de septiembre · 22:10", likes: 156, cap: "Unas partidas en el sofá antes del directo 🎮", cm: [["moddeado", "Esta noche te reviento 😂"]]}
  ],
  priv: {c: "R8", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Solo si la añado"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Verificación en dos pasos", "No"], ["Revisar etiquetas antes de publicarlas", "No"]]}
 },

 /* ---------- Misión 1 · Archivos ---------- */
 files: [
  {c: "A1", name: "dani-1.jpg", kind: "jpg", ph: ["🖥️", "Escritorio gamer"], note: "Foto original de la publicación R3"},
  {c: "A2", name: "memoria_proyecto_DAM.docx", kind: "docx", props: [["Título", "Memoria · Tienda online"], ["Autor", "Daniel Ortega Ruiz"], ["Organización", "IES Valdemora"], ["Ordenador", "PC-SALA-INFO-07"], ["Modificado", "08/10/2026"]]},
  {c: "A3", name: "clip_directo_3000.mp4", kind: "mp4", props: [["Duración", "00:00:42"], ["Creado", "22/10/2026 · 00:12"], ["Software", "OBS Studio 31"], ["Ubicación (GPS)", "No contiene"]]}
 ],
 meta: {
  "dani-1.jpg": {make: "Apple", model: "iPhone de Daniel Ortega", date: "20/10/2026 19:27:33", gps: [39.41000, -13.21700]}
 },

 /* ---------- Misión 2 · Cuentas ---------- */
 acc: [
  {c: "C1", svc: "Valmail", ic: "✉️", id: "dani.ortega.2005@valmail.es", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "08/01/2022"]], act: [["27/10 23:52", "Inicio de sesión correcto · Ámsterdam (Países Bajos) · Firefox/Linux", 1], ["27/10 23:55", "Nueva regla: reenviar todos los correos a dani-backup@mailfast.net", 1], ["28/10 09:10", "Inicio de sesión · Valdemora · iPhone"]]},
  {c: "C2", svc: "StreamZone", ic: "🔴", id: "dani0rtega", kv: [["Verificación en dos pasos", "Activada (SMS)"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "08/01/2022"]], act: [["27/10 23:56", "Contraseña correcta · Ámsterdam · Bloqueado: código SMS no introducido", 1], ["27/10 23:57", "Segundo intento · Bloqueado", 1], ["27/10 23:58", "Tercer intento · Bloqueado", 1]]},
  {c: "C3", svc: "Picto", ic: "📸", id: "@dani.0rtega.gg", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Enlace al correo (Valmail)"], ["Contraseña cambiada", "02/04/2023"]], act: [["27/10 23:58", "Inicio de sesión · Valdemora · iPhone"]]},
  {c: "C4", svc: "CodeHub", ic: "🧑‍💻", id: "dani0rtega", kv: [["Verificación en dos pasos", "Desactivada"], ["Repositorios públicos", "3"], ["Contraseña cambiada", "08/01/2022"]], act: [["08/10 12:40", "Archivo subido: config.txt («subo config para que funcione en clase»)"]]}
 ],
 lab: {svc: "Valmail", user: "dani.ortega.2005@valmail.es", q: "¿Cuál fue el nombre de tu primer colegio?", hash: "t853jo"}
};
