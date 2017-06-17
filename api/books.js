const axios = require('axios')

const bookServices = {}

/**
 * 调用数据列表
 */
bookServices.getAllBooks = function(page=1,cb){
    axios.get('http://penkuoer.com/api/v1/book/get_books_by_page.json?page='+page)
        .then(res=>{
            cb(res.data)
        })
}

/**
 * 获取详情
 */
bookServices.getDetail = function(id,cb){
    axios.get('http://penkuoer.com/api/v1/book/get_book_detail.json?id='+id)
        .then(res=>{
            cb(res.data)
        })
}
module.exports = bookServices