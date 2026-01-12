## 创建vue3
> [https://cn.vuejs.org/guide/introduction.html](https://cn.vuejs.org/guide/introduction.html)

```bash
npm create vue@latest 

```
```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```
```bash
> cd <your-project-name>
> npm install
> npm run dev
> npm run build
```
## main.ts 挂载根组件
> vue3 可以创建多个根节点

```typescript
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import App2 from './App2.vue'
import router from './router'
//createApp 根组件选择
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app') // 挂载到#app
// app.mount('#app2') // 可以创建多个挂在点
```
。
## SetUp()
> setup()函数是一个新的选项，用于替代Vue 2中的created()和mounted()等生命周期钩子函数。setup()函数是使用组合式API（Composition API）的一部分，它允许你更灵活地组织和重用代码。

```javascript
<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
export default {
  setup(){
    const count = ref(0)
    console.log(count)
    return {
      count
    }
  },
  mounted() {
    console.log(this.count) // 0
  }
}
</script>
```
## **vue2和vue3响应式区别**
### vue2 响应式
💡 Tips：Vue2  响应式代理 defineProperty 类型无法支持对数组进行响应式更新
```javascript
const obj = {
  name:"name"
}
object.defineProperty(obj，"name"，{
  get(){
    console.log("读取")
  },
  set(){
    //执行dom 更新
    console.log("set") 
  }
})
```
### vue3 响应式
💡 Tips：Vue3 响应式 使用原声Proxy  相对于defineProperty 支持数据类型更加全面
```vue
new Proxy(obj，{
    get(){    },
    set(){    }
})

```
## **vue3 Option和composition的区别**
### Option api 的一些问题
1.如果组件代码量过大，比如在新增一些功能时需要在data 中进行定义在到methods中定义如果几千行代码这样做可能会上下滑动比较费时，从而影响效率和可维护性
2.使用混入（mixins） 如果有多个混入的话维护性会比较差混入中如果出现相同名称的变量可能会造成bug
3.在ts使用上会对this 这种黑盒在类型上无法定义
```vue
<template>
 <div>
  累加器：{{index}}
   <button @click="add"> add</button>
  {{msg}}
 </div>
</template>
<script>
// Option api 写法
import {defineComponent} from "vue"
export default defineComponent({
  data(){
    return{
       msg:"hello,vue3",
       index:0
    }
  },
  created(){
    this.initpage()
  },
  methods:{
      add(){
        this.index ++ 
      },
      initpage(){
         this.index = 1
      } 
  }
})
</script>

```

### Composition api 的一些优势 
1.更加简洁代码量减少体积会更小，对ts支持更加友好更加清晰，模块分明。
2.复用代码函数更加友好。
3.相对于Option api使用ts会更加兼容省去了this的类型兼容。
4.对于几千行代码的组件，如果新增功能可以直接定义使用即可。
```vue
<script setup lang="ts">
import { ref,onMounted } from 'vue'
let price = ref(0)
let name = ref("")
// 获取input元素
let input = ref<HTMLInputElement | null>(null)
interface Info{
  name:string,
  price:number  
}
const dataList = ref<Info[]>([])
function add(){
    dataList.value.push({
        name:name.value,
        price:price.value
    })
    price.value ++ 
}
onMounted(()=>{
    input.value.focus()
})
</script>
<template>
    <div class="Gallery">
        <div>
            <input ref="input" type="text" v-model="name">
        </div>
        <div>
             <button @click="add()">add info</button>
        </div>
        <ul>
            <li v-for="(item,index) in dataList" :key="item.price" >
              {{item.name}} --- {{item.price}}
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
</style>
```

## **使用composition的方式开发一个组件**
```typescript
<script setup lang="ts">
import { ref,onMounted } from 'vue'
let price = ref(0)
let name = ref("")
// 获取input元素
let input = ref<HTMLInputElement | null>(null)
interface Info{
  name:string,
  price:number  
}
const dataList = ref<Info[]>([])
function add(){
    dataList.value.push({
        name:name.value,
        price:price.value
    })
    price.value ++ 
}
onMounted(()=>{
    input.value.focus()
})
</script>
<template>
    <div class="Gallery">
        <div>
            <input ref="input" type="text" v-model="name">
        </div>
        <div>
             <button @click="add()">add info</button>
        </div>
        <ul>
            <li v-for="(item,index) in dataList" :key="item.price" >
              {{item.name}} --- {{item.price}}
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
</style>
```

## 
## 

