var tl = gsap.timeline()

tl.from("#nav h1, #nav2 h4, #nav3 i, #nav3 h4 ",{
    y:-50,
    opacity:0,
    stagger:0.05,
    // delay: 0.5
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
