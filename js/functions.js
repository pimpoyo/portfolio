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
