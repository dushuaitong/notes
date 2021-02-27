# js的注意点

## 	1. js创建对象的几种方式

```javascript
function createPerson(name) {
	var obj = {};
	obj.name = name;
	obj.say = function () {
		console.log(`Hi ${ this.name }`);
	}
	return obj;
}
var person = createPerson('I am xiao ming')
```

```javascript
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
var person = new Person('I am xiao ming')
```

```javaScript
var person = new Object()
person.name = 'I am xiao ming';
person.say = function() {
  alert('hello');
}

var person2 = new Object({
  	name: 'hello',
   	age: 10,
  	say: function() {
      alert('hello');
    }
})
```

```javascript
var person1 = {
	name: 'hello',
  say: function() {
    alert('hello');
  }
}
var person2 = Object.create(person1);
```

## 2. js中的原型

	>理解对象的原型（可以通过`Object.getPrototypeOf(obj)`或者已被弃用的`__proto__`属性获得）与构造函数的`prototype`属性之间的区别是很重要的。前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，`Object.getPrototypeOf(new Foobar())`和`Foobar.prototype`指向着同一个对象

在js中每个函数都有属性 每个函数都有一个特殊的属性叫做原型

```javascript
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
doSomething.__proto__ /// 现代浏览器提供的访问原型的方法

/// 给一个实例添加原型属性
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );
```

​		就像上面看到的, `doSomeInstancing` 的 `__proto__` 属性就是`doSomething.prototype`. 但是这又有什么用呢? 好吧,当你访问 `doSomeInstancing` 的一个属性, 浏览器首先查找 `doSomeInstancing` 是否有这个属性. 如果 `doSomeInstancing` 没有这个属性, 然后浏览器就会在 `doSomeInstancing` 的 `__proto__` 中查找这个属性(也就是 doSomething.prototype). 如果 doSomeInstancing 的 `__proto__` 有这个属性, 那么 doSomeInstancing 的 `__proto__` 上的这个属性就会被使用. 否则, 如果 doSomeInstancing 的 `__proto__` 没有这个属性, 浏览器就会去查找 doSomeInstancing 的 `__proto__` 的 `__proto__` ，看它是否有这个属性. 默认情况下, 所有函数的原型属性的 `__proto__` 就是 `window.Object.prototype`. 所以 doSomeInstancing 的 `__proto__` 的 `__proto__` (也就是 doSomething.prototype 的 `__proto__` (也就是 `Object.prototype`)) 会被查找是否有这个属性. 如果没有在它里面找到这个属性, 然后就会在 doSomeInstancing 的 `__proto__` 的 `__proto__` 的 `__proto__` 里面查找. 然而这有一个问题: doSomeInstancing 的 `__proto__` 的 `__proto__` 的 `__proto__` 不存在. 最后, 原型链上面的所有的 `__proto__` 都被找完了, 浏览器所有已经声明了的 `__proto__` 上都不存在这个属性，然后就得出结论，这个属性是 `undefined`.



一种极其常见的对象定义模式是，在构造器（函数体）中定义属性、在 `prototype` 属性上定义方法。如此，构造器只包含属性定义，而方法则分装在不同的代码块，代码更具可读性。例如：

```javascript
// 构造器及其属性定义

function Test(a,b,c,d) {
  // 属性定义
};

// 定义第一个方法

Test.prototype.x = function () { ... }

// 定义第二个方法

Test.prototype.y = function () { ... }

// 等等……
```

利用原型实现继承

```javascript
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
```

JSON 内置对象

- `parse()`: 以文本字符串形式接受JSON对象作为参数，并返回相应的对象。
- `stringify()`: 接收一个对象作为参数，返回一个对应的JSON字符串。