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
