// 布尔值和短路运算
console.log(1 < 2 && 4 > 5) // false
console.log(1 < 2 || 4 > 5) // true

// &&都为true才为true（有fasle就停止）；||有一个为true就为true（有true就停止）
console.log(2 && 4) // 4
console.log(2 || 4) // 2