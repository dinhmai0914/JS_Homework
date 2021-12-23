var inputChieuDaiEl = document.getElementById("inputChieuDai");
var inputChieuRongEl = document.getElementById("inputChieuRong");
var KetQuaEl = document.getElementById("ketQua");

function tinhS() {
  var ChieuDai = parseInt(inputChieuDaiEl.value);
  var ChieuRong = inputChieuRongEl.value * 1;

  var ketQua = ChieuDai * ChieuRong;
  var resutlString = " Diện tích hình chữ nhật là: " + ketQua;
  KetQuaEl.innerText = resutlString;
}
