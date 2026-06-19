var a=10;
var a=20; //redeclaration and reinitialization possible
a=35; //reinitialization 
var e="Js";
var f;  //only decalred-->undefined

let b="Welcome to";  //let b=30;  not possible redeclaration but reinitialization possible 
let g=40;
g=45;  //reinitialization possible in let
let h;  //declare in one line
h=50;   //initialize in another line


const c=25;
const d="hello"
//d="hi"; redec and reinitialization is not possible (constant)
//const c=40; 
// const h; then h=70; dec & init in diff lines not possible 


console.log(a);
console.log(f);
console.log(b,e);
console.log(g);
console.log(c);
console.log(d);
console.log(h);
