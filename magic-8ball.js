function magic8ball() {
  let userQuestion = document.getElementById("eightball-question").value;
  console.log(document.getElementById("eightball-question"))
let userName = "Chase";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!")

console.log(`${userName} asked: ${userQuestion}`);
let answer = (magicAnswer());
console.log(answer);
document.getElementById("eightball-answer").innerHTML = answer;
}

function magicAnswer() {
  const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain!";
    break;
  case 1:
    eightBall = "It is decidedly so!";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now..";
    break;
  case 4:
    eightBall = "Do not count on it!";
    break;
  case 5:
    eightBall = "My sources say no.";
    break;
  case 6:
    eightBall = "Outlook not so good..";
    break;
  case 7:
    eightBall = "Signs point to yes!";
    break;
  }
  return eightBall;
}