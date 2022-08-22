// 切换路由
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    if (ctx.response.path !== '/') {
        ctx.response.type = 'html';
        ctx.response.body = '<a href="/">Indx Page</a>';
    } else {
        ctx.response.body  = 'Hello World';
    }
}

app.use(main);
app.listen(3000);