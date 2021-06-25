const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('Error!');
  };
 }
 // console.log(getUserChoice('paper'));
 // console.log(getUserChoice('fork'));
 const getComputerChoice = () => {
   randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'scissors';
    case 2:
    return 'paper'
  }
 }
 console.log(getComputerChoice());