## 简介
💡** Tips：**TypeScript 通常用于代码类型检查，在大型项目中多人协作时编码时代码更加规范不容易出错，在node环境中可以通过命令tsc xxx.ts 来进行编译，首先会检查类型，编译成javaScript 进行执行
[**https://www.typescriptlang.org/**](https://www.typescriptlang.org/)
## 定义变量和复合类型
```typescript
let num:number = 1
let bool:boolean = true
let numArr:number[] = [1,2,3,5,6]
let arr:[number,string]= [1,"1"]
//复合类型可以为两种类型number|string
let age:number|string = 1
age = "1"
```
## 定义interface 
```typescript
interface articles{
  title:string,
  text?:string.  //？代表可选
}
let article1:articles = {
  title:"javascript"，
  text:"这里是js的教程"
} 
let article2:articles = {
  title:"javascript"
} 
interface addfn1{
  (a:number,b:number):number
}
let add1:addfn1 = (a,b)=>{
   retrun a + b
}
add1(1,1);

type addFn2 =  (a:number,b:number)=>numbr
let add2:addFn2=(a,b)=>{
  return a+b
}
add2(2,2);


```
## 泛型
```javascript
function noop1<T>(arg:T):T{
    return arg
}
let a = noop1("1")
let b = noop1(1)
let c = noop1(true)
let e = noop1({a:1})
```
## 结合使用
```typescript
interface Objtypes{
    title:string,
    text?:string,  //？代表可选
    name:string,
    age:number
}
let obj:Objtypes = {
    title:"标题",
    name:"张三",
    age:18,
    text:"正文"
}
//定义泛型
function getProperty<T,K extends keyof T>(obj:T,name:K):T[K]{
    return obj[name]
}
//推导出类型
let title = getProperty(obj,'title')
let age = getProperty(obj,'age')
let namea = getProperty(obj,'name')
```
## 抽离模块
路径 /src/types/userInfoType.ts
```typescript
interface Objtypes{
    title:string,
    text?:string,  //？代表可选
    name:string,
    age:number
}
export type { Objtypes }
```
在main.ts中引入
```typescript
import type { Objtypes } from '@/tyoes/Objtypes';
let obj:Objtypes = {
    title:"标题",
    name:"张三",
    age:18,
    text:"正文"
}
```


