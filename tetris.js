//Tetris
document.addEventListener('DOMContentLoaded', function() {
	$("#msgs_div").bind("DOMNodeInserted", function(event){
		$(".message_content:contains('slackbot'):contains('/tetris')", this).each(function(){
			$(this).find(".message_body").html("<iframe src=https://fwt.bumxu.com/ style='height: 700px;width: 910px;'></iframe>");
			$("div.ql-editor").text("");
		});
	});
});
