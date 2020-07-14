export default function generatesRandomNumbers(betweenMin, betweenMax, randomLimit) {
  // armazena um array com o tamanho do valor da variável randomLimit. (variável para auxiliar. )
  let arraySize=[];

  // Gera numeros inteiros aleatórios com tamanho minimo e maximo
  function randomNumbers() {
    let numbersArray = [];

    // limita o tamanho do array
    for (let i = betweenMin; i < betweenMax; i++) {

      numbersArray.push(Math.floor(Math.random() * (randomLimit - betweenMin)) + betweenMin);
      arraySize.push(Math.floor(Math.random() * (randomLimit - betweenMin)) + betweenMin); // gerando array
    }
    return removeDuplicates(numbersArray);
  }

  // recebe um array, criar um novo array sem valores duplicados
  function removeDuplicates(duplicateArray) {

    let singleArray = new Set(duplicateArray);
    return refinando(duplicateArray = [...singleArray])
  }

  function refinando(uniqueArray) {
    // identifica o quanto falta para completar o array
    let missingFill = betweenMax - uniqueArray.length;
    // armazenará um array com todos os valores NÂO repetidos
    let unrepeatedArray = [];

    if (uniqueArray.length < betweenMax) {
     
      // console.log(uniqueArray); // log do array incompleto

      // retorna todos os valores que NÃO são repetidos
      arraySize.map(notRepeated => {
        if (uniqueArray.includes(notRepeated) === false) {
          unrepeatedArray.push(notRepeated);
        };
        return unrepeatedArray;
      })

      // itera no array somente o quanto falta para completar
      for (let i = 0; i < missingFill; i++) {
        uniqueArray.push(unrepeatedArray[i])
      }
      // console.log(uniqueArray);
      return uniqueArray;
    }
    // console.log(uniqueArray); // log do array completo
    
    return uniqueArray;
  }
  return randomNumbers();
}