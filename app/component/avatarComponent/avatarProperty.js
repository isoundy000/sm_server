/**
 * Date:  2019/7/23
 * Author: admin
 * Description: avatar属性定义
 */
let persistProperties = {
    openid: "",  // 微信openid
    uid: 0,  // 角色数字id
    level: 1,  // 等级
    name: "unknow",  // 名字
    gender: 0,  // 性别：0：未知 1：男性 2：女性
    avatarUrl: "",  // 用户头像图片的 URL
    gold: 0,  // 元宝
    silver: 0,  // 银两
};

module.exports = {
    persistProperties: persistProperties
};
