document.addEventListener('DOMContentLoaded', function() {
	$("<script></script>").appendTo('head').html('$(document).ready(function(){ \
		$("*").mouseover(function() {$(".message_content:contains(\'slackbot\'):contains(\'/tetris\')").each(function(){$(this).find(".message_body").html("<iframe src=https://fwt.bumxu.com/ style=\'height: 700px;width: 910px;\'></iframe>");});}); \
	})');
});
