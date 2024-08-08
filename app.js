function callback(){
    console.log('welcome');
}

const add=function(a,b,callback){
    var result=a+b;
    console.log('result: '+result); //main work comp
    callback();   //yeh main funct mei call isliye callback
}

//add(3,5,callback);

add(2,3,() => console.log('add completed'));