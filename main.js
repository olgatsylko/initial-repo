const dir = require ('./filesyst');

var direct1 = './testDir1';
var direct2 = './testDir2';
var file1 = './testDir1/testFile.txt';
var file2 = './testDir2/testFile.txt';

function foo (){
  const dir1 = dir.crDir(direct1);
  console.log('Directory 1 is created!');
  dir.crFile(file1);
  console.log('File is created!');
  const dir2 = dir.crDir(direct2);
  console.log('Directory 2 is created!');
  dir.moveFile(file1, file2);
  dir.remFile(file2);
  dir.remDir(dir1);
  dir.remDir(dir2);
  console.log('Merge with parent branch');
}
foo();
