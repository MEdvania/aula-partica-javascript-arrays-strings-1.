/*
1)Calcular a tabuada de multiplicar de 5.
a)Adicionar o resultado de cada cálculo em um array.
b)Transformar o array em string.
c)Exibir no console.
Consegui fazer não
*/
function m5(){
    let resultado = []
      for(let i = 1; i < 10; i++){
          let soma = 5 * i;
          resultado.push(soma)
      }
    resultado = resultado.toString()
    console.log(resultado)
}
m5();  

/*
2)Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius:
a)n é o valor da temperatura a ser convertida.
b)Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37
c)Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius.
*/

function celsius(n){
    let result = ((n - 32)/1.8);
    console.log(result.toFixed(2))
}
celsius(180)