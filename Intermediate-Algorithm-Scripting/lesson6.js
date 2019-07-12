  //Lesson 6 Pig Latin
function translatePigLatin(str) {
    let firstWord=str[0];

    let vowels=/[aeiou]/gi;
    let newWord="";
    if(!str.match(vowels)){
      return str + 'ay';
    } else if(firstWord.match(vowels)){
       newWord= str+'way';
  
    }else{
      let indexOfVowel=str.indexOf(str.match(vowels)[0]);
      newWord=str.substr(indexOfVowel)+str.substr(0,indexOfVowel)+'ay';
    }
    return newWord;
  }
  
  
  translatePigLatin("consonant");