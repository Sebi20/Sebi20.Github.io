//  Email sending section
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

//  Scroll to the top section
let button = document.createElement("button");
button.innerHTML = "Scroll to top";
button.style.backgroundColor = 'green';
button.style.position = "fixed"
button.style.zIndex = "2";
button.style.right = "120px";
button.style.bottom="15px";
button.style.display = 'none';
button.style.transition = "1s";
button.style.color = "black";
button.style.width = "120px";
button.style.height = "40px";
button.style.fontSize = "17px";
button.style.borderRadius = "5px";
button.style.border = "none";
button.style.animation = "scrollBounce 0.3s 5";

document.body.appendChild(button);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

button.addEventListener('click', function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
})


//  Responsible for the copyright year being accurate on the site
let yearSpan = document.getElementById('year');
let year = new Date().getFullYear();
yearSpan.textContent = year;

//  Skill icons animation section
let skill = document.querySelectorAll('.skill');
const projects = document.querySelectorAll(".projects");
const headerImg = document.querySelectorAll('.headerImg');

for (let i in skill){
    skill[i].style.animation = "rotateSkills 1s 2"; 
    skill[i].animationTimingFunction = "ease-out"
}

















