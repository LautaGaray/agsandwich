$('.slider').bxSlider({
	autoControls: true,
	auto: true,
	pager: true,
	slideWidth: 1050,
	mode: 'fade',
	captions: true,
	speed: 1000
});


function mostrarAlerta() {
	alert('hizo click!');	
}

function hacerClick() {
	document.getElementById('23').onclick = mostrarAlerta()	
}

window.onload = hacerClick;


