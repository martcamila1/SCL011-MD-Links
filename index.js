const mdlinks = require('./md-links.js')

const path = require('path');
//console.log(mdlinks);

let path1 = process.argv[2];
let ruta2 = path.normalize(path1)

// en este archivo "verificar lo que el usuario escribe"


 mdlinks.mdLinks2((path1)
 .then(result=>{
    result.map(x=>{
       x.href
    })
  
 })
 )
