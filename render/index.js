var ejs = require('ejs')//使用ejs模版
var Api = require('../api/books')
Api.getAllBooks(1,res=>{
    // console.log(res.data)
    // 注意渲染试图的路径实在当前文件夹下
    ejs.renderFile('./views/books/list.ejs',{books:res.data},(err,strHtml)=>{
        document.getElementById('app').innerHTML = strHtml
    })
})