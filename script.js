let page = document.getElementById("page-1");
page.addEventListener("mousemove",function(deets){
    gsap.to("#cursor",{
        x:deets.x,
        y:deets.y,
        duration:0.5,

    })
})



var h1Text = document.getElementById("head");
var splittedh1 = h1Text.textContent.split("");
var halfLength = Math.floor(splittedh1.length/2);
var text = "";
splittedh1.forEach(function(e){
        text += `<span>${e}</span>`;
})
h1Text.innerHTML = text;

gsap.from("nav h4",{
    transform:"translateX(35%)",
    opacity:0,
    duration:2.5,
    ease: "expo.out",

})

gsap.from("#head span ",{
    y:100,
    duration:2,
    opacity:0,
    ease: "expo.out",
    stagger:0.1,
})

