$(document).ready(function(){
	$('.reviews-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 960,
				settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
				}
			}
		]
	});
});


$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header-nav').toggleClass('active');
	});
	$('body').toggleClass('lock');
})