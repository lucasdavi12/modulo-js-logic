// const aluno = "Gabriel";
// const media = 8;

// if(media >= 7){
//     console.log("Aprovado");
//  } else{
//     console.log("Reprovado");
//  }

const nomes = [
    "Amanda", "Anderson", "Daniel", "Jean", "Natália", "Pietro"
]
const medias = [
    7, 8.5, 9.5, 6, 7, 8
]
console.log ("Aluno: " + nomes[3] + " Média " + medias[3])

for (let i = 0; i < medias.length; i++) {
    if (medias[i] >= 7) {
        console.log(nomes[i] + ": Aprovado");
        
    }else{
        console.log(nomes[i] + ": Reprovado")
    }

}
