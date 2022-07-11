##### 1、js文件引用

js文件通过script标签引入到html文件中。

```html
<!DOCTYPE html>
<html>
<head>
    <title>30DaysOfJavaScript</title>
</head>
<body>
        <h1>30DaysOfJavaScript:03 Day</h1>
        <h2>入门</h2>
        <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
        <script src="./helloworld.js"></script>
        <script src="./introduction.js"></script>
        <script src="./varaible.js"></script>
        <script src="./main.js"></script>
</body>
</html>
```

##### 2、helloworld.js

```js
console.log('Hello, World!')
```

##### 3、introduction.js

```js
console.log('Welcome to 30DaysOfJavaScript')
```

##### 4、main.js

可以访问其他variable.js文件中的变量值。

注意：需要注意引用顺序，否则报错，找不到该变量。

```js
console.log(firstName, lastName, country, city, age, isMarried) // Asabeneh Yetayeh Finland Helsinki 100 true
console.log(gravity, boilingPoint, PI) // 9.81, 100, 3.14
console.log(name, job, live) // Asabeneh teacher Finland
```

##### 5、varaible.js

```js
// 声明不同数据类型的不同变量 
let firstName = 'Asabeneh'    // first name of a person
let lastName = 'Yetayeh'      // last name of a person
let country = 'Finland'       // country
let city = 'Helsinki'         // capital city
let age = 100                 // age in years
let isMarried = true

// 用数字值声明变量
const gravity = 9.81         // earth gravity  in m/s2
const boilingPoint = 100     // water boiling point, temperature in oC
const PI = 3.14              // geometrical constant

// 变量也可以在用逗号分隔的一行中声明  
let name = 'Asabeneh',     //name of a person
  	job = 'teacher',
  	live = 'Finland'
```

