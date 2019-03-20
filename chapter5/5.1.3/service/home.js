const login = async (username, address) => {
    let data = `
        <div>
            <h5>提交的表单数据为：</h5>
            <h6>username：${username}</h6>
            <h6>address：${address}</h6>
            <h6>返回主页：<a href="/">主页</a></h6>
        </div>
    `;
    return data;
}

module.exports = {
    login
}