// main.js
this.alert('this Page is only read thats Why i Did not coded much js Code so the Controll is always to user Option'+"\n for Any Project Request please Contact me");
// JavaScript for responsive navigation
setTimeout(() => {
    const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});
},3000);
window.addEventListener('scroll', () => {

});
window.addEventListener('scrollend',() => {

});
function langInfos(object){
    const indicate=document.getElementById('country');
   switch(object){
        case "": break;
        case "german":
            indicate.src='./backgrounds/germancountry.jpeg';
            break;
        case "english":
            indicate.src='./backgrounds/englishcountry.jpg';
            break;
        case "spanish":
            indicate.src='./backgrounds/spanishspeak.png';
            break;
   }
}
window.addEventListener('resize', () => {document.body.replaceWith=window.innerWidth})