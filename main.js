const mod = document.querySelector('.mod-wrapper'); 
const content = document.querySelector('.content-wrapper'); 
const bgImg = document.querySelector('.bg-img');

const openModBtn = document.querySelector('.open-mod-btn');
const closeModBtn = document.querySelector('.close-mod-btn');

openModBtn.addEventListener('click', function () {
    mod.classList.add("open-mod");
    content.style.display = "none";
    bgImg.classList.add("blur");
});
closeModBtn.addEventListener('click', function () {
    mod.classList.remove("open-mod");
    content.style.display = "flex";
    bgImg.classList.remove("blur");
});
