let wrong = document.querySelector(".wrong");
let correct = document.querySelector(".correct");
let audioWrong = document.querySelector(".audWr");
let audioCorrect = document.querySelector(".audCr");
let container = document.querySelector(".container")

wrong.addEventListener("click",()=>{
    container.style.backgroundColor = "#c18d8d"
    audioWrong.play()
})
correct.addEventListener("click",()=>{
    container.style.backgroundColor = "greenyellow"
    audioCorrect.play()
})