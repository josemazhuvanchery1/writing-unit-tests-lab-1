const exercises = require('./exercises');

//write tests in this file

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/

test("isUpperCase", () =>{
  expect(exercises.isUpperCase('t')).toBe(false);
  expect(exercises.isUpperCase("T")).toBe(true);
  expect(exercises.isUpperCase("Four Score")).toBe(false);
  expect(exercises.isUpperCase("FOUR SCORE")).toBe(true);
  expect(exercises.isUpperCase("4SCORE!")).toBe(true);
  expect(exercises.isUpperCase("")).toBe(true);
})

test("removeVowels", () =>{
  expect(exercises.removeVowels(['abcdefghijklmnopqrstuvwxyz'])).toEqual(["bcdfghjklmnpqrstvwxyz"]);
  expect(exercises.removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(["grn", "YLLW", "blck", "wht"]);
  expect(exercises.removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(["BC", "", "XYZ"]);


})

test('wordCap', () =>{
  expect(exercises.wordCap('four score and seven')).toEqual("Four Score And Seven");
  expect(exercises.wordCap('the javaScript language')).toEqual("The Javascript Language");
  expect(exercises.wordCap('this is a "quoted" word')).toEqual('This Is A "quoted" Word');

})

test('wordSwap', () =>{
  expect(exercises.swapCase('CamelCase')).toEqual('cAMELcASE');
  expect(exercises.swapCase('Tonight on XYZ-TV')).toEqual("tONIGHT ON xyz-tv");
})

test("staggered", () =>{
  expect(exercises.staggeredCase('I Love Launch School!')).toEqual("I lOvE lAuNcH sChOoL!");
  expect(exercises.staggeredCase('ALL CAPS')).toEqual("AlL cApS");
  expect(exercises.staggeredCase('ignore 77 the 444 numbers')).toEqual("IgNoRe 77 ThE 444 nUmBeRs");

})

test("wordLengths", () =>{
  expect(exercises.wordLengths('cow sheep chicken')).toEqual(["cow 3", "sheep 5", "chicken 7"]
  );
  expect(exercises.wordLengths('baseball hot dogs and apple pie')).toEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]);
  expect(exercises.wordLengths("It ain't easy, is it?")).toEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]);
  expect(exercises.wordLengths('Supercalifragilisticexpialidocious')).toEqual(["Supercalifragilisticexpialidocious 34"]);

})

test("searchWord", () =>{
  let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hiphop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
  expect(exercises.searchWord('his', text)).toEqual(4);
  expect(exercises.searchWord('hip-hop', text)).toEqual(1);
  expect(exercises.searchWord('flow', text)).toEqual(1);
  expect(exercises.searchWord('is', text)).toEqual(1);

})