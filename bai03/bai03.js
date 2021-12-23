var inputGiaDolaEl = document.getElementById("inputGiaDola");
var inputSoDolaEl = document.getElementById("inputSoDola");
var KetQuaEl = document.getElementById("ketQua");

function tinhTien() {
  var GiaDola = parseInt(inputGiaDolaEl.value);
  var SoDola = inputSoDolaEl.value * 1;

  var ketQua = GiaDola * SoDola;
  var resutlString = " Kết quả là: " + ketQua + "VND";
  KetQuaEl.innerText = resutlString;
}
