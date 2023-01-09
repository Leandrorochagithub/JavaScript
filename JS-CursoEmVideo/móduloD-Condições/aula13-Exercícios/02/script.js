function verificar() {
  let today = new Date();
  let ano = today.getFullYear();
  let nascimento = document.getElementById("data");
  let result = document.getElementById("result");
  if (nascimento.value == 0 || nascimento.value >= ano) {
    alert(`[ERRO] Verifique os dados e tente novamente`);
  } else {
    let sexo = document.getElementsByName("opcao");
    let idade = ano - Number(nascimento.value);
    let genero = " ";
    if (sexo[0].checked) {
      genero = "Homem";
    }
    if (sexo[1].checked){
      genero = "Mulher";
    }
    if (sexo[2].checked){
      genero = "gênero não especificado";
    }
    result.innerHTML = `Detectamos ${genero} com ${idade} anos !`;
  }
  }
