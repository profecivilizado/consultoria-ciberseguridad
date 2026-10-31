/* Expediente 003 · Dani Ortega
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.dani = {
 no: "003", name: "Dani Ortega", short: "Dani", age: 21,
 study: "2.º de DAM (Desarrollo de Aplicaciones Multiplataforma)",
 nick: "dani0rtega", picto: "dani.0rtega.gg", h: 230,
 hook: "Le llegan códigos de verificación que no ha pedido y su correo registra un acceso desde otro país.",
 situation: "Dani lleva días recibiendo códigos de verificación que él no ha pedido, y su correo muestra un inicio de sesión desde Ámsterdam. Él no le da importancia: «no tengo nada que puedan robarme».",

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
   {c: "H3", u: "gamerzone-foro.net › 2016 › futbol-sala", t: "¡El CEIP San Martín campeón de fútbol sala! — GamerZone Foro (2016)",
    s: "dani0rtega · «Somos los mejores!! Dani, 6.º B»",
    page: `<div class="sh">GamerZone Foro · Off-topic (2016)</div><div class="q"><b>dani0rtega</b> · 14 de mayo de 2016
¡¡El CEIP San Martín campeón de fútbol sala!! Somos los mejores 🏆
Dani, 6.º B</div><p class="small">Foro cerrado en 2019. El contenido sigue indexado.</p>`}
  ]},
 log: {c: "H4", rows: [["Servicio", "StreamZone (sesión propia de Dani)"], ["Fecha", "22/10/2026 · 00:12"], ["Dirección IP", "88.14.90.xxx (Valdenet Fibra)"], ["Ubicación aproximada", "Valdemora, España"], ["Dispositivo", "PC-DANI-STREAM · Windows 11 · OBS Studio"], ["Cookies de terceros", "22 (publicidad: hardware, apuestas deportivas, bebidas energéticas)"], ["Perfil publicitario deducido", "Gamer · 18-24 años · gasto alto en tecnología"]]},

 /* ---------- Misión 1 · Picto ---------- */
 pic: {
  bio: "🎮 Streamer de andar por casa\n💙 Fan del Valdemora CF\n🔴 Directos martes y jueves 22:00", posts: 498, fol: "3.104", seg: "301",
  hl: [["🔴", "Directos"], ["🐺", "Thor"], ["⚽", "VCF"], ["🖥️", "Setup"]],
  feed: [
   {c: "R1", shot: ["notif"], date: "27 de octubre · 23:58", likes: 212, cap: "Si me llega otro código más me da algo 😤", cm: [["rubenx", "Eso no es normal bro"], ["dani.0rtega.gg", "Será un bug, paso"]]},
   {c: "R2", shot: ["stream"], date: "22 de octubre · 00:15", likes: 540, cap: "Gracias por los 3.000 🙏 Os espero en la comunidad", cm: [["moddeado", "Imparables 🔥"]]},
   {c: "R3", img: "dani-1", ph: ["🖥️", "Escritorio gamer"], date: "20 de octubre · 19:30", likes: 611, cap: "Setup terminado 🔥 Después de 2 años ahorrando", cm: [["rubenx", "¿Cuánto te ha costado todo? 😍"], ["dani.0rtega.gg", "Unos 3.000 pavos 💸"]]},
   {c: "R4", img: "dani-2", ph: ["🐺", "Husky en el sofá"], date: "14 de octubre · 18:00", likes: 420, cap: "Thor cumple 9 años, mi compañero de directos 🐺", cm: []},
   {c: "R5", img: "dani-3", ph: ["⚽", "Bufanda en la grada"], date: "5 de octubre · 17:45", loc: "Estadio Municipal de Valdemora", likes: 233, cap: "Mi número de siempre, el 5 💙 Socio del Valdemora CF desde que nací (2005)", cm: []},
   {c: "R6", shot: ["quiz"], date: "25 de septiembre · 21:00", likes: 188, cap: "Retito rápido, a ver quién se anima 👇", cm: [["dani.0rtega.gg", "CEIP San Martín y Thor, obvio"], ["rubenx", "Los Pinos y Coco"]]},
   {c: "R7", img: "dani-4", ph: ["🎮", "Pantalla de un videojuego"], date: "30 de septiembre · 22:10", likes: 156, cap: "Recomendación: este indie es una joya 🎮 10/10", cm: [["moddeado", "Me lo apunto"]]},
   {c: "R8", shot: ["old", {ctx: "Publicación de @dani.0rtega.gg en 2021, sigue visible", text: "«Las chicas no saben jugar a esto, que se vuelvan a los juegos de móvil 🤡»", date: "11 de febrero de 2021", rep: ["xX_lu_Xx (2026): Y este quiere ser streamer… 💀", "noe_vld (2026): Captura hecha 📸"]}], date: "11 de febrero de 2021", likes: 34, cap: "", cm: []}
  ],
  priv: {c: "R9", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Solo si la añado"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Verificación en dos pasos", "No"], ["Publicaciones antiguas archivadas", "Ninguna"]]}
 },

 /* ---------- Misión 1 · Archivos ---------- */
 files: [
  {c: "A1", name: "dani-1.jpg", kind: "jpg", ph: ["🖥️", "Escritorio gamer"], note: "Foto original de la publicación R3"},
  {c: "A2", name: "memoria_proyecto_DAM.docx", kind: "docx", props: [["Título", "Memoria · Tienda online"], ["Autor", "Daniel Ortega Ruiz"], ["Organización", "IES Valdemora"], ["Último en guardar", "PC-SALA-INFO-07"], ["Modificado", "08/10/2026"], ["Comentario oculto", "«la contraseña de la BD está en config.txt»"]]},
  {c: "A3", name: "clip_directo_3000.mp4", kind: "mp4", props: [["Duración", "00:00:42"], ["Creado", "22/10/2026 · 00:12"], ["Software", "OBS Studio 31"], ["Equipo", "PC-DANI-STREAM"], ["Ubicación (GPS)", "No contiene"]]}
 ],
 meta: {
  "dani-1.jpg": {make: "Apple", model: "iPhone de Daniel Ortega", date: "20/10/2026 19:27:33", gps: [39.41000, -13.21700]}
 },

 /* ---------- Misión 2 · Cuentas ---------- */
 acc: [
  {c: "C1", svc: "Valmail", ic: "✉️", id: "dani.ortega.2005@valmail.es", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "08/01/2022"]], act: [["27/10 23:52", "Inicio de sesión correcto · Ámsterdam (Países Bajos) · Firefox/Linux", 1], ["27/10 23:55", "Nueva regla: reenviar todos los correos a dani-backup@mailfast.net", 1], ["28/10 09:10", "Inicio de sesión · Valdemora · iPhone"]]},
  {c: "C2", svc: "StreamZone", ic: "🔴", id: "dani0rtega", kv: [["Verificación en dos pasos", "Activada (SMS)"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "08/01/2022"]], act: [["27/10 23:56", "Contraseña correcta · Ámsterdam · Bloqueado: código no introducido", 1], ["27/10 23:57", "Segundo intento · Bloqueado", 1], ["27/10 23:58", "Tercer intento · Bloqueado", 1]]},
  {c: "C3", svc: "Picto", ic: "📸", id: "@dani.0rtega.gg", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Correo electrónico (Valmail)"], ["Contraseña cambiada", "02/04/2023"]], act: [["27/10 23:58", "Inicio de sesión · Valdemora · iPhone"]]},
  {c: "C4", svc: "CodeHub", ic: "🧑‍💻", id: "dani0rtega", kv: [["Verificación en dos pasos", "Desactivada"], ["Repositorios públicos", "3"], ["Contraseña cambiada", "08/01/2022"]], act: [["08/10 12:40", "Cambio subido: «subo config para que funcione en clase»"]]}
 ],
 lab: {svc: "Valmail", user: "dani.ortega.2005@valmail.es", q: "¿Cuál fue el nombre de tu primer colegio?", hash: "t853jo"},

 /* ---------- Misión 3 · Bandeja ---------- */
 inbox: [
  {c: "M1", ch: "Correo", ic: "🔐", name: "Seguridad de la cuenta", addr: "no-reply@valmail-seguridad.net", sub: "Inicio de sesión detectado", txt: "Hemos detectado un inicio de sesión en tu cuenta desde un dispositivo nuevo (Ámsterdam, Países Bajos).\n\nSi no fuiste tú, responde a este correo con el código de verificación que te acabamos de enviar por SMS y bloquearemos el acceso."},
  {c: "M2", ch: "Mensaje directo", ic: "🎁", name: "Mod_Oficial_StreamZone", addr: "@mod_oficial_streamzone · cuenta no verificada · creada hace 2 días", sub: "Regalo por los 3.000", txt: "Ey Dani! Desde el equipo de StreamZone te regalamos 1 año de StreamZone Prime por llegar a 3.000 seguidores 🎉 Solo tienes que iniciar sesión aquí:", link: ["streamzone-prime-gift.com/claim", "http://streamzone-prime-gift.com/claim"]},
  {c: "M3", ch: "Correo", ic: "🔴", name: "StreamZone", addr: "seguridad@streamzone.tv", sub: "Hemos bloqueado un intento de acceso", txt: "Hola, dani0rtega:\n\nAlguien ha introducido tu contraseña correcta desde Ámsterdam (Países Bajos). Hemos bloqueado el acceso porque no se introdujo el código de verificación.\n\nTe recomendamos cambiar tu contraseña desde la app. Nunca te pediremos el código por correo ni por mensaje."},
  {c: "M4", ch: "WhatsApp", ic: "💬", name: "Rubén", addr: "Rubén (contacto guardado)", sub: "¿Directo esta noche?", txt: "Ey, ¿hay directo esta noche o lo dejas para el jueves? Que me conecto 🎮"}
 ],

 /* ---------- Misión 4 · Bienestar ---------- */
 wb: {days: [6.2, 9.4, 5.8, 9.9, 7.5, 8.8, 7.1], week: "Semana del 20 al 26 de octubre",
  apps: [["StreamZone", 190], ["PlayArena", 140], ["Chatterly", 90], ["Picto", 50], ["YouTube", 45]],
  tiles: [["B3", "2 h 40 min", "de uso al día entre las 00:00 y las 07:00"], ["B4", "410 · 0", "notificaciones al día · notificaciones silenciadas"], ["B5", "4", "faltas a primera hora (8:15) en octubre"]]}
};
