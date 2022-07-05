// 数字格式化

// var str = '10000000'
// 需求：每三位添加逗号(,)隔开
// str = '10,000,000'

// 分析：逗号的后面是三位数字，根据这一特点，可以使用正则表达式来解决
// 思路：
	// /\d{3}/g ---->数字出现三次
	// /(d{3})+$/g ---->这种结构出现1次或多次
	// 此时正则表达式匹配的是后面3个3个的三位数，而我么们需要的是数字前面的这个位置，不是数字本身（例1）
	// 要得到位置那么会使用到前瞻，（?=）（例2）只匹配到字母
	// 使用该方法解决需求 （例3）
	// 注意要是再加一个0时,会怎样? (例4)
	// 会在最开始的位置也添加了逗号(,),因此需要使用匹配不是单词边界(\B) (例5)

// 例1：
var str = '10000'
var reg = /(\d{3})+$/g
console.log(str.replace(reg,'aaa')) // 10aaa

// 例2：
var str1 = 'abc1dfgh2igk'
var reg1 = /[a-zA-Z]\d/g // 没有使用前瞻,匹配符合正则的内容
var reg2 = /[a-zA-Z](?=\d)/g // 使用前瞻，匹配符合正则的内哦让那个（字母）
console.log(str1.replace(reg1,'TTT')) // abcTTTdffTTTigk
console.log(str1.replace(reg2,'TTT')) // abcTTT1dffTTT2igk


// 例3：
var str2 = '10000000'
var reg2 = /(?=(\d{3})+$)/g
console.log(str2.replace(reg2,',')) // 10,000,000

// 例4：
var str3 = '100000000'
var reg3 = /(?=(\d{3})+$)/g
console.log(str3.replace(reg3,',')) // ,100,000,000

// 例5：
var str4 = '100000000'
var reg4 = /(?=\B(\d{3})+$)/g
console.log(str4.replace(reg4,',')) // 100,000,000

// 反思:
	// 1:正则表达式很多知识还是不知道
	// 2:知道了,但是想不到,没有看透问题的本质
	// 所以知识和知识的运用缺一不可