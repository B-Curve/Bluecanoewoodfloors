$(function(){

var subpages = ['contact', 'maintenance', 'projects', 'services'];
var isSubPage = true;
var path = window.location.pathname;
var page = path.split('/').pop();

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //REDIRECT TO MOBILE PAGE
  if($.inArray(page, subpages)){
    window.location.href = '../../src/'+page;
  }else{
    window.location.href = './Bluecanoewoodfloors/index.html';
  }
}else{

}

$(window).resize(function(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //REDIRECT TO MOBILE PAGE
    if($.inArray(page, subpages)){
      window.location.href = '../../src/'+page;
    }else{
      window.location.href = './Bluecanoewoodfloors/index.html';
    }
  }else{
    //DO NOTHING
  }
});

$('.slides:nth-of-type(1)').toggle();
var i = 1;

setInterval(function(){
  $('.slides:nth-of-type('+(i-1)+')').fadeOut();
  $('.slides:nth-of-type('+i+')').fadeIn();
  i++;
  if(i === 9){
    i = 1;
    setTimeout(function(){
      $('.slides:nth-of-type(8)').fadeOut();
    }, 3499);
  }
}, 3500);


});
