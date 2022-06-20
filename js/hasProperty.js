// 判断对象中是否存在某个属性
// @param {Object} obj 对象
// @param {String} key 属性名

// function hasProperty(obj,key){
// 	return key in obj
// }

// 常见错误
// 1：
// function hasProperty(obj,key){
// 	return obj.key !== undefined
// }
// 原因:使用"obj.key"永远得到的是key属性,不能得到其他属性。应该取属性值：obj[key]

// 2：
// function hasProperty(obj,key){
// 	return obj[key] !== undefined
// }
// 原因: 当对象属性值为undefined时，判断结果为false
// 例：
// var obj = {
// 	a: undefined
// }
// function hasProperty(obj,key){
// 	return obj[key] !== undefined
// }
// console.log(hasProperty(obj, 'a'))// false
// 3：
// function hasProperty(obj,key){
// 通过Object.keys(obj)得到obj所有key的数据，在判断数组中是否包含key值
// 	return Object.keys(obj).includes(key)
// }
// 原因：当对象中添加不可枚举属性时，使用Object.keys(obj)时，该key值就不在数组中
// 例：
// var obj = {
// 	a: undefined,
// 	b: 1
// }
// Object.defineProperty(obj,'c',{
// 	enumerable: false,
// 	value: 2
// })
// function hasProperty(obj,key){
// 	return Object.keys(obj).includes(key)
// }
// console.log(hasProperty(obj, 'c'))// fasle
// 4:
// function hasProperty(obj,key){
// es6中判某一个对象是否存在某一个属性
// 	return obj.hasOwnProperty(key)
// }
// 原因：不能判断对象原型链上拥有的属性，它只会在对象本身上去找
// var obj = {
// 	a: undefined,
// 	b: 1
// }
// Object.defineProperty(obj,'c',{
// 	enumerable: false,
// 	value: 2
// })
// function hasProperty(obj,key){
// 	return obj.hasOwnProperty(key)
// }
// console.log(hasProperty(obj, 'c'))// true
// console.log(hasProperty(obj, 'toString'))// fasle

// 答案：
// function hasProperty(obj,key){
// 	return key in obj
// }
// 使用in关键字，可以判断这个属性是否在这个对象里面，而且in关键字可以在原型链上查找
var obj = {
	a: undefined,
	b: 1
}
Object.defineProperty(obj,'c',{
	enumerable: false,
	value: 2
})
function hasProperty(obj,key){
	return key in obj
}
console.log(hasProperty(obj, 'c'))// true
console.log(hasProperty(obj, 'toString'))// true

// 思考：不用in，有什么办法能达到相同效果
