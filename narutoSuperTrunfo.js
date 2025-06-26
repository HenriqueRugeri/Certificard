var carta1 = {
  imagem:
    "https://scontent.fbfh12-1.fna.fbcdn.net/v/t1.6435-9/42309706_282426699038214_8074346527146901504_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=cWi1DCrjyVkAX8F6YPF&_nc_ht=scontent.fbfh12-1.fna&oh=00_AT9cqgcyIlECNfxnTUmJ2fPpQVtceMOwTnAWH4Od6BLRVQ&oe=63478B1C",
  nome: "Naruto",
  atributos: {
    forca: 7,
    defesa: 6,
    jutsu: 9
  }
};

var carta2 = {
  imagem:
    "https://scontent.fbfh12-1.fna.fbcdn.net/v/t1.6435-9/93771980_2826520024130288_2634840295816036352_n.jpg?stp=cp0_dst-jpg_e15_q65_s480x480&_nc_cat=102&ccb=1-7&_nc_sid=7aed08&_nc_ohc=OqKfz-mRCy8AX_mGPxQ&_nc_ht=scontent.fbfh12-1.fna&oh=00_AT_Gg61oV04tgVhgcvkMMeGw0mMSDzkzLWLO2fDFkr74zw&oe=6349D3ED",
  nome: "Sasuke",
  atributos: {
    forca: 5,
    defesa: 10,
    jutsu: 8
  }
};

var carta3 = {
  imagem:
    "https://pm1.narvii.com/6520/c5e1c4fac64e805f0aab627c91c913de6533d9f3_hq.jpg",
  nome: "Madara",
  atributos: {
    forca: 8,
    defesa: 10,
    jutsu: 10
  }
};

var carta4 = {
  imagem: "https://images3.alphacoders.com/647/647522.jpg",
  nome: "Obito",
  atributos: {
    forca: 7,
    defesa: 7,
    jutsu: 10
  }
};

var carta5 = {
  imagem:
    "https://i.pinimg.com/originals/32/6f/12/326f124a6ac50ae4dd12c7cc33017176.jpg",
  nome: "Hashirama",
  atributos: {
    forca: 9,
    defesa: 10,
    jutsu: 9
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  cartaJogador = cartas[numeroCartaJogador];
  while (cartaMaquina == cartaJogador) {
    parseInt(Math.random() * 5);
  }
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!";

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "Você perdeu";

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
  } else {
    elementoResultado.innerHTML = "Empatou!";

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
  }
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name= 'atributo' value= '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name= 'atributo' value= '" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  sortearCarta();
}