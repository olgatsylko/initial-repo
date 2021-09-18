const fs = require('fs-extra')

function crDir (dir){
  return fs.ensureDirSync(dir);
  }

function remDir (dir){
   fs.removeSync(dir);
   console.log('Directory is removed!');
}

function crFile (file){
  fs.ensureFileSync(file);
}

async function moveFile(dir1, dir2){
  fs.moveSync(dir1, dir2, { overwrite: true })
  console.log('File is moved!');
}

function remFile(file){
  fs.removeSync(file);
  console.log('File is removed!');
}

exports.crDir = crDir;
exports.remDir = remDir;
exports.crFile = crFile;
exports.remFile = remFile;
exports.moveFile = moveFile;