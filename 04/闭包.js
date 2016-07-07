//闭包  当前作用域总是能够访问外部作用域中的变量
//因为函数是JavaScript中唯一拥有自身作用域的结构
//因此闭包的创建依赖于函数

//最简单的闭包
function a(i) {
	return function() {
		return i+1;
	}
}

console.log(a(1)()); //2

//模拟私有变量
// function Counter(start) {
// 	var count = start;
// 	return {
// 		increment: function() {
// 			count++;
// 		},
// 		get: function() {
// 			return count;
// 		}
// 	}
// }

// var foo = Counter(4);
// foo.increment();
// console.log(foo.get()); //5

//当console.log被调用时，匿名函数保持对外部变量i的引用
//此时for循环已经结束，i的值被修改成了10
// for (var i = 0; i < 10; i++) {
// 	setTimeout(function() {
// 		console.log(i);
// 	}, 1000);
// }
//未来为了正确的获得循环序号，最好使用匿名包装器即自执行匿名函数
// for (var i = 0; i < 10; i++) {
// 	(function(e) {
// 		setTimeout(function() {
// 			console.log(e);
// 		}, 1000);
// 	})(i);
// }
// 外部匿名函数会立即执行，并把i作为它的参数，此时函数内e变量就拥有
// 了i的一个拷贝。 当传递给setTimeout的匿名函数执行时，它就拥有了
// 对e的引用，而这个值是不会被循环改变的
// 另一种方法，就是从匿名包装器中返回一个函数
// for (var i = 0; i < 10; i++) {
// 	setTimeout((function(e) {
// 		return function() {
// 			console.log(e);
// 		}
// 	})(i), 1000);
// }
