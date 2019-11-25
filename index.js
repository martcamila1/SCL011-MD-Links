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




module.exports = () => {
  // ...
};
