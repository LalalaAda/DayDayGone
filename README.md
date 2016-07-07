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

    拖拽
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
### 03 五种居中方式
	#### 绝对定位居中-position
	优点：
		1.支持跨浏览器，包括IE8-IE10
		2.无需其他特殊标记，CSS代码量少
		3.支持百分比%属性值和min-/max-属性
		4.只用这一个类可实现任何内容块居中
		5.不论是否设置padding都可居中（在不使用box-sizing属性的前提下）
		6.内容块可以被重绘
		7.完美支持图片居中
	缺点：
		1.必须声明高度（查看可变高度Variable Height)
		2.建议设置overflow:auto来防止内容越界溢出（查看溢出Overflow）
		3.在Windows Phone设备上不起作用
	#### 负外边距 Negative Margins
	优点：
		1.良好的跨浏览器特性，兼容IE6-IE7
		2.代码量少
	缺点：
		1.不能自适应。不支持百分比尺寸和min-/max-属性设置
		2.内容可能溢出容器
		3.边距大小与padding和是否定义box-sizing：border-box有关，
			计算需要根据不同情况
	####  变形-Transforms
	优点：
		1. 内容可变高度
		2. 代码量少
	缺点：
		1. IE8不支持
		2. 属性需要写浏览器厂商前缀
		3. 可能干扰其他transform效果
		4. 某些情形下会出现文本或元素边界渲染模糊的现象
	####  行内块元素-Inline-Block
	优点：
		1. 高度可变
		2.内容溢出会将父元素撑开。
		3.支持跨浏览器，也适应于IE7。
	缺点：
		1.需要一个容器
		2.水平居中依赖于margin-left: -0.25em;该尺寸对于不同的字体/字号需要调整。
		3.内容块宽度不能超过容器的100% - 0.25em
	####  Flex
	优点：
		1.内容块的宽高任意，优雅的溢出。
		2.可用于更复杂高级的布局技术中。
	缺点：
		1. IE8/IE9不支持。
		2. Body需要特定的容器和CSS样式。
### 04 闭包的解释 
	闭包就是在当前作用域访问外部作用域
	js中函数有自身作用域 so 闭包创建依赖于函数
	最简单的闭包:
	function a(i) {
		return function() {
			return i+1;
		}
	}
	a(1)();  //2
### 05  三级城市联动插件
	原理：将城市信息写入到数组中 定义为全局变量
	通过jquery dom操作动态添加option到select中
	var $sel1 = _self.find('select').eq(0);
	...
	$.each(GP, function(index, data) {
		$sel1.append("<option value='"+data+"'>"+data+"</option>");
	});
	当改变选项时:
	var index1 = "";
	$sel1.change(function() {
		index1 = this.selectedIndex;
		$sel2[0].options.length = 0;
		$sel3[0].options.length = 0;
		判断是否第一个已选择非默认选项
		$.each(GT[index1-1], function(index, data){
			$sel2.append("..........");
		});
		$.each(GC[index1-1][0], function(index, data){
			$sel3.append("..........");
		});	
	}).change();
	$sel2.change(function(){
		...
	});
	return _self;
### 06
	






