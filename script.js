document.addEventListener("DOMContentLoaded", () => {
    const musicEl = document.querySelector("#music");
    const clickEl = document.querySelector("#click");
    const letterEl = document.querySelector(".letter");

    function playMusic(){
      musicEl.play();
    }

    clickEl.addEventListener("click", () => {
      letterEl.classList.toggle("flap");
    });

    letterEl.addEventListener("click", () => {
      letterEl.classList.toggle("flap");
    });

    // clickEl.addEventListener("click", playMusic);
});