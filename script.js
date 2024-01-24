var tl = gsap.timeline()

tl.from("#nav h1, #nav2 h4, #nav3 i, #nav3 h4 ",{
    y:-50,
    opacity:0,
    stagger:0.05,
    // delay: 0.5
})
gsap.to("#page1 #img1,#page1 #img2,#page1 #img3,#page1 #img4,#page1 #img5",{
    y: 50,
    delay: 1,
    duration: 3,
    repeat: -1,
    yoyo: true
})
tl.from("#center h1",{
    y: 30,
    scale: 1.6,
    opacity: 0,
    stagger:0.03,
})
tl.from("#center p",{
    opacity:0,
    stagger: 0.01
})
tl.from("#page1 img",{
    scale: 0.8,
    stagger:0.02,
    opacity:0
})

var tl2 = gsap.timeline()

tl2.from("#main #page2 h1",{
    y: 30,
    scale: 1.6,
    opacity: 0,
    stagger: 0.3
})
tl2.from("#main #page2 p",{
    opacity:0,
    stagger: 0.01
})
var menu = document.querySelector("#nav #menu")
var menu_tab = document.querySelector("#page1 #res_side")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        menu_tab.style.right = "0"
        menu_tab.style.transition = "all ease 400ms"
        flag = 1
    }
    else{
        menu_tab.style.right = "-80%"
        menu_tab.style.transition = "all ease 400ms"
        flag = 0
    }
})