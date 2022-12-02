var formselect0 = $('.form-select').eq(0);
var formselect1 = $('.form-select').eq(1);
var pantsoption = '<option>28</option> <option>30</option>'
var shirtsoption = '<option>95</option> <option>100</option>'

formselect0.on('input', function(){
  var val = this.value;
  if(val=='셔츠'){
    formselect1.removeClass('form-hide');
  } else if(val=='바지'){
    formselect1.removeClass('form-hide');
    formselect1.html(pantsoption);
  } else if(val=='모자'){
    formselect1.addClass('form-hide');
  }

});






//html 추가 방법 1 이게 조금 더 빠름. 성능이 좋음. 
//var a = document.createElement('p');
//a.innerHTML = '안녕';
//document.querySelector('#test').appendChild(a);
//
//
//// html 추가 방법 2 
//var template = '<p>안녕</p>';
//document.querySelector('#test').insertAdjacentHTML('beforeend', template);
//$('#test').append(template);





//$('.form-select').eq(0).on('input', function () {
//  var val = this.value;
//  if (val == '셔츠') {
//    $('.form-select').eq(1).removeClass('form-hide');
//  };
//});


var car2 = {
  name: '소나타',
  price: [50000, 3000, 4000],
  color: 'white'
}

document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2.price[0];




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
