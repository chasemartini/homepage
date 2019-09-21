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
    eightBall = "It is certain! Drink!";
    break;
  case 1:
    eightBall = "It is decidedly so! Make someone else drink!";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now.. take a shot!";
    break;
  case 4:
    eightBall = "Do not count on it! Drink!";
    break;
  case 5:
    eightBall = "My sources say no. Nobody drinks!";
    break;
  case 6:
    eightBall = "Outlook not so good.. drink twice!";
    break;
  case 7:
    eightBall = "Signs point to yes! Don't drink!";
    break;
  }
  return eightBall;
}