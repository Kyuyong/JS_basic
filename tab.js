//버튼0을 누르면 
//모든 버튼에 orange show 제거
//버튼0에 orange 클래스 부착
//버튼0 show 부착
var num = $('li').length;

for (let i = 0; i < num; i++) {
  $('.tab-button').eq(i).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').eq(i).addClass('show');
  });
};
//
//
//$('.tab-button').eq(0).on('click', function () {
//  $('.tab-button').removeClass('orange');
//  $('.tab-content').removeClass('show');
//  $('.tab-button').eq(0).addClass('orange');
//  $('.tab-content').eq(0).addClass('show');
//
//});
//
//$('.tab-button').eq(1).on('click', function () {
//  $('.tab-button').removeClass('orange');
//  $('.tab-content').removeClass('show');
//  $('.tab-button').eq(1).addClass('orange');
//  $('.tab-content').eq(1).addClass('show');
//
//});
//
//$('.tab-button').eq(2).on('click', function () {
//  $('.tab-button').removeClass('orange');
//  $('.tab-content').removeClass('show');
//  $('.tab-button').eq(2).addClass('orange');
//  $('.tab-content').eq(2).addClass('show');
//
//});
