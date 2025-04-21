var tl = gsap.timeline();
var tl2 = gsap.timeline();

tl
.from('.heading h1',{
    y:100,
    stagger:.3,
    opacity:0,
    duration:.8
})
.from('nav',{
    y:-50,
    opacity:0,
    duration:1
})
.from('nav h3',{
    x:-50,
    opacity:0,
    stagger:.2,
    duration:1
});


tl2
.from('.right img',{
    height:0,
    duration:1,
    delay:.5

})
.from('p',{
    y:50,
    opacity:0,
    duration:.7,
    clearProps: "opacity,transform" 
})
.from('button',{
    opacity:0,
    duration:1,
    clearProps: "opacity,transform" 
});