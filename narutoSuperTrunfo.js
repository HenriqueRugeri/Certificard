var carta1 = {
  imagem:
    "https://th.bing.com/th/id/OIP._CekmDNPAueKP4asy78UUAHaFb?rs=1&pid=ImgDetMain",
  nome: "Naruto",
  atributos: {
    forca: 7,
    defesa: 6,
    jutsu: 9
  }
};

var carta2 = {
  imagem:
    "https://th.bing.com/th/id/R.d5e3a5babf756246e5bd99296baeee36?rik=xGTQ9v3Gti99jA&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20120401210250%2fnaruto%2fpt-br%2fimages%2ff%2fff%2fSasuke.png&ehk=2fsRvmG%2f8B9JpfLL9ct4P8KZkG38HxZPvf9Bi60rdIE%3d&risl=&pid=ImgRaw&r=0",
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