// Your code goes here
/* document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
})

console.log("The DOM has not loaded") */

document.addEventListener("DOMContentLoaded", function() {
    const p = document.querySelector('#text')
    p.textContent = "This is really cool!"
    console.log(p)
})