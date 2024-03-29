const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) { 
      callback(data)
    } else {
      callback(undefined)
    }
  })
};  

module.exports = breedDetailsFromFile;
