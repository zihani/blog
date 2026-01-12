## 简介
Tips：pinia是用于vue3状态管理库是和vuex一样的库 官方地址[https://pinia.vuejs.org/zh/](https://pinia.vuejs.org/zh/)
概念： 1.store 2.getter 3,action
## 安装
```bash
npm install pinia@next
```
## 注册使用pinia
Tips：pinia提供了两种写法composition，option 兼容了vue3 的语法。
注册pinia
```bash
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue';
const pinia = createPinia()
const app = createApp(App);
app.use(pinia);
```
路径src/stores/counter.ts
Tips：composition 
```bash
import { count } from 'console'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => {
        count.value++
    }
    return {
        count,
        doubleCount,
        increment
    }
})
```
Tips：option
```bash
import { count } from 'console'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const countOptionStore = defineStore('counter-option', {
    state: () => {
        return {
            count:0
        }
    },
    getters: {
        doubleCount:state=>state.count*2
    },
    actions: {
        increment() {
            this.count++
        }
    }
})

```
## 在vue组件或（js，ts）中调用
```bash
import { useCounterStore } from "@/stores/counter" 
const counterStore = useCounterStore() 
counterStore.count.value  //获取
counterStore.doubleCount() 
counterStore.increment()
```

