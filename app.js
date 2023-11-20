const express = require('express');
const ejs = require('ejs');
const app = express();
const db = require('./model/db')


app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", 'ejs');
app.set('views', './views');
app.use('/public',express.static(__dirname + '/public'));

const mainRouter = require('./router/mainRouter');
app.use('/',mainRouter);

app.listen(3000,function(req,res){
    db.sequelize.sync({force:false})
    console.log("서버 실행")
})
