const template = require('art-template')
const dateformat = require('dateformat')
const path = require('path')


template.defaults.root=path.join(__dirname,'views')
template.defaults.imports.dateformat = dateformat



let html =  template('03',{
    time:new Date()
})
console.log(new Date(),html)