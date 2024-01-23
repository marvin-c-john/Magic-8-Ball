const button = document.querySelector(".button")
let ball = document.querySelector(".ball")
let answer = document.querySelector(".answer")
let answers = ["Yes", "No", "In Your Dreams", "Of Course"]
let image = document.getElementById("8ball")

button.addEventListener("click", giveAnswer)
answer.style.display = "none"

function giveAnswer(){
  ball.classList.remove("apply-shake")
  let message = prompt("ASK A YES/NO QUESTION")

  if (message !== ""){
    ball.classList.add("apply-shake")
    answer.style.display = "block"
    image.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    message = ""
  }

  if (ball.classList.contains("apply-shake")){
    answer.innerHTML = answers[Math.floor(Math.random()*answers.length)]
  }

}