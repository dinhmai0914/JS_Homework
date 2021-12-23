var inputNumberEl = document.getElementById("inputNumber");

var KetQuaEl = document.getElementById("ketQua");

function Xuly() {
  var Number = parseInt(inputNumberEl.value);
  var Number1 = Number % 10;
  var Number2 = Number / 10;
  Number2 = Math.floor(Number2);
  var ketQua = Number1 + Number2;
  var resutlString = " Tổng 2 ký số là: " + ketQua;
  KetQuaEl.innerText = resutlString;
}
