const themeBtn = document.getElementById("themeToggle");

// load saved theme
const savedTheme = localStorage.getItem("theme");

if(savedTheme){
document.body.classList.add(savedTheme);
}

themeBtn.addEventListener("click", ()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light-mode");
themeBtn.innerText="☀";
}else{
localStorage.setItem("theme","");
themeBtn.innerText="🌙";
}

});
const toggle = document.getElementById("themeToggle")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

})