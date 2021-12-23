var inputSoNgayCongEl = document.getElementById("inputSoNgayCong");
var inputluong1ngayEl = document.getElementById("inputluong1ngay");
var KetQuaEl = document.getElementById("ketQua");

function tinhTien() {
  var SoNgayCong = parseInt(inputSoNgayCongEl.value);
  var luong1ngay = inputluong1ngayEl.value * 1;

  var ketQua = SoNgayCong * luong1ngay;
  var resutlString = " Tổng tiền lương tháng này là: " + ketQua;
  KetQuaEl.innerText = resutlString;
}
