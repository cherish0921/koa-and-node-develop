const login = async (email, username, userpsd) => {
    let data = Object.create(null);
    if(email == '1058628890@qq.com' && username == 'kaixiang' && userpsd == '12345678' ){
        data = {
            code: 200,
            msg: '校验成功'
        }
    }else{
        data = {
            code: -1,
            msg: '账户信息输入错误'
        }
    }
    return data;
}

module.exports = {
    login
}