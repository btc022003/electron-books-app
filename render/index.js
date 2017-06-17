const ejs = require('ejs')//使用ejs模版
const Api = require('../api/books')
const BrowserWindow = require('electron').remote.BrowserWindow

Api.getAllBooks(1,res=>{
    // console.log(res.data)
    // 注意渲染试图的路径实在当前文件夹下
    ejs.renderFile('./views/books/list.ejs',{books:res.data},(err,strHtml)=>{
        document.getElementById('app').innerHTML = strHtml
    })
})


document.body.onclick = function(e){
    let target = e.target
    if(target.classList.contains('book-item')){
        // alert(target.dataset.id)
        Api.getDetail(target.dataset.id,res=>{
            ejs.renderFile('./views/books/detail.ejs',{article:res.data},(err,strHtml)=>{
                let win = new BrowserWindow({width:500,height:300})
                win.setTitle(res.data.title)
                win.loadURL('data:text/html;charset=utf-8,' + encodeURI(strHtml)) //把模版html文件加载在窗口中
                win.on('close',()=>{
                    win = null
                })
                win.show()
            })
        })
    }
}