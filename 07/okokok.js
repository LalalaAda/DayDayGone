//把两个数组合并，并删除第二个元素
// var a = new Array('a','b','c','d');
// var b = new Array('e','f','g');
// var s = a.concat(b);
// console.log(s);
// var d = s.splice(0,1);//删除第一个元素会修改原数组
// console.log(s+"----"+d);

// var a = new Array('100','10','1','5');
// var b = new Array('2','3','4');
// var s = a.concat(b);
// function shotBy(a,b){
// 	return a-b;
// }
// //console.log(s.sort(shotBy())); // error 输出 '1','10','100','2','3','4','5'
// //因为sort() 方法默认是按照字符编码排序的
// //正确的写法 是array.sort(function(){});
// //所以上面的 shotBy() 相当于在sort内自定义一个空方法所以还是默认输出
// //特别注意 正确的写法是不带（）的
// var a = new Array(100,10,1,5);
// var b = new Array(2,3,4);
// var s = a.concat(b);
// console.log(s);
// console.log(s.sort(shotBy)); // 输出 1,2,3,4,5,10,100
// console.log(s.sort(shotBy())); // 1,10,100,2,3,4,5
// console.log(s); //sort()方法也会改变原数组
// var a = new Array(100,10,1,3,4,5);
// var s = a.reverse();
// console.log(s); //5,4,3,1,10,100 //只是简单的颠倒
// console.log(a); // 5,4,3,1,10,100 //reverse()会改变原数组
 
// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
// 该方法会改变原始数组
// arrayObject.splice(index,howmany,item1,....,itemX);
// index 	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// item1,...,itemX 可选。向数组添加的新项目。
// 用法解析 splice(2,0,"haha")从下标2处插入新元素"haha"
// splice(2,1,"haha") 从下标2处删除一个元素并插入新元素"haha" 其实就是替换
// slice()方法从已有的数组中返回选定的元素 但是slice()方法不改变原数组 
// arrayObject.slice(start, end); 参数可负

//原生javaScript创建、添加。移除、替换和查找dom节点
// 1.创建新节点
// createDocumentFragment() //创建一个DOM片段
// createElement() //创建一个具体的元素
// createTextNode() //创建一个文本节点
// 2.添加、移除、替换、插入
// appendChild()
// removeChild()
// replaceChild()
// insertBefore()
// 3.查找
// getElementsByTagName()  //通过标签名
// getElementsByName()  //通过元素的Name属性的值
// getElementById() //通过元素id  唯一性

// JavaScript同源策略，如何实现跨域请求，JSONP的原理
// URL由协议、域名、端口和路径组成，如果两个URL的协议、域名和端口相同，
// 则表示他们同源。浏览器的同源策略，限制了来自不同源的"document"或脚本，
// 对当前"document"读取或设置某些属性。 从一个域上加载的脚本不允许访问
// 另外一个域的文档属性。

// 解决方式：
// 一、 window.name
// 	1.服务器返回
// 	<script> window.name="{'id':1,"name":'haha'}"; </script>
// 	2.定义一个iframe，添加onload事件
// 		<iframe id=”iframe1″ onload=”iLoad”><iframe>
// 		<script type=”text/javascript”>
// 			var load = false;
// 			function iLoad() {
// 				if(load == false) {
// 					// 同域处理，请求后会再次重新加载iframe
// 					document.getElementById(‘iframe1’).
// 					contentWindow.location = ‘/’;
// 					load = true;
// 				} else {
// 					// 获取window.name的内容，注意必须进行同域处理后方可访问！
// 					var data = document.getElementById(‘iframe1’).
// 					contentWindow.name;
// 					alert(data); // {“id”:”3″, “name”:”leisure”}
// 					load = false;
// 				}
// 			}
// 		</script>
// 	3.定义一个form，设置form的target为iframe的id，然后提交form
// 		<form action=”url” method=”POST” target=”iframe1″>
// 		<button type=”submit” value=”submit” />
// 		</form>
// 二、 JSONP
// 	服务器返回 callback({“id”: “3”, “name”: “leisure”});
// 	<script type=”text/javascript”>
// 	function callback(data) {
// 	alert(data);
// 	}
// 	</script>
// 	<script type=”text/javascript” src=”http://www.e
// 		xample.com.cn/product.jsp?id=5&jsonp=callback”></script>
// 三、 Jquery.getJSON
// 	服务器返回 json格式数据 test({“id”: “3”, “name”: “leisure”}); 
// 	test函数名为callback参数中定义
// 	$.getJSON(url + “?callback=?”, data, function(data) {
// 	}
// 	注意callback=?这个参数必须带上，jquery会自动生成一个函数名
// 	替换这个问号！jQuery.getJSON实际上是用了JSONP方式实现
// 四、 flash跨域
// 	服务器添加crossdomain.xml
// 	http://www.example.com.cn/crossdomain.xml
// 	<?xml version=”1.0″?>
// 	<cross-domain-policy>
// 	<allow-access-from domain=”*.another.com.cn” />
// 	</cross-domain-policy>

// 	JSONP的原理
// 	动态添加一个<script>标签，而script标签的src属性是没有跨域的限制的。
// 	这样说来，这种跨域方式其实与ajax XmlHttpRequest协议无关了

// 有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，
// 请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，
// 将其按key-value形式返回到一个json结构中，
// 如{a:'1', b:'2', c:'', d:'xxx', e:undefined}。
// function getUrl(url) {
// 	var result = {};
// 	var temp = url.split('?')[1].split('&');
// 	for(i in temp){
// 		var s = temp[i].split('=');
// 		console.log(s[0]+"..."+s[1]);
// 		result[s[0]] = s[1];
// 	}
// 	return result;
// }
// console.log(getUrl("http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e"));

 //消除一个数组里面重复的元素
// Array.prototype.unique3 = function(){
// 	var res = [];
// 	var json = {};
// 	for(var i =0; i<this.length; i++){
// 		if (!json[this[i]]) {
// 			res.push(this[i]);
// 			json[this[i]] = 1;
// 		}
// 	}
// 	return res;
// }
// function quchong(arr){
// 	var brr = [];
// 	var obj = {};
// 	for(var i = 0; i<arr.length; i++){
// 		if (!obj[arr[i]]) {
// 			brr.push(arr[i]);
// 			obj[arr[i]] = true;
// 		}
// 	}
// 	return brr;
// }
// var arr = [112,112,34,'你好',112,112,34,'你好','str1','str1'];
// console.log(arr.unique3());
// console.log(quchong(arr));

// function log(){
// 	console.log.apply(console, arguments);
// }
// call函数和apply方法的第一个参数都是要传入给当前对象的对象，
// 及函数内部的this。后面的参数都是传递给当前对象的参数。
// 举例：
// 运行如下代码：
// <script>
//    var func=new function(){this.a="func"}
//     var myfunc=function(x){
//         var a="myfunc";
//         alert(this.a);
//         alert(x);
//     }
//     myfunc.call(func,"var");
// </script>
// 可见分别弹出了func和var。到这里就对call的每个参数的意义有所了解了。
// func.call(func1,var1,var2,var3)对应的
// apply写法为：func.apply(func1,[var1,var2,var3])


// 伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，
// 但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，
// 还有像调用getElementsByTagName,document.childNodes之类的,
// 它们都返回NodeList对象都属于伪数组。可以使用
// Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象。

// 我们要给每个log方法添加一个”(app)”前缀，
// 比如’hello world!’ ->'(app)hello world!’。方法如下：
// function log(){
// 	var args = Array.prototype.slice.call(arguments);
// 	args.unshift("(app)");
// 	console.log.apply(console,args);
// }
// log("hahah");
// unshift() 方法将把它的参数插入 arrayObject 的头部，
// 并将已经存在的元素顺次地移到较高的下标处，以便留出空间。
// 该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，
// 它将成为新的元素 1，以此类推。
//请注意，unshift() 方法不创建新的创建，而是直接修改原有的数组。
//ie并不能正常工作

// 已知有字符串foo="get-element-by-id",写一个
// function将其转化成驼峰表示法"getElementById"。
// function combo(msg){
// 	var arr = msg.split('-');
// 	var len = arr.length;
// 	for(var i = 1;i<len;i++){
// 		arr[i]=arr[i].charAt(0).toUpperCase()+
// 			arr[i].substr(1,arr[i].length-1);
// 	}
// 	msg = arr.join("");
// 	return msg;
// }

// 列举不同的清除浮动的技巧，并指出它们各自适用的使用场景。

// 1.使用空标签清除浮动。这种方法是在所有浮动标签后面添加一个空标签
// 定义css clear:both.弊端就是增加了无意义标签。
// 2.使用overflow。给包含浮动元素的父标签添加css属性
// overflow:auto;zoom:1;zoom:1用于兼容IE6。
// 3.使用after伪对象清除浮动。该方法只适用于非IE浏览器。
// 具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置height:0，否则该元素会比实际高出若干像素；二、content属性是必须的，但其值可以为空，content属性的值设为”.”，空亦是可以的。
// 4.浮动外部元素