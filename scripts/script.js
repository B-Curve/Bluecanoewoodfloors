$(function(){

var subpages = ['contact', 'maintenance', 'projects', 'services'];
var isSubPage = true;
var path = window.location.pathname;
var page = path.split('/').pop();

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //Do Nothing
}else{
  //Redirect to Desktop Page
  if($.inArray(page, subpages)){
    window.location.href = '../d/src/'+page;
  }else{
    window.location.href = './d/index.html';
  }
}

$(window).resize(function(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //DO NOTHING
  }else{
    //Redirect to Desktop Page
    if($.inArray(page, subpages)){
      window.location.href = '../d/src/'+page;
    }else{
      window.location.href = './d/index.html';
    }
  }
});

$('#navbar').toggle();
var isNav = false;
var counter = 2;

$('#dropdown').click(function(){
  if(!isNav){
    $('#navbar').slideDown();
    isNav = true;
  }else{
    $('#navbar').slideUp();
    isNav = false;
  }
});

$('#gallery img[src$="./images/banner1.jpg"]').toggle();

function deletePhoto(counter){
  setTimeout(function(){
    $('#gallery img[src$="./images/banner'+(counter-1)+'.jpg"]').fadeOut();
  }, 4350);
}

setInterval(function(){
  $('#gallery img[src$="./images/banner1.jpg"]').fadeOut();
  $('#gallery img[src$="./images/banner'+counter+'.jpg"]').fadeIn();
  counter++;
  deletePhoto(counter);
  if(counter === 9){
    counter = 2;
  }
}, 4500);

function imagePlace(gallery){
  var image = document.createElement('img');
  $(image).wrap('#imageView');
  $('#imageView').append(image);
  $(image).attr('src','../images/gallery/'+gallery+'1.jpg');
}

function imageLeft(gallery, getImageCount, imageCount){
  $('#imageView img').attr('src','../images/gallery/'+gallery+getImageCount+'.jpg');
  $('#imageView figcaption').text(getImageCount+'/'+imageCount.length);
}

function imageRight(gallery, getImageCount, imageCount){
  $('#imageView img').attr('src','../images/gallery/'+gallery+getImageCount+'.jpg');
  $('#imageView figcaption').text(getImageCount+'/'+imageCount.length);
}

function photoViewer(gallery, imageCount){
  var overlay = document.createElement('div');
  $(overlay).attr('id','overlay');
  $('body').append(overlay);
  var viewer = document.createElement('div');
  $(viewer).attr('id','viewer');
  $('#viewer').wrap('#overlay');
  $('#overlay').append(viewer);
  var imageView = document.createElement('figure');
  $(imageView).attr('id','imageView');
  $('#imageView').wrap('#viewer');
  $('#viewer').append(imageView);
  imagePlace(gallery);
  var arrowLeft = document.createElement('div');
  $(arrowLeft).attr('id','arrowLeft');
  $(arrowLeft).text('\u25c4');
  $('#arrowLeft').wrap('#viewer');
  $('#viewer').append(arrowLeft);
  var arrowRight = document.createElement('div');
  $(arrowRight).attr('id','arrowRight');
  $(arrowRight).text('\u25ba');
  $('#arrowRight').wrap('#viewer');
  $('#viewer').append(arrowRight);
  var figcaption = document.createElement('figcaption');
  $(figcaption).wrap('#imageView');
  $('#imageView').append(figcaption);
  $(figcaption).text('1/'+imageCount.length);
  if(isNav){
    $('#navbar').slideUp();
    $('#dropdown').css({'transform' : 'rotate(-180deg)'});
    isNav = false;
  }
  $('html').css({
    overflow: 'hidden',
    height: '100%'
  });
  $('#overlay').click(function(event){
    var target = $(event.target);
    if(!(target.is('#viewer')||target.is('#viewer *'))){
      overlay.remove();
      viewer.remove();
      imageView.remove();
      $('html').css({
        overflow: 'auto',
        height: 'auto'
      });
    }
  });
  var currentImage = 1;
  $('#arrowLeft').click(function(){
    currentImage--;
    if(currentImage === 0){
      currentImage = imageCount.length;
    }
    imageLeft(gallery, currentImage, imageCount);
  });
  $('#arrowRight').click(function(){
    currentImage++;
    if(currentImage > imageCount.length){
      currentImage = 1;
    }
    imageRight(gallery, currentImage, imageCount);
  });
}

$('#cherryImages').click(function(){
  photoViewer('cherry', [1,2]);
});

$('#walnutImages').click(function(){
  photoViewer('walnut', [1,2,3]);
});

$('#oakImages').click(function(){
  photoViewer('oak', [1,2,3,4]);
});

$('#mapleImages').click(function(){
  photoViewer('maple', [1,2,3,4,5]);
});

$('#kitchenImages').click(function(){
  photoViewer('kitchen', [1,2,3,4]);
});

$('#firImages').click(function(){
  photoViewer('fir', [1,2]);
});

});
