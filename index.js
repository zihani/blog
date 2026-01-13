const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const app = new Koa();
const PORT = 3000;

// 1. 静态资源中间件
// 这样设置后，可以直接通过 http://localhost:8081/assets/logo.png 访问
// 它会自动处理各种文件类型的 Content-Type
app.use(serve(path.join(__dirname, '.'))); 

// 2. 处理根路由返回 index.html
app.use(async (ctx) => {
    if (ctx.path === '/') {
        ctx.type = 'text/html';
        ctx.body = fs.createReadStream(path.join(__dirname, 'index.html'));
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Koa server running at http://localhost:${PORT}`);

    // 自动打开浏览器
    const openCommand = process.platform === 'win32' ? 'start' : 
                       process.platform === 'darwin' ? 'open' : 'xdg-open';
    
    exec(`${openCommand} http://localhost:${PORT}`);
});