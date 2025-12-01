//  animation skill
document.addEventListener('DOMContentLoaded', (event) => {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percent');
    bar.style.width = percentage + '%';
  });
});


// image silder
let index = 0;
const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slide').length;
document.querySelector('.next-btn').onclick = () => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
};
document.querySelector('.prev-btn').onclick = () => {
    index = (index - 1 + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

// toogle form
function myFunction() {
  document.body.classList.toggle("dark-mode");
}

// top button
 const btn = document.getElementById("topBtn");

  window.onscroll = () => {
    btn.style.display = window.scrollY > 100 ? "block" : "none";
  };

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

//Make projects card clickable 
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", function () {
        const link = this.getAttribute("data-url");
        if (link) {
            window.open(link, "_blank");
        }
    });
});

// contact form 
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.querySelector("textarea[name='message']").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("All fields are required!");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address!");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);


    window.location.href = "form-details.html";
});

