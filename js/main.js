$(document).ready(function() {
    // $( '.dropdown' ).hover(function(){
    //         $(this).children('.sub-menu').slideDown(200);
    //         });


	$('#africaButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
		}).done(function(content){
			var newp = $(content).filter('p');
			var newText = newp.text();
			$('.sample').text(newText);
		});
	});

})

