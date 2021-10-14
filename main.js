const dir = require ('./filesyst');

let direct1 = './testDir1';
let direct2 = './testDir2';
let file1 = './testDir1/testFile.txt';
let file2 = './testDir2/testFile.txt';

function foo2 (action, callback){
  setTimeout (() => {
    if (callback) callback (action)
  }, 2000)
}

foo2 (dir.crDir(direct1), () => {
  foo2 (dir.crFile(file1), () => {
    foo2 (dir.crDir(direct2), () => {
      foo2 (dir.moveFile(file1, file2), () => {
        foo2 (dir.remFile(file2), () => {
          foo2 (dir.remDir(direct1), () => { 
            foo2 (dir.remDir(direct2)); 
          })
        })
      })
    })
  })
});

// function foo (){
//   const dir1 = dir.crDir(direct1);
//   console.log('Directory 1 is created!');
//   dir.crFile(file1);
//   console.log('File is created!');
//   const dir2 = dir.crDir(direct2);
//   console.log('Directory 2 is created!');
//   dir.moveFile(file1, file2);
//   dir.remFile(file2);
//   dir.remDir(dir1);
//   dir.remDir(dir2);
// }
// foo();
   