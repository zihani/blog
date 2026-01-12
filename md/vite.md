## vite 核心功能
1. cli
2. 热更新
3. typescript
4. 插件机制支持Rollup 生态
5. css Modules 和预处理器
6. 静态资源管理
7. Glob import & Dynamic import
8. 代码分包
9. 环境变量
## vite 配置通过@映射文件夹
### 配置文件夹映射
> 💡 Tips：通过@符号配置路径

### 方式一
```typescript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({ 
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
```
### 方式二
```typescript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
export default defineConfig({ 
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src')
    }
  },
})

```

## **vite配置http代理**
### 配置代理
> 💡 Tips：defineConfig中在server中配置，这样发请求时就会根据proxy中的配置发出

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({ 
  plugins: [
    vue(),
  ],
  server:{
    proxy:{
      "/api/":{
        target:"http://timemeaning.cn/",
        changeOrigin:true,
        secure:false,
        rewrite:(path)=>path.replace(/^\/api/,'') //将api转成空字符串
      }
    }
  }
})
```
## **配置支持的官方plugins**
Tips： 在vite.config 可以配置相关的插件 [https://www.**vitejs.net/plugins/**](https://www.vitejs.net/plugins/)

```vue
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

```
## 设置全局变量.env
> 💡 Tips: 在工程目录下创建.env 通常以.env  .env.development(开发环境) .env.production(生产环境)   .env.test（测试环境) （注意这个文件在必要的情况下不要提交github 或 gitee 在.gitignore 中添加一下) 在内网工程项目中除外

```bash
引入方式 
在vue3 中使用 
const baseURl = import.meta.env;

//获取.env 配置
开发环境对应 .env.development 中的全局变量配置
通过npm run dev 来获取

生产环境对应 .env.production 中的全局变量配置
通过 npm run build-only 来打包 
使用 npm run preview 来查看打包后的结果
```
## **assets引入svg**
> Tips：语雀支持全功能 markdown 语法，可以点击文档编辑页右下角小键盘查看全部支持的语法和快捷

```vue
<script setup lang="ts">
import logo from "@/assets/logo.svg"
import strSvg from "@/assets/logo.svg?raw"
  //路径
  console.log(logo);
  //字符串 通过v-html 渲染
  console.log(strSvg);
</script>
```
## scss安装
>  Tips： npm i sass -D

```sass
<style scoped lang="scss">
//定义变量
$primary-color:red;
.btn{
  color:$primary-color;
}
 
</style>
```
