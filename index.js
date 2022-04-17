let skill = document.querySelectorAll('.skill');
const projects = document.querySelectorAll(".projects");

// for(let i = 0; i < projects.length; i++){
//     window.addEventListener('scroll', function(){
//         projects[i].style.animation = "spinProjects 2s 1"
//     })
// }

for (let i in skill){
    skill[i].style.animation = "rotateSkills 1s 2";
    skill[i].animationTimingFunction = "ease-out"
}




























