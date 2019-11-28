const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require ('node-fetch') 
//let fetchUrl = require("fetch").fetchUrl


//Condicion que verifica que si es un archivo que termina en  md

// const md = (path)=>{

// if(path.slice(-3) == ".md"){
// console.log(path)

// }
// else{
//   console.log("error");
  
// }};


//Funcion para leer archivos
const mdLinks =(path=> {
  let ret = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {

      if (err) return reject(err);
      return resolve(data);

    })

    
  });
  return ret

})

//Funcion para extraer href ,text , file
const arraysLinks = (() =>{
let printsLinks = new Promise((resolve, reject) =>{
mdLinks(process.argv[2])
.then(datos =>{
  let renderer = new marked.Renderer();
  let links = [];  
  renderer.link= function(href, title, text) {
      links.push(
        {href:href,
        text:text,
        file:process.argv[2],
        });
  };
  
  marked(datos, { renderer: renderer });
  
  console.log(links)
  
 return resolve(links)

})

.catch(err =>{
 reject (console.log(err));
  
})

})
   return printsLinks 
})

arraysLinks()


let validate =() =>{
//let promiseFetch = new Promise((resolve ,reject)=>{
arraysLinks().then((links)=>{
links.map(element => {
    return fetch(element.href).then(res =>{
       // v.status=res.statusText;
       if(res.ok){
       console.log(element.href +  res.status);
       console.log(res.statusText);
       // v.statusCode = res.status;
       }
       else{
        console.log(element.href  +  res.status)
        console.log(res.statusText);
       } 
      }).catch((err)=>{
          console.log(err.statusText );
       // v.status = err
      }) ;
    
});    

})

}

validate()

if (require.main === module) {
  mdLinks(process.argv[2]).then;  

} else {
  module.exports = mdLinks;
};


module.exports = () => {
  // ...

};
