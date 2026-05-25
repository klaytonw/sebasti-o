const botoes = document .querySelectorAll(".botao");
const textos = document.querySelectorAll(".textos")
console.log(botoes);
for(let 1-0;1 <botoes.length;1++)(
    botoes [i].onclick = function () {

for (let j = 0; < botoes.length; j++) {
    botoes[i].classList.remove("ativo");
}   textos[i].classList.remove('ativo');
}

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
  }
}

   const contadores = document,querySelectorAll(",contador");
   const tempo0bjetivo1 = new Date("2024-06-21T00:00:00");
   const tempo0bjetivo2 = new Date("2024-09-21T00:00:00");
   const tempo0bjetivo3 = new Date ("2024-12-21T00:00:00");
   const tempo0bjetivo4 = new Date ("2025-03-21T00:00:00");

   const tempos = [tempo0bjetivo1,tempo0bjetivo2,tempo0bjetivo3,tempo0bjetivo4];


   function calculatempo(tempo0bjetivo) {
     let tempoAtual = new Date();
     let tempoFinal = tempo0bjetivo - tempoAtual;
     let segundos = Math.floor(tempoFinal / 1000
     let minutos = Math.floor(segundos / 60);
     let horas = Math.floor(minutos / 60);
     let dias = Math.floor(horas / 24);

     segundos %= 60;
     minutos %= 60;
     horas %= 24;
     if (tempoFinal > 0){
    |    return [dias.horas,minutos,segundos];
     } else {
         return [0,0,0,0];
     }
     );
   }
function atualizaCronometro(){
     for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculatempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculatempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculatempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculatempo(tempos[i])[3];
    
     }
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();



