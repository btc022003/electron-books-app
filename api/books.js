const axios = require('axios')

const bookServices = {}

/**
 * 调用数据接口
 */
bookServices.getAllBooks = function(page=1,cb){
    axios.get('http://penkuoer.com/api/v1/book/get_books_by_page.json?page='+page)
        .then(res=>{
            cb(res.data)
        })
}
module.exports = bookServices