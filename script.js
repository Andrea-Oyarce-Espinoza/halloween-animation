const pumpkin = document.querySelector("#pumpkin");
const surprise = document.querySelector("#surprise");

pumpkin.addEventListener("click", () => {
    pumpkin.classList.toggle("glowing");

    surprise.textContent = "BOO! 👻";
    
    setTimeout(() => {
        surprise.textContent = "";
    }, 1800);
});