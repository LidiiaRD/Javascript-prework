let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == '1')
  computerMove = 'kamień';
  
elseif(randomNumber == '2')
	computerMove= 'papier';
 
elseif(randomNumber == '3')
	computerMove = 'nożyce';  


printMessage('Mój ruch to: ' + computerMove);


function printMessage('Zagrałem' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
{
	let div = document.createElement('div');
	div.innerHTML = msg;

    document.getElementById('messages').appendChild(div);
}

function clearMessages()
{
	document.getElementById('messages').innerHTML = '';
}