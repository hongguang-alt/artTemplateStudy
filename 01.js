const template = require('art-template')
const path = require('path')
let views = path.join(__dirname,'views','html.art')
const html = template(views,{
   data:{
       name:'张三',
       age:10,
       content:'<h1>我最好看</h1>'
   }
})
console.log(html)