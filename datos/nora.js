/* Expediente 003 · Nora Vidal
   Todo el contenido del personaje está aquí. Se puede editar sin tocar el código. */
window.CASOS = window.CASOS || {};
CASOS.nora = {
 no: "003", name: "Nora Vidal", short: "Nora", age: 19,
 study: "1.º de Bellas Artes (Universidad de Valdemora)",
 nick: "noravidal.art", picto: "noravidal.art", h: 320,
 hook: "Su cuenta de Picto ha publicado sorteos falsos que ella no ha hecho, y algunos seguidores han perdido dinero.",
 situation: "El 28 de octubre, de madrugada, la cuenta de Picto de Nora publicó una historia con un «sorteo» que pedía dinero por Bizum. Varios seguidores pagaron. Nora no ha publicado nada de eso y además ya no puede entrar en su tienda online. Dice que «no ha dado su contraseña a nadie».",

 preg: {
  cybersearch: [
   "Busca <b>noravidal.art</b>. ¿Cuántos resultados aparecen? Abre cada uno.",
   "<b>H1</b> · En su tienda de ArteMarket, ¿qué correo electrónico aparece? ¿Desde dónde envía los pedidos?",
   "<b>H2</b> · Según la noticia del concurso, ¿qué edad tiene Nora y en qué barrio vive?",
   "<b>H3</b> · ¿La noticia de la exposición supone algún riesgo? ¿Por qué?",
   "<b>H4</b> · El registro técnico recoge datos sin que Nora los publique. Escribe tres. ¿Es huella digital activa o pasiva?"],
  picto: [
   "Busca a Nora en Picto. Aparecen varias cuentas: ¿cuál es la suya? Escribe <b>dos datos</b> que te lo confirmen (piensa en lo que viste en CyberSearch).",
   "<b>R1</b> · ¿Qué tenía que hacer Nora para conseguir el premio del «sorteo»? ¿Qué datos metió en esa web?",
   "<b>R6</b> · ¿Qué se publicó desde su cuenta el 28 de octubre? ¿Lo publicó ella? Lee los comentarios: ¿a quién ha perjudicado?",
   "<b>R3</b> · ¿Qué datos se leen en la entrada del concierto? ¿Qué podría hacer otra persona con el código QR?",
   "<b>R4</b> · ¿Cómo se llama su primera mascota? Apúntalo: lo necesitarás en la misión 2.",
   "<b>R2</b> · ¿Dónde dice Nora que hay que hacer los encargos? Relaciónalo con H1.",
   "<b>R5</b> · ¿Esta publicación supone algún riesgo?",
   "<b>R7</b> · Mira los ajustes de privacidad. ¿Qué dos ajustes cambiarías primero?"],
  archivos: [
   "<b>A1</b> · Es la foto original de R2. ¿Tiene coordenadas GPS? ¿Qué lugar marca el mapa?",
   "<b>A1</b> · Junta A1 con H1 («envíos desde mi casa»). ¿Qué puede saber ahora un desconocido?",
   "<b>A2</b> · ¿Qué datos personales tiene la entrada en PDF?",
   "<b>A3</b> · ¿Esta ilustración revela algún dato sensible?"],
  cuentas: [
   "¿En qué cuentas tiene Nora activada la verificación en dos pasos?",
   "<b>C1</b> · ¿Desde dónde y cuándo entraron en Picto? ¿Qué cambió el atacante para que Nora no pudiera recuperar la cuenta?",
   "Relaciona la hora del primer acceso en C1 con la publicación R1. ¿Cómo consiguió el atacante la contraseña?",
   "Mira la fecha de «Contraseña cambiada» de <b>C1</b> y <b>C3</b>. ¿Qué tienen en común? ¿Qué significa?",
   "<b>C3</b> · ¿Qué hizo el atacante en ArteMarket? ¿Por qué es tan grave?",
   "<b>C2</b> · ¿Por qué el atacante no pudo entrar en su correo?",
   "Haz la <b>prueba de recuperación</b> de Valmail con lo que apuntaste en R4. ¿Lo has conseguido?",
   "Completa: «El atacante consiguió la contraseña de Nora con ___ y pudo entrar también en ArteMarket porque ___»."]
 },

 search: {
  q: ["noravidal.art", "nora vidal", "noravidal", "nora.vidal.art@valmail.es"],
  res: [
   {c: "H1", u: "artemarket.es › tienda › noravidal-art", t: "Nora Vidal Ilustración — Tienda en ArteMarket",
    s: "Láminas y encargos personalizados · Envíos desde mi casa en Valdemora · Contacto: nora.vidal.art@valmail.es",
    page: `<div class="sh">ArteMarket · Nora Vidal Ilustración</div><p>Láminas, pegatinas y retratos por encargo. ¡Gracias por apoyar el arte local! 🎨</p><table><tr><td>Envíos</td><td>Desde mi casa en Valdemora, en 48 horas</td></tr><tr><td>Contacto</td><td>nora.vidal.art@valmail.es</td></tr><tr><td>Ventas</td><td>214 pedidos · ⭐ 4,9</td></tr></table>`},
   {c: "H2", u: "valdemora.es › cultura › concurso-ilustra-2026", t: "Nora Vidal, ganadora del concurso Valdemora Ilustra 2026",
    s: "La joven de 19 años, vecina del barrio de San Roque, ganó con una ilustración de la ribera del río…",
    page: `<div class="sh">Ayuntamiento de Valdemora · Cultura</div><p>3 de junio de 2026. Nora Vidal, de 19 años y vecina del barrio de San Roque, ha ganado el concurso Valdemora Ilustra con una acuarela de la ribera del río. Su obra se expondrá en la biblioteca municipal durante el verano.</p>`},
   {c: "H3", u: "uvaldemora.es › bellas-artes › exposicion-primer-curso", t: "Exposición de primer curso de Bellas Artes",
    s: "…obras de 45 estudiantes, entre ellos Nora Vidal, Pablo Ruiz y Ana Gil. Hasta el 15 de diciembre…",
    page: `<div class="sh">Universidad de Valdemora · Bellas Artes</div><p>La Facultad presenta la exposición colectiva de primer curso, con obras de 45 estudiantes, entre ellos Nora Vidal, Pablo Ruiz y Ana Gil. Abierta hasta el 15 de diciembre.</p>`}
  ]},
 log: {c: "H4", rows: [["Servicio", "ArteMarket (sesión propia de Nora)"], ["Fecha", "20/10/2026 · 19:02"], ["Dirección IP", "81.33.12.xxx (Valdenet Fibra)"], ["Ubicación aproximada", "Valdemora, España"], ["Dispositivo", "iPad Air · iPadOS 19"], ["Cookies de terceros", "17 (publicidad: material de dibujo, concursos, conciertos)"], ["Perfil publicitario deducido", "Artista · 18-24 años · compra online frecuente"]]},

 pic: {
  search: {
   q: ["nora", "vidal", "nora vidal", "noravidal", "noravidal.art"],
   decoys: [
    {user: "nora.vidal", name: "Nora Vidal", bio: "⚖️ Abogada\nMadrid", posts: 310, fol: "1.204", seg: "380", tiles: [["⚖️", 220], ["☕", 30], ["📚", 200], ["🏙️", 210]]},
    {user: "noravidal_", name: "Nora V.", bio: "Granada", posts: 44, fol: "190", seg: "260", priv: true},
    {user: "nvidal.yoga", name: "Nora Vidal", bio: "🧘 Profesora de yoga\nCádiz", posts: 520, fol: "6.800", seg: "410", tiles: [["🧘", 150], ["🌊", 190], ["🌿", 120], ["☀️", 40], ["🕯️", 30], ["🌅", 20]]}
   ],
   pos: 2},
  bio: "🎨 Ilustradora · Bellas Artes UVal\n✏️ Encargos abiertos · tienda en ArteMarket\n📍 Valdemora", posts: 286, fol: "4.512", seg: "390",
  hl: [["🎨", "Encargos"], ["🐱", "Luna"], ["🎵", "Conciertos"], ["🏆", "Premios"]],
  feed: [
   {c: "R1", shot: ["story", {bg: "linear-gradient(160deg,#ff9a5a,#c2367b)", text: "¡He ganado un iPad! 😱", sub: "Solo tenía que entrar en premios-picto.win con mi usuario y contraseña de Picto para verificar que soy yo 🙌", foot: "Historia destacada · «Premios» · 27 de octubre, 20:05"}], date: "27 de octubre · 20:05", likes: 0, cap: "", cm: [["pabloruiz.art", "Nora, eso tiene pinta de timo… 😬"]]},
   {c: "R2", img: "nora-1", ph: ["🎨", "Mesa de dibujo"], date: "20 de octubre · 18:40", likes: 512, cap: "Encargos abiertos ✏️ Pedidos solo por mi tienda de ArteMarket, el enlace está en la bio", cm: [["ana.gil", "¡Quiero uno de mi perro!"]]},
   {c: "R3", shot: ["card", {head: "TICKETPLUS", tag: "ENTRADA", color: "#5b2a86", title: "Lumen · Gira 2026", rows: [["Titular", "NORA VIDAL"], ["Fecha", "15/11/2026 · 21:00"], ["Lugar", "Palacio de Valdemora"], ["Fila / asiento", "7 / 14"]], qr: true}], date: "18 de octubre · 12:30", likes: 230, cap: "¡¡Ya tengo mi entrada!! 🎵 Fila 7, nos vemos allí", cm: [["ana.gil", "¡Qué envidia!"]]},
   {c: "R4", img: "nora-2", ph: ["🐱", "Gata en una ventana"], date: "8 de octubre · 21:15", likes: 401, cap: "Luna, mi primera mascota 🐱 14 años conmigo", cm: [["pabloruiz.art", "La reina ❤️"]]},
   {c: "R5", img: "nora-3", ph: ["✏️", "Cuaderno de bocetos"], date: "28 de septiembre · 17:00", likes: 188, cap: "Domingo de bocetos ✏️", cm: []},
   {c: "R6", shot: ["story", {bg: "linear-gradient(160deg,#ffcf3a,#ff5a3a)", text: "🎁 SORTEO 500 €", sub: "Envía 5 € por Bizum al 611 000 931 y entras en el sorteo. ¡Solo hoy!", foot: "Historia · 28 de octubre, 03:10"}], date: "28 de octubre · 03:10", likes: 0, cap: "", cm: [["ana.gil", "¿Nora, esto es real?"], ["lucas_vld", "Yo ya he enviado los 5 € 😕"], ["marta.dib", "Y yo… ¿cuándo es el sorteo?"]]}
  ],
  priv: {c: "R7", rows: [["Cuenta", "Pública"], ["Mostrar ubicación en publicaciones", "Siempre"], ["Quién puede enviarte mensajes", "Cualquiera"], ["Verificación en dos pasos", "No"], ["Avisar de inicios de sesión nuevos", "No"]]}
 },

 files: [
  {c: "A1", name: "nora-1.jpg", kind: "jpg", ph: ["🎨", "Mesa de dibujo"], note: "Foto original de la publicación R2"},
  {c: "A2", name: "entrada_lumen.pdf", kind: "pdf", props: [["Título", "Entrada Lumen · Gira 2026"], ["Titular", "Nora Vidal"], ["Correo de compra", "nora.vidal.art@valmail.es"], ["Comprada", "01/10/2026"]]},
  {c: "A3", name: "retrato_encargo.png", kind: "png", props: [["Dimensiones", "3000 × 4000"], ["Software", "Procreate"], ["Creado", "19/10/2026"], ["Ubicación (GPS)", "No contiene"]]}
 ],
 meta: {
  "nora-1.jpg": {make: "Apple", model: "iPhone 13", date: "20/10/2026 18:31:07", gps: [39.40500, -13.20300]}
 },

 acc: [
  {c: "C1", svc: "Picto", ic: "📸", id: "@noravidal.art", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "15/02/2025"]], act: [["27/10 20:07", "Inicio de sesión correcto · Lagos (Nigeria) · navegador Chrome", 1], ["28/10 03:05", "Correo de recuperación cambiado a premios.nora@mailfast.net", 1], ["28/10 03:10", "Publicada la historia «SORTEO 500 €»", 1]]},
  {c: "C2", svc: "Valmail", ic: "✉️", id: "nora.vidal.art@valmail.es", kv: [["Verificación en dos pasos", "Activada (app)"], ["Recuperación", "Pregunta de seguridad"], ["Contraseña cambiada", "03/09/2026"]], act: [["28/10 03:20", "3 intentos con contraseña incorrecta · Lagos (Nigeria) · Bloqueado", 1], ["28/10 09:00", "Inicio de sesión · Valdemora · iPad"]]},
  {c: "C3", svc: "ArteMarket", ic: "🛍️", id: "noravidal-art", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "15/02/2025"]], act: [["28/10 03:30", "Inicio de sesión correcto · Lagos (Nigeria)", 1], ["28/10 03:32", "Cuenta bancaria para cobrar las ventas cambiada", 1]]},
  {c: "C4", svc: "TicketPlus", ic: "🎫", id: "nora.vidal.art@valmail.es", kv: [["Verificación en dos pasos", "Desactivada"], ["Recuperación", "Correo electrónico"], ["Contraseña cambiada", "01/10/2026"]], act: [["01/10 11:12", "Compra: 1 entrada Lumen · Gira 2026"]]}
 ],
 lab: {svc: "Valmail", user: "nora.vidal.art@valmail.es", q: "¿Cómo se llamaba tu primera mascota?", hash: "yiyd3n"}
};
