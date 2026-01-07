// Kirito
let nome1 = "Kirito";
let xp1 = 10000; 
let nivel1 = "";

if (xp1 >= 1 && xp1 <= 2000) nivel1 = "Ferro";
else if (xp1 <= 5000) nivel1 = "Prata";
else if (xp1 <= 7000) nivel1 = "Ouro";
else if (xp1 <= 8000) nivel1 = "Platina";
else if (xp1 <= 9000) nivel1 = "Ascendente";
else if (xp1 <= 10000) nivel1 = "Imortal";
else if (xp1 >= 10001) nivel1 = "Radiante";

// Dr. Stone
let nome2 = "Dr. Stone";
let xp2 = 3000; 
let nivel2 = "";

if (xp2 >= 1 && xp2 <= 2000) nivel2 = "Ferro";
else if (xp2 <= 5000) nivel2 = "Prata";
else if (xp2 <= 7000) nivel2 = "Ouro";
else if (xp2 <= 8000) nivel2 = "Platina";
else if (xp2 <= 9000) nivel2 = "Ascendente";
else if (xp2 <= 10000) nivel2 = "Imortal";
else if (xp2 >= 10001) nivel2 = "Radiante";

// Ainz
let nome3 = "Ainz";
let xp3 = 99999; 
let nivel3 = "";

if (xp3 >= 1 && xp3 <= 2000) nivel3 = "Ferro";
else if (xp3 <= 5000) nivel3 = "Prata";
else if (xp3 <= 7000) nivel3 = "Ouro";
else if (xp3 <= 8000) nivel3 = "Platina";
else if (xp3 <= 9000) nivel3 = "Ascendente";
else if (xp3 <= 10000) nivel3 = "Imortal";
else if (xp3 >= 10001) nivel3 = "Radiante";

console.log("O Herói de nome " + nome1 + " está no nível de " + nivel1);
console.log("");
console.log("O Herói de nome " + nome2 + " está no nível de " + nivel2);
console.log("");
console.log("O Herói de nome " + nome3 + " está no nível de " + nivel3);
console.log("");
