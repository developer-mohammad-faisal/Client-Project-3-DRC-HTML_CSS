var left = document.querySelector(".cardparent3");
// alert("hi");


left.style.scrollBehavior="smooth"

function cardleftarrow(){
    var left = document.querySelector(".cardparent3");

    left.scrollBy(-350, 0)
    left.style.scrollBehavior="smooth"
    console.log("leftarrow");


}




function cardrightarrow(){
    var right = document.querySelector(".cardparent3");

    right.scrollBy(350, 0)

    right.style.scrollBehavior="smooth"


}