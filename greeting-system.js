window.onload = function greetingMessage() {
    let name = prompt("What is your name?", "Enter first name");
    let response = nameCase(name);
    alert (`${response}`);
}
function nameCase(myName) {
  if (myName == null)
    return "OK, stranger! Enjoy the site anyways!";

  let name = myName.toLowerCase()
  switch (name) {
    case "lisa":
      return "Hi Mom! I've been waiting for you! Love you lots!";
  
    case "stan":
      return "Yo Pops! Thanks for stopping by! Big love!";

    case "tuuli":
      return "Hello Baba! I've been waiting for you!";

    case "claus":
      return "Yo bro! Thanks for all the help! Check it out!";

    case "broseph":
      return "Joe man the don dada!!! Thanks for visiting!! Big ups everytime!!";

    case "chrissy":
      return "Yogi!!!!! My bestie and brother from another mother! Thanks for popping by!! Big up!!";

    case "ashley":
      return "My brother Ashley!! I miss smokin' spliffs with you by the field!! Till next time homie!!";

    case "kelly":
      return "Kel Bell!!! Long time!! Hope the kids are well and that life is bless! Follow the vibes!!";

    case "milen":
      return "Yes Empress!!! Thanks for stopping by!! Remember watching the Original Kings of Comedy??!!";
    
    case "miikka":
      return "Yesss my gypsy bro thanks for stopping by!! Big love to you and the fam!!!!";

    case "silviya":
      return "Much love out to you my soul sister!! Thanks so much for being there for me always!!";4

    case "hamish":
      return "My brother from another mother!! I hope you are well and can't wait to see you again!! Missing the old days!!!";

    case "joni":
      return "Much love out to you my soul sister!! Thanks so much for being there for me always!!";

    case "chrissy":
      return "Yogi!!! I miss you so much!! Please let's keep more in touch!!! Stay blessed bredren!!S";

    case "Telle":
      return "My soul Mother!! Thank you so much for stopping by! Big love and blessings!!";

    case "anne":
      return "Hey girl!! Thanks for stopping by! I hope you and my bro are all good in the hood!!!";

    case "david":
      return "Yo brother!! Really appreciate your visit!! Nect time you're in Candyland hit me up!!";

    case "enter first name":
      return "Refresh the page and provide your first name.";

    default:
      return `Hi ${capitalize(myName)}! Welcome to the site! Check out the source code to see what I have learned!`;
  }
}
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
