const dir = require ('./filesyst');

let direct1 = './testDir1';
let direct2 = './testDir2';
let file1 = './testDir1/testFile.txt';
let file2 = './testDir2/testFile.txt';

function foo (action, callback){
  setTimeout (() => {
    if (callback) callback (action)
  }, 2000)
}

foo (dir.crDir(direct1), () => {
  foo (dir.crFile(file1), () => {
    foo (dir.crDir(direct2), () => {
      foo (dir.moveFile(file1, file2), () => {
        foo (dir.remFile(file2), () => {
          foo (dir.remDir(direct1), () => { 
            foo (dir.remDir(direct2)); 
          })
        })
      })
    })
  })
});