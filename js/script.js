function playGame(argPlayerInput){
clearMessages ();
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

 } else if (
	(argComputerMove == "papier" && argPlayerMove == "kamień") ||
	(argComputerMove == "kamień" && argPlayerMove == "nożyce") ||
	(argComputerMove == "nożyce" && argPlayerMove == "papier")
 ) {
 printMessage("Ja wygrywam!");

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
}
displayResult (ComputerMove, PlayerMove);
document.getElementById('play-rock').addEventListener('click', function(){
	playGame('Kamień');
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame('Papier');
}); 
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame('Nożyce');
});  