var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);

fs.appendFile('greeting text', 'Hi ' + user.username + '!\n',()=>{
    console.log('file is created');
});