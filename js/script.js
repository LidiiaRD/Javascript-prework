
function playGame(PlayerInput){
	function getMoveName(argMoveId){
		if (argMoveId == 1){
		   return 'kamień';
		}
		else if (argMoveId == 2){
		   return 'papier';
		}
		else if (argMoveId == 3){
		   return 'nożyce';
		}
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
	clearMessages ();	

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let ComputerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + ComputerMove);

	console.log('Gracz wpisał: ' + PlayerInput);

	let PlayerMove = getMoveName(PlayerInput);

	printMessage('Twój ruch to: ' + PlayerMove);

function displayResult(argComputerMove, argPlayerMove) {
	console.log('moves:', argComputerMove, argPlayerMove);

if (
	(argComputerMove == "kamień" && argPlayerMove == "papier") ||
	(argComputerMove == "papier" && argPlayerMove == "nożyce") ||
	(argComputerMove == "nożyce" && argPlayerMove == "kamień")
 ) {
 	printMessage("Ty wygrywasz!");
	counterPlayer += 1;
 } else if (
	(argComputerMove == "papier" && argPlayerMove == "kamień") ||
	(argComputerMove == "kamień" && argPlayerMove == "nożyce") ||
	(argComputerMove == "nożyce" && argPlayerMove == "papier")
 ) {
 	printMessage("Ja wygrywam!");
	counterComp += 1;
 } else if (
	(argComputerMove == "kamień" && argPlayerMove == "kamień") ||
	(argComputerMove == "papier" && argPlayerMove == "papier") ||
	(argComputerMove == "nożyce" && argPlayerMove == "nożyce")
 ) {
	printMessage("Jeszcze raz!");
 } else {
	printMessage("nieznany ruch");
 }
}

	displayResult (ComputerMove, PlayerMove);
	console.log(counterComp + ":" + counterPlayer);
	printMessage(counterComp + ":" + counterPlayer);
}

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
}); 
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});

	let counterComp = 0;
	let counterPlayer = 0;
