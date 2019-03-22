class account {
    async login(username, userpsd, useraddress){
        let data = Object.create(null);
        if(username == 'test01' && userpsd == '12345678' && useraddress == '杭州'){
            data = {
                code: 200,
                msg: { username, userpsd, useraddress }
            }
        }else{
            data = {
                code: -1,
                msg: {
                    title: '登录失败',
                    content: '请输入正确的账户信息'
                }
            }
        }
        return data;
    }
}

module.exports = account;