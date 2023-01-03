function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;

    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argComputerMove){
	if(argComputerMove == 1){
	  return 'kamień';
	} 
   if(argComputerMove == 2){
	  return 'papier';
	} 
   if(argComputerMove == 3){
	  return 'nożyce';
	}  else {
	  printMessage('Nie znam ruchu o id ' + argComputerMove + '.');
	  return 'nieznany ruch';
	}
  }	
let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
	computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';	
} 
	
else if(randomNumber == 3){
  computerMove = 'nożyce';	
} 
*/	
printMessage('Mój ruch to: ' + computerMove);
console.log('Gracz wpisał: ' + playerInput);

function getMoveName(argplayerMove){
	if(argplayerMove == 1){
	  return 'kamień';
	} 
   if(argplayerMove == 2){
	  return 'papier';
	} 
   if(argplayerMove == 3){
	  return 'nożyce';
	}  else {
	  printMessage('Nie znam ruchu o id ' + argplayerMove+ '.');
	  return 'nieznany ruch';
	}
  }	
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove = 'papier';	
} 	
else if(playerInput == '3'){
  playerMove = 'nożyce';	
} 
else if(playerInput == '4'){
	playerMove = 'nieznany ruch';	
} 
else if(playerInput == '5'){
	playerMove = 'nieznany ruch';	
} 
else if(playerInput == '6'){
	playerMove = 'nieznany ruch';	
} 
*/
printMessage('Twój ruch to: ' + playerMove);
console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  return('Ty wygrywasz!');
	}
	if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		return('Tym razem przegrywasz');
	}	
	if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		return('żaden nie wygrał!');	 
    }
    if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
		return('żaden nie wygrał!');
    }
    if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
	  	return('Ty wygrywasz!');
    }	
    if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		return('Tym razem przegrywasz');	 
	}
	if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		return('Tym razem przegrywasz');
  	}
  	if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		return('żaden nie wygrał!');
  	}	
  	if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		return('Ty wygrywasz!');	 
	}
}	
/*
if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
}
else if(computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Computer wygrał!');
} 
else if(computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('żaden nie wygrał!');
}   

if(computerMove == 'papier' && playerMove == 'papier'){
	printMessage('żaden  nie wygrał');
}
else if(computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
} 
else if(computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Computer wygrał!');
}  

if(computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Computer wygrał!');
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('żaden  nie wygrał!');
} 
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
} 
if(playerMove == 'nieznany ruch'){
	printMassage('nieznany ruch')
} 
*/ 