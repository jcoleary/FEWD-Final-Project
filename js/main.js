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
			var newp = $(content).filter('.afrique').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});

$('#asiaButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
			}).done(function(content){
			var newp = $(content).filter('.asie').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});

$('#australiaButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
		}).done(function(content){
			var newp = $(content).filter('.australie').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});

$('#europeButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
			}).done(function(content){
			var newp = $(content).filter('.europe').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});

$('#naButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
			}).done(function(content){
			var newp = $(content).filter('.amerique_du_nord').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});

$('#saButton').on('click', function(){
		$(".sample").show();
		$.ajax({
			type: 'get',
			url:"http://jcoleary.github.io/continent_profiles"
	}).done(function(content){
			var newp = $(content).filter('.amerique_du_sud').html();
			// var newText = newp.html();
			$('.sample').html(newp);
			console.log("newp");
			console.log(newp);
		});
	});


})
