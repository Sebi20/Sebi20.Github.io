const btn = document.getElementById('submitMessageBtn');

document.getElementById('emailForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_w6sxi8d';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});




let skill = document.querySelectorAll('.skill');
const projects = document.querySelectorAll(".projects");
const headerImg = document.querySelectorAll('.headerImg');

// for(let i = 0; i < projects.length; i++){
//     window.addEventListener('scroll', function(){
//         projects[i].style.animation = "spinProjects 2s 1"
//     })
// }

for (let i in skill){
    skill[i].style.animation = "rotateSkills 1s 2";
    skill[i].animationTimingFunction = "ease-out"
}
























