function locoJS(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locoJS();

function cursorAnime(){
    let page1 = document.getElementById("page-1");
page1.addEventListener("mousemove",function(deets){
    gsap.to("#cursor",{
        x:deets.x,
        y:deets.y,
        duration:1.5,
        ease: "power4.out",
    })
})
page1.addEventListener("mouseenter",function(deets){
    gsap.to("#cursor",{
        scale:1,
        opacity:1,

    })
})
page1.addEventListener("mouseleave",function(deets){
    gsap.to("#cursor",{
        scale:0,
        opacity:0,

    })
})
}
cursorAnime();

function page1Anime(){
    
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

}
page1Anime();

function menuAnime(){
    let menu = document.getElementById("menubtn");
let close = document.getElementById("close");

menu.addEventListener("click",function(){
    gsap.to("#menu",{
        transform:"translateY(0%)",
    });
    gsap.from("#menu-video",{
        scale:0,
        delay:0.2,
    });
    gsap.from("#textContent h2",{
        y:50,
        opacity:0,
        delay:0.5,
        duration:0.7,
        stagger:0.2,
    })
    gsap.from("#bottom",{
        x:50,
        delay:0.4,
        duration:0.7,
        opacity:0,
    })
})
close.addEventListener("click",function(){
    gsap.to("#menu",{
        transform:"translateY(-100%)",
        duration:1,
    })
})

document.body,addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to("#menu",{
            transform:"translateY(-100%)",
            duration:1,
        })
    }
})
}
menuAnime();

gsap.from("#page2-top",{
    y:15,
    opacity:0,
    duration:0.2,
    scrollTrigger:{
        scroller:"#main",
        trigger: "#page2-top",
        start:"top 80%",
        end:"top 75%",
        // markers:true,
        scrub:2,
    }
})

gsap.from(".line div",{
    transform:"translateX(-200%)",
    duration:2,
    scrollTrigger:{
        scroller:"#main",
        trigger: "#page2-top",
        start:"top 95%",
        end:"top 75%",
        // markers:true,
        scrub:2,
    }
})

gsap.from("#page2-text h2",{
    y:40,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        scroller:"#main",
        trigger: "#page2-top",
        start:"top 70%",
        end:"top 55%",
        // markers:true,
        scrub:2,
    }
})