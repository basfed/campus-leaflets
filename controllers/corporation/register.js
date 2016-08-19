// 模型
var Corporation = require('../../models/corporation.js');

module.exports={
    register: function *() {
        yield this.render('corporation/register', {
            title: '单位注册'
        });
    },
    doRegister: function *() {
        try {
            console.log(this.request.body);
            // JSON.stringify() 方法可以将任意的 JavaScript 值序列化成 JSON 字符串
            this.body = JSON.stringify(this.request.body, null, 2);
            // this.redirect('/');
        } catch(e) {
            this.body = "注册失败";
            console.log(e);
        }
    }
};