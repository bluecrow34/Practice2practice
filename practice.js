/* const people = ["Greg", "Mary", "Devon", "James"]

people.shift();
people.pop();
people.unshift("Matt");
people.push("Cam")

console.log(people)

//Object exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  }; */



  //Invalid password function

  /*function isValidPassword(password, username){
    if (password.length < 8) {
        return false;
    }
    if(password.indexOf(' ') !== -1){
        return false;
    }
  if(password.indexOf(username) !== -1){
        return false;
    }
    return true;
} */

// average function

/*function average(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    let result = total / arr.length;
    return result
}

function isPangram(sentence){
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if (sentence.includes[char]){
            return false;
        }
    }
    return true;
} */

function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const idx = math.floor(Math.random() * values.length);
    const value = values[idx];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    const xdi = math.floor(Math.random() * suits.length);
    const suit = suits[xdi];
    console.log(value, suit);
       
}

/// Draw a card function

function pick(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const value = pick(values);
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    
    const suit = pick(suits);
    return {value: value, suit: suit};
}