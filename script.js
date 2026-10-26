const pumpkin = document.querySelector("#pumpkin");
const surprise = document.querySelector("#surprise");

pumpkin.addEventListener("click", () => {
    pumpkin.classList.toggle("glowing");

    surprise.textContent = "BOO! 👻";
    
    setTimeout(() => {
        surprise.textContent = "";
    }, 1800);
});

// ==== TWINKLING STARS ====

const starsContainer = document.querySelector("#stars");

function createStars(amount = 65) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const star = document.createElement("span");
        star.classList.add("star");

        const size = Math.random() * 3 + 1;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 75}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.animationDelay =
            `${Math.random() * 5}s`;

        star.style.animationDuration =
            `${Math.random() * 3 + 2}s`;

        fragment.appendChild(star);
    }

    starsContainer.appendChild(fragment);
}

createStars();