/*//takes a string and returns a string with th letters reversed.

var reverse = function(word){

    //new string
    var str = "";

    //adds letters from input string to new string in reverse order.
    for(var i = word.length-1; i >= 0; i--){
        str += word[i];
    }
    console.log(str);
};

var cat = "cat";
reverse(cat);

//factorial

var factorial = function(number) {
    var answer = number;
    for(var i = number-1; i > 0; i--){
        answer = answer*i;
    }
    return answer;
};

console.log(factorial(6));

//can you do factorial using recursion?? CHALLENGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//return the longest word in the string

var longest_word = function(string){

    //put words from string into an array
    var words = string.split(" ");

    //arbitrarily pick length of first word to be longest word
    var long = words[1].length;

    //string to hold longest word
    var longest_word = "";

    //iterate through array and compare the length of element to var long.
    for(var i = 0; i < words.length; i++){

        //if current element is longer than the one stored, replace long and longest word
        if(words[i].length > long){
            long = words[i].length;
            longest_word = words[i];
        }
    }
    return longest_word;
};

console.log(longest_word("what's the longest word, eh?"));

//Write a method that takes in an integer `num` and returns the sum of
//all integers between zero and num, up to and including `num`.

var sumNum = function(number){

    var num = 0;

    for(var i = number; i > 0; i--){
        num = num + i;
    }
    return num;
};

console.log(sumNum(10));

//CHALLENGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! make minuts have fixed digits of two. move console. log to outside

// Write a method that will take in a number of minutes, and returns a
//string that formats the number into `hours:minutes`.

var clock = function (minutes){

    var hours = minutes/60;
    var min = minutes%60;

    console.log(hours + ":" + min);
};

clock(120);

//Write a method that takes a string and returns the number of vowels
//in the string. You may assume that all the letters are lower cased.
//You can treat "y" as a consonant.

var vowels = function(string){

    var numVowels = 0;

    //counts vowels in string
    for(var i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e"||string[i] === "o"||string[i] === "u"||string[i] === "i"){
            numVowels++;
        }
    }
    return numVowels;
};

console.log(vowels("How many vowels are in this string?"));

//Write a method that takes a string and returns true if it is a
//palindrome. A palindrome is a string that is the same whether written
//backward or forward. Assume that there are no spaces; only lowercase
//letters will be given.

var palindrome = function(string){

    var reverse = "";

    //create a string with letters reversed
    for(var i = string.length-1; i >= 0; i--){
        reverse += string[i];
    }
    console.log(reverse);

    //see if the characters in the reversed string are equal to the characters in original string.
   for(var j = 0; j < string.length; j++){
        if(!(string[j] === reverse[j])){
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
};

palindrome("cattac");

//Write a method that takes a string in and returns true if the letter
//"z" appears within three letters **after** an "a". You may assume
//that the string contains only lowercase letters.

var z = function(string){

    //iterate through every character in string
    for(var i = 0; i < string.length; i++){

        //if character is a create substring of next three characters
        if(string[i] === "a"){
            var check = string.substr(i, 3);

            //check for "z" in substring
            for( var j = 0; j < 3; j++){
                if(check[j] === "z"){
                    console.log("true");
                    return true;
                }
            }
        }
    }
    console.log("false");
    return false;
};

z("cats are coolz");

//Write a method that takes an array of numbers. If a pair of numbers
//in the array sums to zero, return the positions of those two numbers.
// If no pair of numbers sums to zero, return `nil`.

var sum = function(array){

    //iterate through array
    for(var i = 0; i < array.length; i++){
        var base = i;
        console.log(base);

        //if any of the elements add to i to form 0, return true
        for(var j = i+1; j < array.length; j++){
            if(array[i] + array[j] === 0){
                var j = j;
                console.log(j);
                var zero = [base, j];
                console.log(zero);
                console.log("true");
                return true;
            }
        }
    }
    console.log("false");
    return false;
};

var numbers = [1, 2, 0, -2];

sum(numbers);

//Write a method that takes in a number and returns true if it is a
// power of 2. Otherwise, return false.

var exponent = function(number){

    //throw out any odd numbers cause pls
    if(!(number % 2 === 0)){
        console.log("false");
        return false;
    }

    //start checking number by dividing by two, i guess it's unnessesary
    var check = number/2;

    //check to see if an exponent of 2
    while(check >= 2){

        //if number is not divisible by 2 return false
        if(check % 2 === 1){
            console.log("false");
            return false;
        }

        //divide number by 2
        check = check/2;
    }

    //if number eventually becomes 2 return true.
    console.log("true");
    return true;
};

exponent(2);

//Write a method that takes an array of numbers in. Your method should
 //return the third greatest number in the array. You may assume that
// the array has at least three numbers in it.

var third = function(array){

    //sort the array from smallest to greatest
    for(var i = 0; i < array.length; i++){
        var smallest = array [i];
        for(var j = i; j < array.length; j++)
            if(array[j] < smallest){
                var temp = smallest;
                smallest = array[j];
                array[j] = temp;
            }
    }
    console.log(array);

    //return third greatest (in element third from right)
    console.log(array[array.length -3]);

};

var numbers =[1, 4, 6];

third(numbers);

//Write a method that takes in a string. Your method should return the
// most common letter in the array, and a count of how many times it
//appears.

var common = function (string){

    var letters = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


    //tally number of appearances for each letter to array letters
    for( var i = 0; i < string.length; i++){
        if(string[i] !== " "){
        letters[string.charCodeAt(i)-97]++;
        }
    }

    //determine which letter appeared the most often, store that element in var j. store numebr of appearances in element
    var element = letters[0];
    var place = 0;
    for( var j = 0; j < letters.length; j++){
        if(letters[j] > element){
            element = letters[j];
            var place = j;
        }
    }

    //determine letter from element stored in j and number of times it appeared
    var mostCommonLetter = String.fromCharCode(place+97);
    var appearances = letters[place];
    var answer = [mostCommonLetter, appearances];
    console.log(answer);

};

common("what is theeeee most common letter in this sentenceeeeeee");

//takes in number and returns a string and puts a dash before and after each odd digit. do not put dash at beginning and end of string

var dash = function(number){

    // turn nuber into string ///////////////////not sure if this is nessesary
    var string = number.toString();

    //create new string
    var newString = "";

    //check the first digit
    if(string[0] % 2 === 1){
        newString += string[0] + "-";
    }
    else{
        newString += string[0];
    }

    //check middle digits, add dashes if digit is odd
    for(var i = 1; i < string.length-1; i++){
        if(string[i] % 2 === 1){
            newString += "-" + string[i] + "-";
        }
        else{
            newString += string[i];
        }
    }

    //check last digit
     if(string[string.length-1] % 2 === 1){
        newString += "-" + string[string.length-1];
    }
    else{
        newString += string[string.length-1];
    }
    return newString;
};

console.log(dash(4867384)); /////////////////////// is there a better way to replace or delete the dashes at the beginning or end of the string??????????????/

//takes string of lower case letter and returns  string with the first letter of each word capitalized.

var capitalize = function(string){

    //split string into array
    var transform = string.split(" ");

    //for each element make first character upper case then add the rest of the word
    for(var i = 0; i < transform.length; i++){
        transform[i] = transform[i].charAt(0).toUpperCase() + transform[i].substr(1);
    }

    //put words back into a string
    var newString = transform.join(" ");
    return newString;
};

console.log(capitalize("Nnf! nnf! Bun is god"));

//Write a method that takes in a string and an array of indices in the string. Produce a new string, which contains letters from the input string in the order specified by the indices of the array of indices.

var scramble = function(string, array){

    //check if string and array are same length
    if(string.length !== array.length){
        return "Please input a string and an array with the same length.";
    }

    //scramble the letter according to array
    var newString = "";
    for(var i = 0; i < array.length; i++){

        //if an element is equal or greater than to length, remind user start elements at 0
        if(array[i] >= array.length){
            console.log("Please make sure array values are zero-indexed.");
            break;
        }

        //create new string
        newString += string[array[i]];
    }
    return newString;
};

var scrambleThis = "BUN";
var key = [1,2,3,];

console.log(scramble(scrambleThis, key)) ////////////////////////////////////////////////////////warning message still not great but good enough

//takes an integer and returns true if prime.

var prime = function(number){


    //numbers 1 or less aren't prime
    if(number <= 1){
       return false;
    }

    //checks if number is divisible by anything besides itself, excluded 1
    for(var i = 2; i <= number/2; i++){
       if(number % i === 0){
           console.log("false");
           return false;
       }
    }
    console.log("true");
    return true;
};

prime(2);

//takes a number n and returns nth prime number.

var nthPrime = function(number){

    //return 2 if looking for first prime number because scrub
    if(number === 1){
        return 2;
    }

    //counter starts at 2
    var counter = 2;

    //start check from 4. returns 3 when 2 is entered because 4-1 is 3.......should fix this
    var i = 4;
    while(counter < number){

        //check if prime by division
        for(var j = 2; j <= i/2; j++){

            //if i is divisible by a number, move onto the next one
            if(i % j === 0){
                console.log( i + " is false");
                i++;
                console.log("new i = " + i );
                continue;
            }
        }
        //if i was not divisible byany number, increase counter and move onto the next number
        counter++;
        console.log(i + " contributed to counter. New counter is: " + counter);
        i++;
        console.log("new i = " + i);
    };
    return i-1; //adds one to i after counter reaches correct number so i is alsow one higher than exepcted. fix here or later with the minus 1
};

console.log("The nth prime number is " + nthPrime(11));

//takes a string of lowercase letters, returns a substring of longest palindrome contained in string

var palindrome2 = function(string){

   var subString = "";
   var newString = "";

   //make all possible substrings
   for(var i = 0; i < string.length; i++){
       for(var j = i+1; j < string.length+1; j++){ //plus one needed because substring doens't include ending value. Look at ending values
           subString = string.substring(i,j);
           var check = 0;

                //check if subsring is palindrome, and increase check if it is not
                for( var z = 0; z < subString.length/2; z++){
                    if(subString[z] !== subString[subString.length - 1 - z]){
                        check++;
                        break;
                    }
                }

                //if subString is palindrome and is longer than the one stored, replace it with subString
                if(check < 1 && subString.length > newString.length){
                newString = subString;
           }
       }
   }
    return newString;
};

console.log("The longest palindrome in this string is: " + palindrome2("bbbananabcatbunnubbb"));

//takes two numbers and returns greatest common factor(greatest integer that divides both evenly)

var gcf = function(number1, number2){

    //find smaller of the two numbers
    var number = number2;
    if(number1 < number2){
        number = number1;
    }

    //find greatest common factor, including smaller number
    var gcf;
    for(var i =0; i <= number; i++){
        if(number1 % i === 0 && number2 % i === 0){
            gcf = i;
        }
    }
    return gcf;
};

console.log(gcf(5, 10));

//Write a method that takes in an integer `offset` and a string. Produce a new string, where each letter is shifted by `offset`. You may assume that the string contains only lowercase letters and spaces.
//aka Ceasar
    //letters[string.charCodeAt(i)-97]++;

    //var mostCommonLetter = String.fromCharCode(place+97);

var caesar = function(string, key){

    var newString = "";

    //iterate through string and modify each character
    for(var i = 0; i < string.length; i++){
        var temp = (((string.charCodeAt(i) + key - 97) % 26) + 97);
        newString += String.fromCharCode(temp);
    }
    return newString;
};

console.log(caesar("akdjnaweerererer", 3));

//takes a string and returns number of letters that appear more than once.

var common = function(string){

    //array to hold counters for letters
    var letters = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    //itereate through string, adding to corresponding element in array, ignore spaces
    for(var i = 0; i < string.length; i++){

       if(string[i] !== " "){
        letters[string.charCodeAt(i)-97]++;
        }
    }
    console.log(letters);

    //increase counter for each element (letter) that is greater than 1
    var counter = 0;
    for(var j = 0; j < letters.length; j++){
        if(letters[j] > 1){
            counter++;
        }
    }
    return counter;
};

console.log(common("bunana peel"));

//why is my araay printed witha new line for every element and NaN at the end? spaces.

var seven = function(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] + array[+1] + array[i+2] === 7){
            console.log("True");
            return true;
        }
    }
    console.log("false");
    return false;
};

var numbers = [1,3,3,4,6,7,3,5,2,4,3,5];

seven(numbers);

var odd_sum = function(array){

    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            sum = sum + array[i];
        }
    }
    return sum;
};

var numbers = [1,3,3,4,6,7,3,5,2,4,3,5];

console.log(odd_sum(numbers));

var disemvowel = function(string){
    var newString = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] === "a" ||string[i] === "e" ||string[i] === "i" ||string[i] === "o" ||string[i] === "u"){
            continue
        }
        newString += string[i];
    }
    return newString;
};

console.log(disemvowel("what is a bun if not a bun?"));

var crazy_sum = function(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i]*i;
    }
    return sum;
}

var numbers = [2,3,5]

console.log(crazy_sum(numbers));

var squares = function(number){
    var counter = 0;
    for(var i = 1; i < number/2+1; i++){
        if(i*i < number){
            counter++;
        }
    }
    return counter;
}

console.log(squares(100));

//ARE less than max
//AND ARE divisible by either three or five
//BUT ARE NOT divisible by _both_ three and five

var crazy_numbers = function(number){

    var numbers = [];
    for(var i = 3; i < number; i++){
        if(i % 3 === 0 && i % 5 === 0){
            continue;
        }
        else if(i % 3 === 0 || i % 5 === 0){
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(crazy_numbers(20));

var myArray = ["Elizabeth Leong", "tofabo"];

var cutName = function(string){
  var split = string.split(" ");
  return split;
}

var myData ={
  fullname: cutName(myArray[0]),
  skype: myArray[1],
  github: "tofabo"
}

console.log(cutName(myArray[0]));

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  for(var  i = 0; i < str.length; i++){
    if(str[i] === "a"){
    vowelsCount++;
    console.log(vowelsCount);
    }
  return vowelsCount;
}
};

console.log(getCount("banana"));

var vowels = function(string){

    var numVowels = 0;

    //counts vowels in string
    for(var i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e"||string[i] === "o"||string[i] === "u"||string[i] === "i"){
            numVowels++;
        }
    }
    return numVowels;
};

console.log(vowels("Bananana"));

function tribonacci(signature,n){
  //your code here
 for(var i = 3; i < n; i++){
     var sigSum = signature[i-1] + signature[i-2] + signature[i-3];
     signature.push(sigSum);
   }
   console.log(signature);
}

tribonacci([1,1,1], 10);

//recursion

//divide by two

function division (num){
    if (num === 1){
        return 1;
    }
    else{
        console.log(num);
        return division(num/2);
    }
}

console.log(division(16)); //kind of works

//fibinocci series, returns n numbers

function fibonacci (num){
    if(num === 1 || num === 0){
        return num;
    }
    else{
       return fibonacci(num-1) + fibonacci(num-2);
    }
}

console.log(fibonacci(6));

function addition(){
    var i =3;
    while(i < 100){
        console.log(i=i+3);
    }
}

addition();

var arr= [1,2,3,4,5];

function seek(arr, x){
    for( var i= 0; i< arr.length; i++){
        if(arr[i]===x){
            return i;
        }
    }
    return false;
}

console.log(seek(arr,3))

function destroy(arr, x){
    for(var i = seek(arr, x); i<arr.length-1; i++){
        var temp = arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=temp;
    }
    console.log(arr);
    arr.pop();
    return arr;
}

console.log(destroy(arr,3));

function add(a, b){
    var sum = a + b;
    return sum;
}

console.log(add(1,2));

function replace(arr,x,y){
    arr.push(y);
    for(var i = arr.length-1; i > x; i--){
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        console.log(arr);
    }
    return arr;
}
var arr = [1,2,4];
console.log(replace(arr,2,10));

function pigIt(str){
  //Code here
  var arr = str.split(" ");
  for(var i = 0; i< arr.length; i++){
    //console.log("The last letter is " + arr[i][(arr[i].length-1)] + " The first letter is " + arr[i][0]);
    var temp = arr[i][0];
    arr[i][0] = arr[i][(arr[i].length-1)];
    //console.log(arr[i][0] + ", " + arr[i][(arr[i].length-1)]);
    arr[i][(arr[i].length-1)] = temp;

    arr[i] +="ay";
   }
   var str = arr.join(" ");
   console.log(str);
   return str;
}

pigIt("This is my string");

var arr = [[3,4,3,2,3],
            [2,3,3,3,0],
            [7,3,3,5,3],
            [6,5,3,4,1],
            [1,2,3,3,3,]];

function paint(arr, x, y, z){
    if(arr[x][y]===z){
        return arr;
    }
    arr[x][y] = z;

}

function dup(arr){
    var newarr=[];
    var obj = {};
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }
        else{
            obj[arr[i]]++;
        }
    }
    console.log(obj);
    for (key in obj){
        if(obj[key]===1){
            newarr.push(key); //Javascript turns object keys to strings, use toInt to convert to int. ParseInt
        }
    }
    return newarr;
}

var arr = [2,2,6,5,8,5];

console.log(dup(arr))

//remove spaces from a string

function removespaces(string){
     var newString= '';
     for(var i = 0; i < string.length; i++){
         if(string[i] !== ' '){
         newString += string[i];
         }
     }
     return newString;
}

//creates object that counts the number of times a word appears in a string.
//using regex to test characters if("(^a-zA-Z)".exec(str[i])

function countWords(str){
    var obj = {};
    var word ="";
    str += " ";
    for(var i = 0; i < str.length; i++){
        if(isLetter(str[i])){
            word += str[i];
        }
        if(str[i] == " "){
            if(!obj[word]){
                obj[word] = 1;
            }
            else{
                obj[word] += 1;
            }
            word = "";
        }
    }
    return obj;
}

var string = "cat cat cat, I like cats, do you like cats?";

console.log(countWords(string));


//floodfill tool that works like the fill tool in paint

function floodFill(arr, x, y, z){

    var og = arr[x][y];

    if(arr[x][y] === z){
        return arr;
    }

    arr[x][y] = z;

    if(arr[x+1][y] !== og && arr[x-1][y] !== og && arr[x][y+1] !== og && arr[x][y-1] !== og){
        return arr;
    }

    if(arr[x+1][y] === og && x < arr.length-1){
        x=x+1;
        console.log(arr, arr[x][y]);
        return floodFill(arr, x, y, z);
    }

}

var arr = [ [3,2,3,4,3],
            [2,3,3,4,0,],
            [7,3,3,5,3,],
            [6,5,3,4,1],
            [1,2,3,3,3]]

console.log(floodFill(arr, 2, 2, 1))

//THIS DOESN"T WORK YET. Tries to access elements ouside of the array.

//deck of cards
//should make deck, shuffle deck and draw a random card

function draw(arr){

    var random = Math.floor(Math.random()*52);
    var card = arr[random];
    return card;
}

function shuffle(arr){

    for(var i = 2; i < arr.length; i++){
        var random = Math.floor(Math.random()*52);
        var temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }

    return arr;
}

function deck(){
    var deck =[];
    for(var i = 1; i <= 52; i++){
        if(i < 14){
            deck.push("Heart of "+i)
            if(i === 1){
                deck[i] = "Ace fo Hearts";
            }
            if(i===11){
                deck[i] = "Jack of Hearts";
            }
            if(i===12){
                deck[i] = "Queen of Hearts";
            }
            if(i===13){
                deck[i] = "King of Hearts";
            }
        }
        else if( i < 27){
             deck.push("Spades of "+(i-13))
            if(i===14){
                deck[i] = "Ace of Spades";
            }
            if(i===24){
                deck[i] = "Jack of Spades";
            }
            if(i===25){
                deck[i] = "Queen of Spades";
            }
            if(i===26){
                deck[i] = "King of Spades";
            }
        }
        else if( i < 40){
             deck.push("Diamonds of "+(i-26))
            if(i === 27){
                deck[i] = "Ace of Diamonds";
            }
            if(i===37){
                deck[i] = "Jack of Diamonds";
            }
            if(i ===38){
                deck[i] = "Queen of Diamonds";
            }
            if(i===39){
                deck[i] = "King of Diamonds";
            }
        }
        else{
             deck.push("Clubs of "+(i-39))
            if(i===40){
                deck[i] = "Ace of Clubs";
            }
            if(i===50){
                deck[i] = "Jack of Clubs";
            }
            if(i===51){
                deck[i] = "Queen of Clubs";
            }
            if(i===52){
                deck[i] = "King of clubs";
            }
        }
    }
    return deck;
}

console.log(deck());
//console.log(shuffle(deck()));
console.log(draw(deck()));*/

// function jack(val){
//     var counter = 1;
//     while(val != 1){
//         if(val % 2 == 0){
//             val = val/2;
//         }
//         else{
//         val = 3*val+1;
//         }
//         counter += 1;
//     }
//     return counter;
// }
//
// //returns the number with the most steps to reach 1 useing the 3n+1 sequence
// function fun(){
//     var max = 0;
//     var length = 0;
//     for(var i = 1; i<= 1000; i++){
//         var question = jack(i);
//         if(question > length){
//             length = question;
//             max = i;
//         }
//     }
//     return max;
// }
//
// console.log(fun());

// //fibonacci sequence
// function fib(n){
//     if(n < 0){
//         return "nope";
//     }
//     if(n==0 || n==1){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }
//
// //improved fib with hash
// function fib(n, fibtionary){
//     if(fibtionary == undefined){
//         fibtionary ={};
//     }
//     if(n < 0){
//         return "nope";
//     }
//     if(n==0 || n==1){
//         return n;
//     }
//     if(!fibtionary[n]){
//         fibtionary[n]=fib(n-1, fibtionary)+fib(n-2, fibtionary);
//     }
//     return fibtionary[n];
// }

// function BST (){
//     this.root = null;
// }
//
// function BSTNode(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
// }
//
// BST.prototype.Add = function (val){
//     if(!this.root){
//         this.root = new BSTNode(val);
//         return this;
//     }
//     this.root.Add(val);
//     return this;
// }
//
// BSTNode.prototype.Add = function(val){
//     if(val > this.val){
//         if(this.right){
//             this.right.Add(val);
//         }
//         else{
//             this.right = new BSTNode(val);
//         }
//     }
//     else{
//        if(this.left){
//            this.left.Add(val);
//        }
//        else{
//            this.left = new BSTNode(val);
//        }
//     }
// }
//
// var myTree = new BST;
// myTree.Add(1);
//
// BST.prototype.IsValid = function(){
//     return IsValid(this.root, -Infinity, Infinity);
//
//     function IsValid(node, min, max){
//         if(!min){min = -Infinity;}
//         if(!max){max = Infinity;}
//         if(!node){
//             return true;
//         }
//         if(node.val > max || node.val < min){ //greater than or equal to goes to the right, does this change things??
//             return false;
//         }
//         return IsValid(node.right, node.val, max) && IsValid(node.left, min, node.left);
//     }
// }
//
// //recently going too fast with algorithms, should slow down and think about problems more systematically
//
//
// //command to run is "node filename.js"
//
// console.log(myTree.IsValid())
//
// //can i add to a node in tree to create an invalid tree?
// //count, these may be better as helper funcitons that pass nodes as well
// //height
//
// BST.prototype.Count = function(){
//     return Count(this.root);
//
//     function Count(node){
//         if(!node){
//             return;
//         }
//         if(!node.right && ! node.left){
//             return 1;
//         }
//     }
// }
//
// BST.prototype.IsPerfect = function(){
//     if(this.Count() != Math.pow(2, (this.Height()-1)){ //2**2 is the same as 2^2 to the power of
//         return false;
//     }
//     return true;
// }
//
// BSTNode.prototype.IsFull = function(){
//     if((this.right && ! this.left)||(!this.right && this.left)){ //(this.left ^ this.right) this is the same, "exclusive or" tests if one is true and the other is false, returns false is both are true or false, might only work with numbers.
//         return false;
//     }
//     else if(!this.right && ! this.left){
//         return true;
//     }
//     return this.right.IsFull() && this.left.IsFull();
// }
//
// BST.prototype.IsComplete = function(node, idx, size){
//     if(!size){
//         size = this.Count();
//     }
//     if(!idx){
//         idx = 0;
//     }
//     if(size <= idx){
//         return false;
//     }
//     return this.IsComplete(node.left, 2*idx+1, size) && this.IsComplete(node.right, 2*idx+2, size);
// }
//
// BST.prototype.IsComplete2 = function(node, size){ //this may not work....but seems like it should with some tinkering and I like breadth first search with a queue, maybe check if you queque a certain node and there are node ahead of it...return false
//     if(!size){
//         size = this.Count();
//     }
//     var counter = 0;
//     var queue = new Queue();
//     queue.enqueue((this.root, counter));
//     counter++;
//     while(counter <=size){//(!queue.IsEmpty)
//         let n = queue.dequeue();
//         if(!n[0]&&n[1]!=size){
//             return false;
//         }
//         queue.enqueue(n[0].left, counter);
//         counter++;
//         queue.enqueue(n[0].right, counter);
//         counter++;
//     }
//     return true;
// }