let numberPlayer = Math.floor(Math.random() * 5 + 1);
let numberComputer = Math.floor(Math.random() * 5 + 1); 
alert ('Il tuo numero è ' + numberPlayer + ', il numero del computer è ' + numberComputer);
if (numberPlayer == numberComputer) {
    alert ('Parità!')
} else if (numberPlayer > numberComputer){
    alert ('Hai Vinto!')
} else {
    alert('Ha vinto il computer!')
}