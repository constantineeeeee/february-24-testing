document.addEventListener("DOMContentLoaded", () => {
    const musicEl = document.querySelector("#music");
    const clickEl = document.querySelector("#click");
    const letterEl = document.querySelector(".letter");
    const balloonEl = document.querySelector(".balloon");
    const tobi1El = document.querySelector(".tobi1");
    const tofi1El = document.querySelector(".tofi");
    const tobi2El = document.querySelector(".tobi2");
    const usPicEl = document.querySelector(".us");

    // function playMusic(){
      musicEl.play();
    // }

    clickEl.addEventListener("click", () => {
      musicEl.play();
      letterEl.classList.toggle("flap");
      balloonEl.classList.toggle("flapBal");
    });

    letterEl.addEventListener("click", () => {
      letterCheck = false;
      letterEl.classList.toggle("flap");
      clickEl.checked = false;
    });


    usPicEl.addEventListener("click", () => {
      letterEl.classList.toggle("flap");
      usPicEl.classList.toggle("picFlap");
    });
    
    tobi1El.addEventListener("click", () => {
      letterEl.classList.toggle("flap");
      tobi1El.classList.toggle("picFlap");
    });
    
    tobi2El.addEventListener("click", () => {
      letterEl.classList.toggle("flap");
      tobi2El.classList.toggle("picFlap");
    });

    
    tofi1El.addEventListener("click", () => {
      letterEl.classList.toggle("flap");
      tofi1El.classList.toggle("picFlap");
    });

    clickEl.addEventLstener("click", playMusic);
});