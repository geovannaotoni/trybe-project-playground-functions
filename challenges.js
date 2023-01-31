// Desafio 1 - Crie a função compareTrue
const compareTrue = (param1, param2) => {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
};

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  let arrayItens = [];
  arrayItens.push(array[array.length - 1], array[0]);
  return arrayItens.join(', ');
};

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let maiorNum = array[0];
  let contador = 0;
  for (let index in array) {
    if (array[index] > maiorNum) {
      maiorNum = array[index];
      contador = 1;
    } else if (array[index] === maiorNum) {
      contador += 1;
    }
  }
  return contador;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  const mouseCat1 = Math.abs(mouse - cat1);
  const mouseCat2 = Math.abs(mouse - cat2);
  if (mouseCat1 > mouseCat2) {
    return 'cat2';
  }
  if (mouseCat1 < mouseCat2) {
    return 'cat1';
  }
  if (mouseCat1 === mouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8 - Crie a função fizzBuzz
// Resolução com complexidade acima do permitido pelo ESLINT
// const fizzBuzz = (array) => {
//   let arrayStrings = [];
//   for (let value of array) {
//     if ((value % 3 === 0) && (value % 5 !== 0)) {
//       arrayStrings.push('fizz');
//     } else if ((value % 3 !== 0) && (value % 5 === 0)) {
//       arrayStrings.push('buzz');
//     } else if ((value % 3 === 0) && (value % 5 === 0)) {
//       arrayStrings.push('fizzBuzz');
//     } else {
//       arrayStrings.push('bug!');
//     }
//   }
//   return arrayStrings;
// };
// Resolução reduzindo a complexidade da função, criando duas funções separadas
const getFizzBuzz = (number) => {
  let string = 'bug!';
  if (number % 3 === 0) {
    string = 'fizz';
  }
  if (number % 5 === 0) {
    string = 'buzz';
  }
  if (number % 15 === 0) {
    string = 'fizzBuzz';
  }
  return string;
};
const fizzBuzz = (arrayNumber) => {
  let arrayString = [];
  for (let value of arrayNumber) {
    let string = getFizzBuzz(value);
    arrayString.push(string);
  }
  return arrayString;
};

// Desafio 9 - Crie a função encode e a função decode
const encode = (string) => {
  const codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newString = '';
  for (let letter of string) {
    if (codigo[letter]) {
      newString += codigo[letter];
    } else {
      newString += letter;
    }
  }
  return newString;
};
const decode = (string) => {
  const codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newString = '';
  for (let letter of string) {
    if (codigo[letter]) {
      newString += codigo[letter];
    } else {
      newString += letter;
    }
  }
  return newString;
};

// Desafio 10 - Crie a função techList
const techList = (array, nome) => {
  let arrayOrd = array.sort();
  let arrayObj = [];
  for (let index = 0; index < arrayOrd.length; index += 1) {
    let obj = {
      tech: arrayOrd[index],
      name: nome,
    };
    arrayObj.push(obj);
  }
  return arrayObj;
};
