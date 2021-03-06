// 自增运算：++
/*
	++在后：先计算表达式，再自增
	++在前：先自增，在计算表达式
*/
// 例：
var a = 3
console.log(a + a++ * ++a)

// 知识点：
// 1、优先级
// 2、++运算符
// 3、表达式

// 解法：
/*
	用优先级最低的符号分割表达式：
		1：用（+）号分割，得到a、a++ * ++a两部分 
		2：将a++ * ++a用（*）号分割，得到a++、 ++a两部分
	所以上式为： 3 + 3 * 5 = 18
*/
// 思考：
/* 
	var b = 3;
	var num = b - b / b-- + b++ * b--
	console.log(num) ？
*/
