function generaterandomcolor(){
let r=Math.floor(Math.random()*256);
let g=Math.floor(Math.random()*256);
let b=Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`;
}
let colorbox=document.getElementById("colorbox");
var body=document.body;
colorbox.addEventListener('mouseenter', function() {
 var randomcolor= generaterandomcolor();
 body.style.background=randomcolor;  


})