let submit = document.getElementById("submit");
let input = document.getElementById("question");
let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let options = [
  "It is certain",
  "It is decidedly so",
  "Most likely",
  "Reply hazy try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes",
  "Ask again later",
  "Very doubtful",
];

submit.addEventListener("click", function () {
  if (input.value.length < 1) {
    alert("Enter a question");
  } else {
    eight.innerText = "";
    let randomNumber = Math.floor(Math.random() * options.length);
    answer.innerText = options[randomNumber];
  }
});
