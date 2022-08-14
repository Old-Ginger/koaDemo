// Koa

const Koa = require('koa');
const app = new Koa();
// koa提供一个Context对象，表示一次对话的上下文。通过加工这个对象就可以控制展示内容。
const main  = ctx => {
    // ctx.response.body = 'Hello World!'; //ctx.response代表HTTP response，可得出 ctx.request代表HTTP request
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>';
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = {
            data: 'Hello World!'
        };
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = {
            data: '<p>Hello World</p>'
        };
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
}
app.use(main);
app.listen(3000);