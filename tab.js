//버튼0을 누르면 
//모든 버튼에 orange show 제거
//버튼0에 orange 클래스 부착
//버튼0 show 부착
var 버튼 = $('.tab-button');


$('.tab-button').eq(0).on('click', function () {
  $('.tab-button').removeClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(0).addClass('orange');
  $('.tab-content').eq(0).addClass('show');

});

$('.tab-button').eq(1).on('click', function () {
  $('.tab-button').removeClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(1).addClass('orange');
  $('.tab-content').eq(1).addClass('show');

});

$('.tab-button').eq(2).on('click', function () {
  $('.tab-button').removeClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(2).addClass('orange');
  $('.tab-content').eq(2).addClass('show');

});
