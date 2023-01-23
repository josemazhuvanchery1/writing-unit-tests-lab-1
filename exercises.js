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
const searchWord = (w, t) => {
  //  let reg = /\w+(?=\,)/g
  // let counter = 0;
  // text.split(' ').forEach(element => {
  //   console.log(element.replace(reg, 'fkajneinakenfkanwek'))
  // });
  let word = w.toLowerCase();
  const text = t.toLowerCase();
  const regex = new RegExp('\\b'+word+'\\b', "g");
  return text.match(regex).length;
};
let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hiphop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
//console.log(searchWord('hip-hop', text)); 


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
