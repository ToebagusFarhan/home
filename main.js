window.addEventListener('load', () => {

  alert("Website ini tidak sepenuhnya responsif, mohon untuk membuka di desktop/laptop.")
});

const text =document.getElementById('text')
const maxvalue = 300
window.addEventListener('scroll', () =>{
  let value = window.scrollY;
  if (value < maxvalue){
  text.style.marginTop = value * 2.5 + 'px';
  }
})

//untuk scroll smooth ketika home di klik
const homeLink = document.querySelector('.navigation a[href="#home"]');
const links = document.querySelectorAll('.navigation a');
homeLink.addEventListener('click', () => {
  event.preventDefault();
  let homesect = document.querySelector('#home');
  homesect.scrollIntoView({ behavior: 'smooth' });
});

//untuk scroll smooth ketika about me di klik
const aboutMeLink = document.querySelector('.navigation a[href="#about-me"]');
aboutMeLink.addEventListener('click', () => {
  event.preventDefault();
  let aboutmesect = document.querySelector('#about-me');
  aboutmesect.scrollIntoView({ behavior: 'smooth' });

});
const contactLink = document.querySelector('.navigation a[href="#contact"]');
contactLink.addEventListener('click', () => {
  window.open('contact.html')
});

// untuk hover effect yang stay
var navLinks = document.querySelectorAll('.navigation a');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

//untuk toggle button skill
const button = document.querySelector('#tbutton');
const skillDiv = document.querySelector('.skill');
const closeBtn = document.querySelector('#tbutton2');
const cbutton = document.querySelector('#tbutton3');
const certDiv = document.querySelector('.container');
const closeBtn2 = document.querySelector('#tbutton4');

//button skill
button.addEventListener('click', function() {
  if (skillDiv.style.display === 'none') {
    skillDiv.style.display = 'block';
    // Scroll ke skill div
    window.scrollTo({
      top: skillDiv.offsetTop,
      behavior: 'smooth'
    });
  }else {
    skillDiv.style.display = 'none';
    }
  });
//button close
document.addEventListener('click', function(event) {
  if (event.target === closeBtn || !skillDiv.contains(event.target) && event.target !== skillToggle) {
    skillDiv.style.display = 'none';
    skillToggle.checked = false;
  }
});
//button certificate
cbutton.addEventListener('click', function() {
  if (certDiv.style.display === 'none') {
    certDiv.style.display = 'flex';
    // Scroll ke skill div
    window.scrollTo({
      top: certDiv.offsetTop,
      behavior: 'smooth'
    });
  } else {
    certDiv.style.display = 'none';
  }
});
document.addEventListener('click', function(event) {
  if (event.target === closeBtn2 || !certDiv.contains(event.target) && event.target !== skillToggle) {
    certDiv.style.display = 'none';
    certDiv.checked = false;
  }
});
