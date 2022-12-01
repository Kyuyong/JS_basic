var num = $('li').length;


//HTML에 Data id -> dataset 를 숨겨놓고, 작업을 하면 if문 없이 간단히 작업 가능
$('.list').click(function (e) {

  opentab(e.target.dataset.id)
});


// 오픈탭 함수가 있으면 if문으로도 쓸수 있음 
//$('.list').click(function (e) {
//  if (e.target == document.querySelectorAll('.tab-button')[0]) {
//    opentab(0)
//  }
//  if (e.target == document.querySelectorAll('.tab-button')[1]) {
//    opentab(1)
//  }
//  if (e.target == document.querySelectorAll('.tab-button')[2]) {
//    opentab(2)
//  }
//});


// 확장성을 위해, 탭버튼을 함수화 -> oepntab 함수를 만들어서 씀
//for (let i = 0; i < num; i++) {
//  $('.tab-button').eq(i).on('click', function () {
//    opentab(i);
//  })
//};

function opentab(e) {
  $('.tab-button').removeClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(e).addClass('orange');
  $('.tab-content').eq(e).addClass('show');
};
