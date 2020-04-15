const template = require('art-template')
const path = require('path')
let views = path.join(__dirname,'views','html.art')
const html = template(views,{
   data:{
       name:'张三',
       age:20
   }
})
console.log(html)