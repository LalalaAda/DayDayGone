(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

s=window.innerHeight/500;
ss=250*(1-s);

$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row != 9) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
})

$(document).swipeDown(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}	
})

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();

(function() {
    var page = document.getElementsByClassName("page-2-1")[0];
     var   img = page.getElementsByTagName("img");
    var isOk = document.getElementsByClassName("isOk")[0];
    var yes = document.getElementById('yes');
    var no = document.getElementById("no");
    var flag;
    for(var i = 0; i < img.length; i++){
        img[i].onclick = function() {
            for(var j = 0; j < img.length; j++){
                img[j].style.border = "";
            }
            this.style.border = "5px solid red";
            flag=$(this).attr("data-istrue");
        };
    }

            isOk.onclick = function(){
                if(flag=="1"){

                    yes.style.display = "block";
                    no.style.display = "none";
                    isOk.innerHTML = "继&nbsp;&nbsp;&nbsp;&nbsp;续";
                }else{
                    //alert(flag);
                    yes.style.display = "none";
                    no.style.display = "block";
                    isOk.innerHTML = "继&nbsp;&nbsp;&nbsp;&nbsp;续";
                }
            };



})();
