#### electron-books

使用electron开发的一个简单的数据展示应用

```
页面数据展示使用ejs模版引擎
bulma.css
```

#### how to run

```bash
yarn # 安装依赖项
npm start # 运行项目
```

#### issues

```js
//window中加载html字符串的方法
let win = new BrowserWindow({width:500,height:300})
win.setTitle(res.data.title)
win.loadURL('data:text/html;charset=utf-8,' + encodeURI(strHtml)) //把模版html文件加载在窗口中
win.on('close',()=>{
    win = null
})
win.show()
```