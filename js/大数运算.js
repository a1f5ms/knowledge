// 大数运算
// 例：
/*
	var START = 2 ** 53
	var END = START + 100
	for(let i = START; i < END; i++){
		cosnole.log('循环')
	}
*/
// 请问：上面这段代码‘循环’会打印多少次？
// 1：99、2：100、3:报错、4：不可预测对号✔

// 知识点：
/*
	js数值存储 64位浮点数（64位二进制）
	1位符号 + 11位指数 + 52位尾数
	将任意数值按照科学计数法方式写出，得到符号（+/-）、指数（多少次方）、尾数（1后面的小数部分）
	尾数部分决定了数字的精度，转化位二进制后，少于52位补零，多余52位截断
	尾数部分的二进制，再加上小数点前面的1一共是53位，所能表达的最大数字是53个1组成的数，
	刚好是2的53次方减一，既2 ** 53 - 1 = 9007199254740991
	该值是Number.MAX_SAFE_INTEGER最大安全整数
*/
 // 思考：
 // 如何在循环不变的情况下循环变得正常？