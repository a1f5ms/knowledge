// 执行上下文

function method (a,b,c) {
	console.log(a,b,c);
	var a = 'a';
	var b = function b() {};
	(function a() {});
	(function b() {});
	function c() {};
	console.log(a,b,c);
}
method(1,2,3)

// 分析
/*
	首先，method(1,2,3)是函数调用，函数在调用时会在内存中创建内容空间，用来记录函数中用到的变量，称为执行上下文，是一个对象{}
	第一步：填充参数（确定形参）。 a:1,b:2,c:3
	第二步：确定函数声明。 function c() {}，将函数声明记录到执行上下文中，遇到重名，会覆盖。
	第三步：确定函数中的变量。 a:undefiend,b:undefined，如果遇到重名，会忽略。
	此时执行上下文中有：{a:1, b:2, c: fn c}
	执行第一个console时，输出{a:1, b:2, c: fn c}
	继续执行：修改变量a和变量b的值，{a: 'a',b: fn b, c: fn c}
	继续执行第二个console时，输出{a: 'a',b: fn b, c: fn c}
*/