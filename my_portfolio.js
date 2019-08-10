$(window).on("load", function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});
});


$(document).ready(function(){
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Web Developer", "Badminton Player", "Student"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    item:5,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
   });


	var skillsoffset = $(".skillsSection").offset().top;

	$(window).scroll(function()
	{
		if(window.pageYOffset > skillsoffset - $(window).height() + 200)
		{
				$('.chart').easyPieChart({
			      	easing:'easeInOut',
			      	barColor: '#fff',
			      	trackColor:  false,
			      	scaleColor:  false,
			      	lineWidth: 4,
			      	size: 152,
			      	onStep: function(from, to, percent)
			      	{
			      		$(this.el).find('.percent').text(Math.round(percent));
			      	}
			        });
		}
	});

	$(".counter").each(function(){
		var element = $(this);
		var endval = parseInt(element.text());

		element.countup(endval);
	});

});


