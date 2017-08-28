document.addEventListener('DOMContentLoaded', function() {
	$("<script></script>").appendTo('head').html(' \
	$("#msgs_div").bind("DOMNodeInserted", function(event){ \
		if (event.target.tagName == "TS-MESSAGE"){ \
			$(".message_content:contains(\'slackbot\'):contains(\'/tetris\')", this).each(function(){$(this).find(".message_body").html("<iframe src=https://fwt.bumxu.com/ style=\'height: 700px;width: 910px;\'></iframe>");$("div.ql-editor").text("");}); \
		} \
	});');
});
