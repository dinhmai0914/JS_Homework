var inputnum1El = document.getElementById("inputnum1");
var inputnum2El = document.getElementById("inputnum2");
var inputnum3El = document.getElementById("inputnum3");
var inputnum4El = document.getElementById("inputnum4");
var inputnum5El = document.getElementById("inputnum5");
var KetQuaEl = document.getElementById("ketQua");

function tinhTrungBinhCong() {
  var num1 = parseInt(inputnum1El.value);
  var num2 = inputnum2El.value * 1;
  var num3 = inputnum3El.value * 1;
  var num4 = inputnum4El.value * 1;
  var num5 = inputnum5El.value * 1;

  var ketQua = (num1 + num2 + num3 + num4 + num5) / 5;
  var resutlString = " Trung bình cộng 5 số là: " + ketQua;
  KetQuaEl.innerText = resutlString;
}
