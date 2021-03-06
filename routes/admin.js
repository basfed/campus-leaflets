// 控制器
var userLogin = require('../controllers/user/login.js');
var adminIndex = require('../controllers/admin/index.js');
var adminUsers = require('../controllers/admin/users.js');

// 中间件
var body = require('koa-body')({ multipart: true });

module.exports = function (router) {
    // 审核单位（管理员首页）
    router.get('/admin/', userLogin.adminLogined, adminIndex.index);
    router.get('/admin/verifyCorporation/:id/', userLogin.adminLogined, adminIndex.verify);
    router.post('/admin/doVerifyCorporation/', userLogin.adminLogined, body, adminIndex.doVerify);

    // 用户管理
    router.get('/admin/users/', userLogin.adminLogined, adminUsers.userList);
    router.get('/admin/deleteUser/:id/', userLogin.adminLogined, adminUsers.deleteUser);
    
    // 发布公告
};