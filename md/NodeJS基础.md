## 介绍
> 💡 Tips：node js 由Ryan Dahl 开发，基于Chrome的V8引擎。Node.js采用事件驱动和非阻塞I/O模型，这使得JavaScript能够用于服务器端编程。在2009年发布第一个版本 

## 安装
**地址**[**https://nodejs.org/en**](https://nodejs.org/en)
**或者通过nvm来安装**
## node 特性
💡 Tips：高性能事件驱动，异步IO，可用于服务器端开发，前端代码整合和构建前端开发环境项目
## nodejs三大系统模块
### fs文件读写
💡 Tips：用于对文件或大型文件的读写
```javascript
//文件读写操作 fs 
const fs = requier('fs')
// 读取
fs.readfile('./a.txt',(err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
// 写入
fs.writeFile('b.text','月薪1快'{flag:"追加"}，(err)=>{
  if(err){
    throw err
  }
})
// 同步方式
let data = fs.readFileSync('./a.text')
console.log(data)
// 读取文件名称
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
3.自定义导出模块
exports
module
require
// 暴露模块
exports.a = 1 //b.js
// 引用模块
const b = require('/b')
b.a // 打印1
// 批量暴露模块
module.exports={
  // 可以为函数 以可以为clas 
  a:1,b:2
}
```
### path 路径操作
```
const path = require('path')
path.dirname('/获取路径')
path.basename('/获取文件名')
path.extname('/获取文件后缀')
path.resolve('/node/a/b/c','../../','b');
// 结果 node\a\b
//ext //扩展名
// path.basename(path[, ext])
const path = require('path')
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```
### http模块
```
let http = require("http")
http.createServer((req,res)=>{
     req.url // 获取url 地址
    req.end("index") //返回值
   console.log(req.url); 

}).listen(3000)
```
## 路径地址获取
```
// 文件名全路径
console.log(__filename);

//文件名路径
console.log(__dirname);`
```
## 模块引入
```
var mode = require(./xx.js)//引入模块
```
## 变量解构赋值
```javascript
var  a = 1,b = 2,c = 3;
var [a,b,c] = [1,2,3]; 
console.log(a,b,c)  // 1，2，3
let [a,b,c] = [,123,];
console.log(a,b,c)  // undefined 123 undefined
let [a=111,b,c] = [,123,];
console.log(a,b,c); // 111 123 undefined
let {foor,bar} = {bar:'bb',foor:'aa'} //会根据键值对的方式赋值
console.log(foor,bar)  //aa bb 
let {foor:beiming,bar} = {bar:'bbb',foor:'aaa'} //:号变量名 重命名
console.log(beiming)
let [a,b,c,d,e] = "hello";  //会将字符串进行拆分,并一一对应每一个变量值
console.log(a,b,c,d,e); // h e l l o
```
## 字符串处理方式
```javascript
let {length} = "hi";   //获取字符串长度
console.log(length);  //2
/**
 * 字符串相关扩展
 * includes()  // 判断字符串中是否包含此“字符”,第二个参数是从地几个字符开始匹配 如果有则输出true 否则输出false
 * startsWith()// 判断字符串是否已特定的字符串开始
 * endsWidth()  // 判断字符串是否已特定的字符串结尾判断后缀名
 */
console.log("Hell world".includes("world",7)) //false
let url = 'admin/index.html'
console.log(url.startsWith('admin')) // true
 // 模板字符串
var obj = {
     name:"张三",
     age:"28",
}
let test = `<div>${obj.name}<div/><span>${obj.age}<span/>`
console.log(test)
```
## 函数扩展
```javascript
//参数默认值
function params (name= "默认值"){
    console.log(name)
} 
params("新赋值的内容")
//...扩展运算符
function ro (a,...b){
   console.log(a,b) // qwe [ 12332132 ]
}
ro("qwe",12332132)
var foo = (...ooe)=>{
   console.log(ooe) [ 123, 321 ]
}  
foo(123,321)
//箭头函数
// 写法一
let foo = () => console.log('hello');
foo();

//写法二
let foo = (a,b)=> console.log(a+b);
foo(1,1); 

//写法三
let foo = (a,b)=>{
    var c = 3
    console.log(a+b+c);
} 
foo(1,1);

//写法四
var foo = ()=> this.a = 10 
console.log(foo())

function foo(){
    //使用call调用foo时，这里的this其实就是call的第一个参数
    console.log(this.num);
}
foo.call({num:1}) 1
// forEach
let arr = [123,456,789]
arr.forEach((element,index)=>{
   console.log(element,index);
});
//类与继承
方式一
function Animal(name,age){
    this.name = name;
    this.age = age;
}
Animal.prototype.showName = function(){
    
    console.log(this.name)
}
var a = new Animal('TOm');
var b = new Animal('jie rui');
let arr = [a,b]
console.log(b)// Animal { name: 'jie rui', age: undefined }

构造函数
class Animal{
      //静态方法（静态方法只能通过类名调用，不能使用实例对象调用）
    static showinfo(){
        let a = 100
        console.log(a)// 100
    }
     constructor(name){
         this.name = name;
     }
     showName(){
         console.log(this.name)
     }
}
var a = new Animal('Tom')
var b = new Animal('jier')   
Animal.showinfo(); //静态方法
//类的继承extends
class Dog extends Animal{
    constructor(name,color){
        super(name);//super用来调用父类
        this.color = color;
    }
    showColor(){
        console.log(this.color);
    }
}
let d= new Dog("gouyi","黄色")
d.showColor() //黄色
d.showName()  //gouyi
a.showName()  //Tom
b.showName()  //jier
```
## Buffer
```javascript
//Buffer（缓冲区）是系统两端处理速度平衡（从长时间尺度上看）时使用的。它的引入是为了减小短期内突发I/O的影响，起到流量整形的作用。比如生产者——消费者问题，他们产生和消耗资源的速度大体接近，加一个buffer可以抵消掉资源刚产生/消耗时的突然变化。
-----------------------------------------
 * Buffer 的使用
 * 实例化
 * Buffer.from(array)
 * Buffer.from(string)
 * Buffer.alloc(size) // 设定空间
 * 功能方法
 * Buffer.isEncoding() 判断是否支持此编码格式
 * Buffer.isBuffer() 判断是否为Buffer
 * Buffer.byteLength() 返回指定编码的字符长度，默认utf8
 * Buffer.concat() 将一组Buffer对象合并为一个Buffer对象
 * 实例方法
 * write() 向buffer对象中写入内容
 * slice() 截取新的buffer对象
 * toString() 把buf对象转成字符串
 * toJSON() 把buf 对象转成json形式的字符串
 */
 //8K是一个界限，创建buff的大小小于8KB，使用allocPool()
 let buf = Buffer.alloc(5) // 会对分配的空间进行填充，保证新分配的空间不会含有以前的数据。log(00 00 00 00 00)
 buf.write('hello wrod')// 写入数据

 let buf = Buffer.from('hello'); //直接写入数据 无需分配空间
 buf.slice(2,3) //截取 第2个字符开始截取到第3个字符
```
