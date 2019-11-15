var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "img/img1.jpg";
imgArray[1] = new Image();
imgArray[1].src = "img/img2.jpg";
imgArray[2] = new Image();
imgArray[2].src = "img/img3.jpg";
imgArray[3] = new Image();
imgArray[3].src = "img/img4.jpg";
imgArray[4] = new Image();
imgArray[4].src = "img/img5.jpg";
imgArray[5] = new Image();
imgArray[5].src = "img/img6.jpg";
imgArray[6] = new Image();
imgArray[6].src = "img/img7.jpg";
imgArray[7] = new Image();
imgArray[7].src = "img/img8.jpg";
imgArray[8] = new Image();
imgArray[8].src = "img/img9.jpg";
imgArray[9] = new Image();
imgArray[9].src = "img/img10.jpg";

var numeros = [];
var lugar;

function iniciar() {
  lugar = 0;
  document.getElementById("image").disabled = false;
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ranNums = [];
  (i = nums.length), (j = 0);
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  for (var n = 0; n < 5; n++) numeros[n] = ranNums[n];
  desactivarAnterior();
  ActivarSiguiente();
  document.getElementById("image").src = imgArray[numeros[lugar]].src;
}

function siguiente() {
  if (lugar < 4) {
    ActivarAnterior();
    lugar++;
    document.getElementById("image").src = imgArray[numeros[lugar]].src;
  }
  if (lugar == 4) {
    desactivarSiguiente();
  }
  console.log(lugar);
}

function anterior() {
  if (lugar > 0) {
    ActivarSiguiente();
    lugar--;
    document.getElementById("image").src = imgArray[numeros[lugar]].src;
  }
  if (lugar == 0) {
    desactivarAnterior();
  }
  console.log(lugar);
}

function desactivarAnterior() {
  document.getElementById("left").disabled = true;
  document.getElementById("left").style.color = "rgb(83, 81, 81)";
  document.getElementById("left").style.background =
    " rgb(170, 165, 165)";
  document.getElementById("left").style.border = "2px solid #ffffff";
}

function ActivarAnterior() {
  document.getElementById("left").disabled = false;
  document.getElementById("left").style.color = "rgb(255, 255, 255)";
  document.getElementById("left").style.background = "#1883ba";
  document.getElementById("left").style.border = "2px solid #999";
}

function desactivarSiguiente() {
  document.getElementById("right").disabled = true;
  document.getElementById("right").style.color = "rgb(83, 81, 81)";
  document.getElementById("right").style.background =
    " rgb(170, 165, 165)";
  document.getElementById("right").style.border = "2px solid #ffffff";
}

function ActivarSiguiente() {
  document.getElementById("right").disabled = false;
  document.getElementById("right").style.color = "rgb(255, 255, 255)";
  document.getElementById("right").style.background = "#1883ba";
  document.getElementById("right").style.border = "2px solid #999";
}
