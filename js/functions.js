$(document).ready(main);

//////////////////////////////////
// cambio de menÃºpor icono men //
//////////////////////////////////
var flag = 1;

function main() {
	$('.icon-menu').click(function(){
		if(flag == 1) {
			$('nav').animate({
				left: '0'
			});
			flag = 0;
		} else {
			$('nav').animate({
				left: '-100%'
			});
			flag = 1;
		}		
	});
};


    $('a.fullsizable').fullsizable({
      detach_id: 'wrapper'
    });

    $(document).on('fullsizable:opened', function(){
      $("#jquery-fullsizable").swipe({
        swipeLeft: function(){
          $(document).trigger('fullsizable:next')
        },
        swipeRight: function(){
          $(document).trigger('fullsizable:prev')
        },
        swipeUp: function(){
          $(document).trigger('fullsizable:close')
        }
      });
    });

var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
