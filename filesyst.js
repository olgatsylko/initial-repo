const fs = require('fs-extra')

function crDir (dir){
  fs.ensureDir(dir, err => {
    console.log('Error message ' + err);
    console.log('Dir is created');
  })
}
function remDir (dir){
  fs.remove(dir, err => {
    if (err) return console.error('Error message 2 ' + err)
    console.log('Directory is removed!')
  })
}
function crFile (file){ 
  fs.ensureFile(file, err => {
  console.log('Error message 3 ' + err);
  console.log('File is created');
  })
}
async function moveFile(dir1, dir2){
  fs.move(dir1, dir2, err => {
  if (err) return console.error('Error message 4 ' + err)
  console.log('Moved!')
  })
}
function remFile(file){
  fs.remove(file, err => {
    if (err) return console.error('Error message 5 ' + err);
    console.log('File is removed!')
  })
}

exports.crDir = crDir;
exports.remDir = remDir;
exports.crFile = crFile;
exports.remFile = remFile;
exports.moveFile = moveFile;