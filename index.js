const fs = require('fs');
const path = require('path');
let marked = require('marked');


const mdLinks =(path=> {
  let ret = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {

      if (err) return reject(err);
      return resolve(data);

    })

    
  });
  return ret

})


mdLinks(process.argv[2]).then(datos =>{



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

  console.log(links);
   
//})
  

})
.catch(err =>{
  console.log(err);
  
})



if (require.main === module) {
  mdLinks(process.argv[2]).then;
  
} else {
  module.exports = mdLinks;
};


// ret 
// .then(console.log()
// )
//Crear funcion para extrar links


//}


module.exports = () => {
  // ...
};
