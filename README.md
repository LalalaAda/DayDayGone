# DayDayGone
温故知新，重操旧业。一些css js html的demo.html

### 01  css雪碧图
	1. 静态图片，不随用户信息的变化而变化
	2. 小图片，图片容量比较小
	3. 加载量比较大
### 02  js中事件绑定
	对象.attachEvent(事件名, 函数);
	对象.addEventListener(事件名,函数,是否捕获)大部分情况不用捕获
	IE下 obj.attachEvent('onclick', function);
	现代浏览器 obj.addEventListener('click', fn, Blooean);
### 03  拖拽
	div.onmousedown=function(ev){
		var E = ev||event;
		var disx=E.clientX-div.offsetLeft;
		var disy=E.clientY-div.offsetTop;
		document.onmousemove=function(ev){
			var E = ev||event;
			div.style.left=E.clientX-disx+'px'//兼容非IE浏览器
			div.style.top=E.clientY-disy+'px'
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
	}

