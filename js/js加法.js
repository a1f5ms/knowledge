// 加法运算
// 1:两端为原始类型（是），有没有字符串（没有），转为数字，做加法。有NaN得到NaN
console.log(null + undefined) // NaN
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
// null + undefined 相当于 0 + NaN = NaN

// 2:两端为原始类型（是），有没有字符串（有），转为字符串，拼接。
console.log(NaN + '1') // 'NaN1'
console.log(String(NaN)) // 'NaN'

// 3:两端为原始类型（是），有没有字符串（没有），转为数字，做加法。
console.log(1 + true) // 2
console.log(Number(true)) // 1

// 4:两端含有对象，调用valueOf()方法，是否得到原始类型（否），调用toString()方法，是否得到原始类型（是），都不满足时报错
console.log([1] + 1) // '11'
console.log([1].valueOf()) // [1]
console.log([1].toString()) // '1'
// [1] + 1 相当于 '1' + 1

// 5:
console.log([1] + {n:1}) // '1[object object]'
console.log(({n: 1}).toString()) // '[object object]'