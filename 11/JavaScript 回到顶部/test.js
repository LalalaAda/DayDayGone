window.onload = function(){
	var obtn = document.getElementById("btn");
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (!isTop) {
			clearInterval(timer);
		}
		isTop = false;
		if (osTop>=clientHeight) {
			obtn.style.display = "block";
		}else{
			obtn.style.display = "none";
		}
	}

	obtn.onclick = function(){
		if (timer!=null){
			clearInterval(timer);
			return;
		}
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/6); //向下取整
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			if (osTop==0) {
				clearInterval(timer);
			}
		},30);
	}
}