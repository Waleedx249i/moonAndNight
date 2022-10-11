let stars=document.getElementById("stars")
let moon=document.getElementById("moon")
let mountains3=document.getElementById("mountains3")
let mountains4=document.getElementById("mountains4")
let river=document.getElementById("river")
let boat=document.getElementById("boat")
let zoon =document.getElementById("zoon")

window.onscroll=function() {

    let value =scrollY
   stars.style.left = value + 'px';
   moon.style.top = value*4 + 'px';
   mountains3.style.top = value*2 + 'px';
   mountains4.style.top = value*1.5 + 'px';
   river.style.top = value + 'px';
   boat.style.top = value + 'px';
   boat.style.left = value*4+ 'px';
   zoon.style.fontSize = value + 'px';

   if (scrollY>=80) {
       
   
   zoon.style.fontSize = 80 + 'px';
   zoon.style.position='fixed';
if (scrollY>=360) {
    zoon.style.display='none';
} else {
    
    zoon.style.display='block';
}

   }
if (scrollY>=106) {
    document.querySelector('.main').style.background ='linear-gradient(#3e66c3 ,#1b0047)';
} else {


document.querySelector('.main').style.background ='linear-gradient(#18022d ,#000140)';
    
}

   



}