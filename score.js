// Iteration 5: Store the player score and display it on the game over screen
let ply_btn = document.getElementById("play-again-button")

ply_btn.addEventListener("click",redirect)

function redirect(){
    location.href="./game.html"
    // localStorage.clear()
}


let sr = document.getElementById("score-board")
let finalScore = localStorage.getItem("score");
sr.innerHTML= finalScore;