// Question 1
const isUpperCase = (str) => {
  return (str === str.toUpperCase());
};

// Question 2
const removeVowels = (arr) => {
  const vowels = /[aeiou]/ig;
  return arr.map(el => el.replace(vowels,''))
   
};
// Question 3
const wordCap = (str) => {
  return str.split(' ').map(el => {
    return el.toLowerCase().replace(el[0], el[0].toUpperCase())
  }).join(' ')
};

// Question 4
const swapCase = (str) => {
  return str.split('').map(el => (el===el.toLowerCase()) ? el.toUpperCase():el.toLowerCase()).join('')
};

// Question 5

const staggeredCase = (str) => {
  let flag = true;
  let temp = "";
  for(let i = 0; i<str.length; i++){
   // console.log(Number(str[i]))
    if(!Number(str[i]) && flag && str[i] != ' '){
      temp += str[i].toUpperCase()
    }
    else if(Number(str[i]) || str[i] === ' '){
      temp += str[i]
      continue;
    } 
    else{
      temp += str[i].toLowerCase()
    }
    flag = !flag
  }
  return temp
};



// Question 6
const wordLengths = (str) => {
  return str.split(' ').map((x,i) => {
    let length = x.length;
    return x+" "+length
  })

};


// Question 7
const searchWord = (word, text) => {
  return text.replace(/[.!?,]/ig, "").split(" ").filter(w => w.toLowerCase() === word.toLowerCase()).length
};



// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
