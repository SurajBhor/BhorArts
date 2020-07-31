$('img').click(function() {
	let imgLink = ($(this).attr('src'));
	let modelNo = $(this).attr('alt')
	$(".modal").css("display", "block");
	$(".modal-img").attr('src', imgLink);
	$("#whatsapplink").attr('href', "https://wa.me/919657124510/?text=*Order:* I would like to book " + modelNo);
	
});

let span = $(".close")[0];
$(span).click(function() { 
  $(".modal").css("display", "none");
});