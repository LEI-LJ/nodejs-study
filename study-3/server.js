require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const db = mongoose.connection
// 处理错误
db.on('error', (err) => {
    console.error(err);
})
// 相应连接
db.once('open', () => console.log('Connected'));
// 返回json数据
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
// 写接口
app.use('/subscribers', subscribersRouter)
app.listen(3000, () => {
    console.log('服务启动成功')
})
