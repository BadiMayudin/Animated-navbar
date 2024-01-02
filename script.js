var active = 3;

var pciracle = document.querySelectorAll(".pcircle");
var second = document.querySelectorAll(".second");

// gsap.to (pciracle[active-1],{
//     opacity: 1
// })
 
pciracle.forEach(function(val,index){
    val.addEventListener("click",()=>{
      gsap.to("#circle" , {
        rotate:(3-(index+1))*15,
        duration:1,
        ease:Expo.easeInOut
      })
    
      gray()
      gsap.to(pciracle[index],{
        opacity:0.9
      })
      sec()
      gsap.to(second[index], {
        opacity:1
      })
    //   gsap.to(second[index], {
    //       opacity:1
    //    })
    })
})
function gray(){
    gsap.to(pciracle,{
        opacity:0.3
    })
}
function sec(){
    gsap.to(second, {
        opacity:0.4
     })
}
// gsap.to("#circle" , {
//     rotate:'30deg',
//     duration:1
// })
