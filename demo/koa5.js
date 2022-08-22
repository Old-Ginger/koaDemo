const Koa = require('koa');
const app = Koa();

app.use(function *() {
    this.body = 'Hello World';
});
app.listen(3000);