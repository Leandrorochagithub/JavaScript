function carregar() {
  var msg = document.getElementById("msg");
  var Img = document.getElementById("foto");
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  msg.innerHTML = `São ${hora} horas e ${min}minutos.`;

  if (hora >= 0 && hora < 12) {
    Img.src="manha.jpg"
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    Img.src="tarde.jpg"
    document.body.style.background = "#b9846f";
    img.src = "tarde.jpg";
  } else {
    Img.src="noite.jpg"
    document.body.style.background = "#515154";
    img.src = "noite.jpg";
  }
}
