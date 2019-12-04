const fs = require('fs');
//const path = require('path');
const marked = require('marked');
const fetch = require ('node-fetch') 



//Condicion que verifica que si es un archivo que termina en  md

const md = (path)=>{

if(path.slice(-3) == ".md"){
console.log(path)

}
else{
  console.log("error");
  
}};

//let path1 = process.argv[2];

//Crear Funcion general
let mdLinks=(path1 , options )=>{
let promiseMdLinks= new Promise((resolve,reject)=> {   
    if(!path1 || !options){
       reject(console.log("Escribe una ruta"));
        //return resolve(console.log("dsajdhsa"));
    }
        fs.stat(path1, (err, stats) => {
            if (stats.isFile() ) {
               //(console.log("es un archivo"));
               resolve(mdLinks2())
            }
            else {
                console.log("es un directorio");
                
            }
           });        
        })
        return promiseMdLinks
}
// mdLinks(path1)

//Crear Funcion para leer directorios


//Funcion para leer archivos
const mdLinks2 =(path1=> {
  let ret = new Promise((resolve, reject) => {
    fs.readFile(path1, 'utf8', (err, data) => {

      if (err) return reject(err);
      return resolve(data);

    })

    
  });
  return ret

})


// // //Funcion para extraer href ,text , file
const arraysLinks = (() =>{
let printsLinks = new Promise((resolve, reject) =>{
mdLinks2(process.argv[2])
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



// Funcion para la opcion validate
let validate =() =>{
let promiseFetch = new Promise((resolve ,reject)=>{
arraysLinks().then((links)=>{
let linksFechResult=links.map(element => {
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

})
return promiseFetch
}

 validate()

 // if (require.main === module) {
//   mdLinks(process.argv[2]).then;  

// } else {
//   module.exports = mdLinks;
// };


module.exports = mdLinks2;
