var Clara = {};

Clara.init = function(){
	Clara.pop = Popcorn('#theVid');

	Clara.pop.subtitle({
		start: 0,
		end: Clara.pop.duration(),
		text: "Subtitles!!!!",
		target: "subs"
    });

	$(document).keyup(function(e) {
		var key = e.which;
		var dur = Clara.pop.duration();
		var currTime = Clara.pop.currentTime();
		var pRate = Clara.pop.playbackRate();
		switch(key) {
		case 65:
			Clara.pop.currentTime(60);
			break;
		case 83:
			if(dur > currTime + 10) Clara.pop.currentTime(currTime + 10);
			break;
		case 68:
			if(currTime > 10) Clara.pop.currentTime(currTime - 10);
			break;
		case 70:
			if(Clara.pop.paused()) Clara.pop.play();
			else Clara.pop.pause();
			break;
		case 71:
			Clara.pop.playbackRate(pRate * 2);
			break;
		case 72:
			Clara.pop.playbackRate(pRate / 2);
			break;
		case 74:
			Clara.pop.playbackRate(1);
			break;
		case 75:
			$('#subs').toggle();
			break;
		}
		console.log(key);
	});
};

Clara.pop = null;

document.addEventListener("DOMContentLoaded", function () {
	Clara.init();
});