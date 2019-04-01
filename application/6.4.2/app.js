const redis = require("redis");
const client = redis.createClient(6379, "127.0.0.1");

client.on("error", (err) => {
    console.log("Error: ", err);
});

// TODO: 存取String类型
client.set('name', 'kai xiang', redis.print);
client.get('name', (err, value) => {
    if(err) throw new Error(err);
    console.log('name：', value);
});

// TODO: 存取Hash数据
client.hmset('userinfo', {
    'photo': '1.jpg',
    'name': '开祥'
}, redis.print);

client.hgetall('userinfo', (err, value) => {
    if(err) throw new Error(err)
    Object.keys(value).forEach(key => {
        console.log(`key is "${key}", value is "${value[key]}"`)
    });
});

// TODO: list存取数据
client.lpush('rows', '123', redis.print);
client.lpush('rows', '456', redis.print);
client.lpush('rows', '789', redis.print);
client.lrange('rows', 0, -1, (err, value) => {
    if(err) throw new Error(err);
    console.log(value);
});

// TODO: Set存取数据
client.sadd('address', '北京', redis.print);
client.sadd('address', '北京', redis.print);
client.sadd('address', '北京', redis.print);
client.smembers('address', (err, value) => {
    if(err) throw new Error(err);
    console.log(value);
});