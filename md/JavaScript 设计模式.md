## 面向对象
> 💡 Tips：通过关键字new来创建

```javascript
let Book = function(id,bookname,price){
   this.id = id;
   this.bookname = bookname;
   this.price = price;
}
let b1 = new Book(0,1,2)
console.log(b1) //Book { id: 0, bookname: 1, price: 2 }
let b2 = new Book(1,2,3)
console.log(b2) //Book { id: 1, bookname: 2, price: 3 }
let b3 = new Book(2,3,4)
console.log(b3) //Book { id: 2, bookname: 3, price: 4 }
```
## 封装
```javascript
let Book = function(id,bookname,price){
    // 私有属性
    var num = 1;
    // 私有方法
    function checkId(){
    };
    // 特权方法
    this.getName = function(){};
    this.getPrice = function(){};
    this.setName = function(){};
    this.setPrice = function(){};
    // 对象公有属性
    this.id = id;
    // 对象公有方法
    this.copy = function(){};
    // 构造器
    this.setName(bookname);
    this.setPrice(price);
};
//类静态公有属性(对象不能访问)
Book.isChinese = true;
//类静态公有方法(对象不能访问)
Book.resetTime = function(){
   console.log("new Time")
};
Book.prototype = {
    //公有属性
    isJSBook: false,
    //公有方法
    display: function(){}
}
var b = new Book(11,'js设计模式','一块')
console.log(b.num);       // undefined
console.log(b.isJSBook);  // false
console.log(b.id);        // 11
console.log(b.isChinese); // undefined
console.log(b.__proto__); // 获取原型对象属性 { isJSBook: false, display: [Function: display] }
console.log(Book.isChinese)  // 可以通过函数自身访问 true
Book.resetTime()   // "new Time"
```
## 函数之间的秘密
```javascript
function checkName(){
   // 验证姓名
   return "checkName"
}
function checkEmail(){
    // 验证邮箱
    return "checkEmail"
}
function checkPassword1(){
    // 验证密码
    return "checkPassword1"
}
function checkPassword2(){
    return "checkPassword2"
}
// 函数之间会相互覆盖掉
let passWord1 = checkPassword2();
passWord1 = checkPassword1();
console.log(passWord1)

```
## 函数的另一种形式
```javascript
let checkName = function checkName(){
   // 验证姓名
   return "checkName"
}
console.log(checkName()) // 打印函数返回值 
console.log(checkName) // 打印函数本身  
let checkEmail = function checkEmail(){
    // 验证邮箱
    return "checkEmail"
}
console.log(checkEmail()) 
console.log(checkEmail) 
let checkPassword = function checkPassword(){
    // 验证密码
    return "checkPassword"
}
console.log(checkPassword())
console.log(checkPassword)
```
## 用对象收编变量
```javascript
let checkObject = {
    checkName:function checkName(){
        // 验证姓名
        return "checkName"
    },
    checkEmail:function checkEmail(){
        // 验证邮箱
        return "checkEmail"
    },
    checkPassword:function checkPassword(){
        // 验证密码
        return "checkPassword"
    }
}
console.log(checkObject.checkName())
console.log(checkObject.checkName)
console.log(checkObject.checkEmail())
console.log(checkObject.checkEmail)
console.log(checkObject.checkPassword())
console.log(checkObject.checkPassword)
```
## 对象的另一种形式
```javascript
let checkObject =function(){}
checkObject.checkName=function (){
    // 验证姓名
    return "checkName"
},
checkObject.checkEmail=function (){
    // 验证邮箱
    return "checkEmail"
},
checkObject.checkPassword=function(){
    // 验证密码
    return "checkPassword"
}
console.log(checkObject.checkName())
console.log(checkObject.checkName)
console.log(checkObject.checkEmail())
console.log(checkObject.checkEmail)
console.log(checkObject.checkPassword())
console.log(checkObject.checkPassword)
```
## 真假对象
```javascript
let checkObject =function(){
    return{
        checkName:function (){
            // 验证姓名
            return "checkName"
        },
        checkEmail:function (){
            // 验证邮箱
            return "checkEmail"
        },
        checkPassword:function(){
            // 验证密码
            return "checkPassword"
        }
    }
}
checkObject().checkName() = "checkName" // 返回值不能再次被赋值会报错
console.log(checkObject()); // 打印出一个对象中有三个函数
console.log(checkObject().checkName); // 打印出其中一个函数
console.log(checkObject().checkName()); // 打印一个函数中的返回值s
```
## 类的方式
```javascript
let checkObject =function(){
        this.checkName = function (){
            // 验证姓名
            return "checkName"
        }
        this.checkEmail = function (){
            // 验证邮箱
            return "checkEmail"
        }
        this.checkPassword = function(){
            // 验证密码
            return "checkPassword"
        }
}
let check = new checkObject() // 在每次通过对象调用函数时 this 会指向对象中的函数   
console.log(check.checkName());
console.log(check.checkEmail());
console.log(check.checkPassword());

```
## 一个检测类
```javascript
var CheckObject = function(){};
CheckObject.prototype ={
    checkName: function (){
        //     验证姓名
            return "checkName"
    },
    checkEmail : function(){
        //    验证邮箱
        return  "checkEmail"
    },
    checkPassword:function(){
        //     验证密码
        return "checkPassword"
    }
}
let check = new CheckObject() // 在每次通过对象调用函数时 this 会指向对象中的函数 
console.log(check);
// this 永远指向指向一个对象 this的指向完全取决于函数调用的位置
function fun(){
    console.log(this.s);
}
var obj = {
    s:'1',
    f:fun
}
var s = '2';
obj.f(); //1
fun(); //2
```
## 链式方法
```javascript
var CheckObject = {
    checkName: function (){
        //     验证姓名"checkName"
        console.log("checkName")
        return this;
    },
    checkEmail : function(){
        //    验证邮箱  "checkEmail"
        console.log("checkEmail")
        return this;
    },
    checkPassword:function(){
        //     验证密码
        console.log("checkPassword")
        return this;
    }
};
CheckObject.checkName().checkEmail().checkPassword();
```
## 基于原型对象创建函数
```javascript
var CheckObject = function(){}
    CheckObject.prototype = {
        checkName: function (){
            //     验证姓名"checkName"
            console.log("checkName")
            return this;
        },
        checkEmail : function(){
            //    验证邮箱  "checkEmail"
            console.log("checkEmail")
            return this;
        },
        checkPassword:function(){
            //     验证密码
            console.log("checkPassword")
            return this;
        }
    } 
let check = new CheckObject()
check.checkName().checkEmail().checkPassword()
```
## 函数的祖先Function.prototype
```javascript
// 大写Function 内置对象
Function.prototype.method = function(name,fun){
      this[name] = fun;  
}
let methods = new Function()
methods.method('checkName',function(){ return 'checkName' });
methods.method('checkEmail',function(){ return 'checkEmail' });
methods.method('checkPassword',function(){ return 'checkPassword' });
console.log(methods) // ƒ anonymous() {}
console.log(methods.checkName()) // 模板函数返回值
console.log(methods.checkEmail()) // 模板函数返回值
console.log(methods.checkPassword()) // 模板函数返回值
```
