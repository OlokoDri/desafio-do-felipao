// Nome
let NomeDoHeroi = "Kirito";

// XP
let XpDoHeroi = 8999; 
// Verificação do nível
let NivelDoHeroi = "";

if (XpDoHeroi >= 8001 && XpDoHeroi <= 9000) {
    NivelDoHeroi = "Ascendente";
} else {
    NivelDoHeroi = "Outro nível";
}

// Exibir informações do herói
console.log("O nome do herói é: " + NomeDoHeroi);
console.log("O XP do herói é: " + XpDoHeroi);
console.log("O nível do herói é: " + NivelDoHeroi);

