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

// function countSection(arr){
//     var count = 0;
//     var pattern = /[0-9]/;
//     for(var x = 0; x < arr.length; x++){
//         for(var y = 0; y < arr[x].length; y++){
//             console.log("regex test: " + pattern.test(arr[x][y]));
//             if(pattern.test(arr[x][y])){
//                 floodfill(arr, x, y, arr[x][y]);
                
//                 console.log( "X is: " + x + " Y is: " + y);
//                 console.log(arr + " arr in main function. Count: " + count);
//                 count++;
//             }
//         }
//     }
//     return "Final count it " + count;
// }

// function floodfill(arr, x, y, value){
//     if(x<0 || y<0 ||  x> arr.length - 1 || y> arr[x].length-1 || arr[x][y] != value){ 
//         return; //don't need to return arr
//     }
//     else{
//         arr[x][y] = "A";
//         floodfill(arr, x+1, y, value);
//         floodfill(arr, x-1, y, value);
//         floodfill(arr, x, y+1, value);
//         floodfill(arr, x, y-1, value);
//     }
// }

// var test = [[0, 0, 0, 1, 1],[0, 0, 1, 1, 2],[2, 2, 1, 0, 0]];

// console.log(countSection(test));

function BST (){
    this.root = null;
}

function BSTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.Add = function (val){
    if(!this.root){
        this.root = new BSTNode(val);
        return this;
    }
    this.root.Add(val);
    return this;
}

BSTNode.prototype.Add = function(val){
    if(val > this.val){
        if(this.right){
            this.right.Add(val);
        }
        else{
            this.right = new BSTNode(val);
        }
    }
    else{
       if(this.left){
           this.left.Add(val);
       }
       else{
           this.left = new BSTNode(val);
       }
    }
}

var myTree = new BST;
myTree.Add(1);

BST.prototype.IsValid = function(){
    return IsValid(this.root, -Infinity, Infinity);

    function IsValid(node, min, max){
        if(!min){min = -Infinity;}
        if(!max){max = Infinity;}
        if(!node){
            return true;
        }
        if(node.val > max || node.val < min){ //greater than or equal to goes to the right, does this change things??
            return false;
        }
        return IsValid(node.right, node.val, max) && IsValid(node.left, min, node.left);
    }
}

//recently going too fast with algorithms, should slow down and think about problems more systematically


//command to run is "node filename.js"

// console.log(myTree.IsValid())

//can i add to a node in tree to create an invalid tree?
//count, these may be better as helper funcitons that pass nodes as well
//height

BST.prototype.Count = function(){
    return Count(this.root);

    function Count(node){
        if(!node){
            return;
        }
        if(!node.right && ! node.left){
            return 1;
        }
    }
}

BST.prototype.IsPerfect = function(){
    if(this.Count() != Math.pow(2, (this.Height()-1))){ //2**2 is the same as 2^2 to the power of
        return false;
    }
    return true;
}

BSTNode.prototype.IsFull = function(){
    if((this.right && ! this.left)||(!this.right && this.left)){ //(this.left ^ this.right) this is the same, "exclusive or" tests if one is true and the other is false, returns false is both are true or false, might only work with numbers.
        return false;
    }
    else if(!this.right && ! this.left){
        return true;
    }
    return this.right.IsFull() && this.left.IsFull();
}

BST.prototype.IsComplete = function(node, idx, size){
    if(!size){
        size = this.Count();
    }
    if(!idx){
        idx = 0;
    }
    if(size <= idx){
        return false;
    }
    return this.IsComplete(node.left, 2*idx+1, size) && this.IsComplete(node.right, 2*idx+2, size);
}

BST.prototype.IsComplete2 = function(node, size){ //this may not work....but seems like it should with some tinkering and I like breadth first search with a queue, maybe check if you queque a certain node and there are node ahead of it...return false
    if(!size){
        size = this.Count();
    }
    var counter = 0;
    var queue = new Queue();
    queue.enqueue((this.root, counter));
    counter++;
    while(counter <=size){//(!queue.IsEmpty)
        let n = queue.dequeue();
        if(!n[0]&&n[1]!=size){
            return false;
        }
        queue.enqueue(n[0].left, counter);
        counter++;
        queue.enqueue(n[0].right, counter);
        counter++;
    }
    return true;
}

BST.prototype.IsBal = function(){

    function isBalanced(node){
        if(!node){
            return true;
        }
        if(Math.abs(Height(node.left) - Height(node.right)) > 1){
            return false;
        }
        return isBalanced(node.left) && isBalanced(node.right);
    };

    return isBalanced(this.root);
}
//need a repair function T_T
//MyTree
myTree.Add(5);
myTree.Add(7);
myTree. Add(2);
// console.log("The height of my tree is " + myTree.Height());

// //squares in a "true" rectangle where one side is longer than the other

// function sqInRect(lng, wdth){
//   var solution = [];
//   if(lng == wdth){
//     return null;
//   };
//   Helper(lng, wdth);
  
//   function Helper(lng, wdth){
//       if(lng < wdth){
//         solution.push(lng);
//         wdth -= lng;
//       }
//       else {
//         solution.push(wdth);
//         lng -= wdth;
//       };
//     if(lng > 0 && wdth > 0){
//       Helper(lng, wdth);
//     };
//   };
//   return solution;
// }

// //top solution on code wars
// function sqInRect(lng, wdth){
//   if(lng === wdth){
//     return null;
//   }
//   var squares = [];
  
//   while(lng !== wdth){
//     if (lng > wdth) {
//       squares.push(wdth);
//       lng = lng - wdth;
//     } else {
//       squares.push(lng);
//       wdth = wdth - lng;
//     }
//   }
//   squares[squares.length] = squares[squares.length -1]; //adds the extra 1 because the while conditional will stop when you have 1x1
  
//   return squares;
// }
// sqInRect(3, 5


// //rbg to hexadecimal
// function rgb(r, g, b){
//   r = check(r);
//   g = check(g);
//   b = check(b);
//   function check(n){
//     if(n > 255){
//     n = 255;
//     };
//     if(n < 0){
//       n = 0;
//       };
//     console.log(n);
//     return n;
//   };
//   var hexDict = {
//     0: 0,
//     1:1,
//     2:2,
//     3:3,
//     4:4,
//     5:5,
//     6:6,
//     7:7,
//     8:8,
//     9:9,
//     10: "A",
//     11: "B",
//     12: "C",
//     13: "D",
//     14: "E",
//     15: "F",
//   };
//   var answer = "";
//   answer += hexDict[Math.floor(r/16)];
//   answer += hexDict[Math.floor(r%16)];
//   answer += hexDict[Math.floor(g/16)];
//   answer += hexDict[Math.floor(g%16)];
//   answer += hexDict[Math.floor(b/16)];
//   answer += hexDict[Math.floor(b%16)];
//   return answer;
// }

// //top solution from code wars
// function rgb(r, g, b){
//   return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }

// //ToString(16) uses base 16 when converting......
// //.slice(-2) selects the last two characters of the string

// console.log(rgb(173,255,47));

// //maximum subarray, returns the sum of the maximum sub array in an array
// var maxSequence = function(arr){
//   if(arr.length == 0){
//     return 0;
//   };
//   var maxMax = arr[0];
//   var curMax = 0;
//   for(var i = 0; i < arr.length; i++){
//     curMax += arr[i];
//     if(curMax > maxMax){
//       maxMax = curMax;
//       }
//       if(curMax < 0){
//          curMax = 0;
//       }
//   };
//   // return arr.slice(start, end);
//   return maxMax;
// }

// //max subarray best answer
// var maxSequence = function(arr){
//   var min = 0, ans = 0, i, sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// }

// //max subarray micheal's answer
// var sumArray = function(array) {
//   var ans = 0;
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     ans = Math.max(0, ans + array[i]);
//     sum = Math.max(sum, ans)
//   }
//   return sum;
// };

// //hill climbing solution to traveling salesman
// var salesmanMap = [[0,1,2,4], 
//                   [1,0,1,3], 
//                   [2,1,0,7], 
//                   [4,3,7,0]];

// var article = [1,2];

// // var topics = [topic1, topic2, topic3]

// Tag = function(tag, tagid, weight){
//     this.tag = tag;
//     this.id = tagid;
    // this.weight = 1; //is this how you set a default lol?
    // this.weight = weight;
    //do I need more information?? can I just leverage the indexes in the graph?
    //no weights lose directionality
// }

// Customer = function(title, tag1, tag2, tag3){
//     var id = 1;
//     var tag1 = new Tag(tag1, 0, id);
//     var tag2 = new Tag(tag2, 1, id);
//     var tag3 = new Tag(tag3, 2, id);
//     var tags = [tag1, tag2, tag3];
//     this.title = title;
//     this.book = [];
//     this.tags = [tag1, tag2, tag3]; 
//     this.graph = new Graph();
    // this.graph = [[0, 10, 10],
    //               [10, 0, 10],
    //               [10, 10, 0]]; //intialize the adjacency matrix with equal weight and equal distance between each node.
    // this.newTag = function(tag){//pass article so you have access to other two articles??
    //     if(!tag.id){//new tag
    //         this.addTag(tag);
    //     }
    //     else{//tag exist, check for vertices.
    //         this.graph.addEdge(tag);
    //     }
    // }
    // this.addTag = function(tagtitle, tag1, tag2){
    //     //have a check to see if this tag is in the matrix already BEFORE going into this matrix
    //     var index = this.graph.length;//Maybe have a counter that keeps track of the "filled" matrix, and double the size of the matrix everytime you need to add to it.
    //     console.log(index);
    //     if(tagtitle !instanceof(tag)){
    //         var tag = new tag(tagtitle);
    //     }
    //     this.graph.push([]);
    //     this.graph[index][tag1.id] = 10;
    //     this.graph[index][index] = 0;
    //     if(tag2){
    //         this.graph[index][tag2.id] = 10;
    //     }
    // }
    // this.addEdge = function(tag1, tag2, tag3){
    //     if(!this.graph[tag1][tag2]){
    //         this.graph[tag1.id][tag2.id] = 10;
    //         this.graph[tag2.id][tag1.id] = 10;
    //     }
    //     if(!this.graph[tag1][tag3]){
    //         this.graph[tag1.id][tag3.id] = 10;
    //         this.graph[tag3.id][tag1.id] = 10;
    //     }
    // }
    // this.doubleGraph = function(){
    //     this.graph.length = this.graph.length*2;
    //     var newLength = this.graph[0].length*2;
    //     for(var i = 0; i < 3; i++){
    //         // console.log(this.graph[i]);
    //         this.graph[i].length = newLength;
    //     }
    //     return this;
    // }
// }

// function Graph(tag1, tag2, tag3) {
//     this.vertices = [];
//     this.edges = [];
//     this.numberOfEdges = 0;
//     this.addVertex(tag1);
//     this.addVertex(tag2);
//     this.addVertex(tag3);
//     }

//     Graph.prototype.addVertex = function(vertex) {
//     this.vertices.push(vertex);
//     this.edges[vertex] = [];
//     };
//     Graph.prototype.removeVertex = function(vertex) {
//     var index = this.vertices.indexOf(vertex);
//     if(~index) {
//         this.vertices.splice(index, 1);
//     }
//     while(this.edges[vertex].length) {
//         var adjacentVertex = this.edges[vertex].pop();
//         this.removeEdge(adjacentVertex, vertex);
//     }
//     };
//     Graph.prototype.addEdge = function(vertex1, vertex2) {
//         var obj1 = {};
//         obj1[vertex1] = 10;
//         var obj2 = {};
//         obj2[vertex2] = 10;
//         this.edges[vertex1].push(obj2);
//         this.edges[vertex2].push(obj1);
//         this.numberOfEdges++;
//     };
//     Graph.prototype.editEdge = function(vertex1, vertex2, vertex3, feedback){
//         for(var i = 0; i < this.edges[vertex1].length; i++){
//             if(this.edges[vertex1][i].hasOwnProperty(vertex2)){
//                 this.edges[vertex1][i][vertex2] += feedback;
//                 break;
//             }
//         }
//         for(i = 0; i < this.edges[vertex2].length; i++){
//             if(this.edges[vertex2][i].hasOwnProperty(vertex1)){
//                 this.edges[vertex2][i][vertex1] += feedback;
//                 break;
//             }
//         }
//          for(var i = 0; i < this.edges[vertex1].length; i++){
//             if(this.edges[vertex1][i].hasOwnProperty(vertex3)){
//                 this.edges[vertex1][i][vertex3] += feedback;
//                 break;
//             }
//         }
//         console.log(vertex3);
//         console.log(this.edges[vertex3]);               
//         for(i = 0; i < this.edges[vertex3].length; i++){
//             if(this.edges[vertex3][i].hasOwnProperty(vertex1)){
//                 this.edges[vertex3][i][vertex1] += feedback;
//                 break;
//             }
//         }
//     };
//     Graph.prototype.articleScore = function(tag1, tag2, tag3){
//         var score = 0;
//         var found;
//         for(var i = 0; i < this.edges[tag1].length; i++){
//             if(this.edges[tag1][i].hasOwnProperty(tag2)){
//                 score += this.edges[tag1][i][tag2];
//                 found = 1;
//                 break;
//             }
//         }
//         if(found != 1){ //they didn't find the tag
//             this.addVertex(tag2);
//             this.addEdge(tag1, tag2);
//             score += 10;
//         }
//         found = 0;
//         for(i = 0; i < this.edges[tag1].length; i++){
//             if(this.edges[tag1][i].hasOwnProperty(tag3)){
//                 // console.log(this.edges[tag1][i][tag3]);
//                 score += this.edges[tag1][i][tag3];
//                 found = 1;
//                 break;
//             }
//         }
//         if(found != 1){ //they didn't find the tag
//             this.addVertex(tag3);
//             this.addEdge(tag1, tag3);
//             score += 10;
//             found = 0;
//         }
//         // console.log("score incoming");
//         // console.log(score);
//         return score;
//     }
//     Graph.prototype.removeEdge = function(vertex1, vertex2) {
//     var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
//     var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
//     if(~index1) {
//         this.edges[vertex1].splice(index1, 1);
//         this.numberOfEdges--;
//     }
//     if(~index2) {
//         this.edges[vertex2].splice(index2, 1);
//     }
// };

// var liz = new Customer("algorithm queen", "sleep", "candy", "tentacles");
// //    this.graph = new Graph();

// liz.graph.addVertex(1);
// liz.graph.addVertex(3);
// liz.graph.addVertex(4);
// // liz.graph.addEdge(1,3);
// // liz.graph.addEdge(1,4);
// liz.graph.articleScore(1,3,4);
// // liz.graph.editEdge(1,3, 4, -1);
// // liz.graph.articleScore(1,3,4);
// liz.graph.articleScore(1,3,5);
// // liz.graph.editEdge(1,5, 1);
// // liz.graph.articleScore(1,3,5);
// console.log(liz.graph.edges);




// Book = function(customer){
//     this.articles = [];
//     this.customer = customer;
// }

// Article = function(title, id, tag1, tag2, tag3){
//     this.id = id;
//     this.title = title;
//     this.tag = [tag1, tag2, tag3];
//     this.score = 0;
//     this.feedback;
// }

// var news = new Article("raining cats and dogs", 1, 3, 5);
// news.feedback = 1;
// console.log(news);
// liz.graph.editEdge(news.tag[0], news.tag[1], news.tag[2], news.feedback);
// console.log("SCORE");
// console.log(liz.graph.articleScore(news.tag[0], news.tag[1], news.tag[2]))
// console.log(liz.graph.edges);



// console.log(liz);
// liz.doubleGraph();
// console.log(liz.graph);
// console.log(liz.graph);

// function articleScore(arr, node, articleNodes){
//     var articleScore= 0;
//     for(var i = 0; i < articleNodes.length; i++){
//         articleScore += arr[node][articleNodes[i]];
//     }
//     return articleScore;
// }

// function articleFeedback(arr, node, articleNode, feedback){
//     for(var i = 0; i < articleNode.length; i++){
//         arr[node][articleNode[i]] += feedback;
//     }
// }

// function firstSort(customer, articles){
//     var tag1 = customer.tag[0];
//     var tag2 = customer.tag[1];
//     var tag3 = customer.tag[2];
//     var round2 = [];
//     for(var i = 0; i < articles.length; i++){
//         if(articles[i].tags){//if article contains one of the three tags
//             round2.push(articles[i]);
//         }
//     }
//     return round2;
// }

// function articleSort(arr, customer, articles){

// }

// console.log("article score" + articleScore(salesmanMap, 3, article));
// articleFeedback(salesmanMap, 3, article, -1);
// console.log("article score" + articleScore(salesmanMap, 3, article));



// var route = [0,1,2,3];
//give map and route, return distance
    //route is an array of locations
// function oneRoute(arr, route){
//     var distance = 0;
//     var start;
//     var end;
//     for(var i = 0; i < route.length; i++){
//         start = route[i];
//         end = route[(i+1)%arr.length]; //make this cycle back tot eh first element when you're looking at the last element, it does!
//         // console.log("start" + start);
//         // console.log("end" + end);
//         distance += arr[start][end];
//     }
//     return distance; //this is returning the right distance! Now to make the algorithm to do the swap and check.
// }

// console.log(oneRoute(salesmanMap, route));

//make a funciton that hill climbs for one given route, make it later take an array of routes and pick the best one in a multidemenional array. Or maybe generate a bunch of routes..also use the two subtractions and two additions to make the changes to distance.
// function hillClimb(arr, route){
//     var bestRoute = route;
//     var bestDistance = oneRoute(arr, route);
//     var temp;
//     var testRoute;
//     var testDistance;
//     for(var i = 0; i < route.length; i ++){
//         temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp; //what happens to teh swap at the end....make sure it doesn't break and the looping back to original position works
//         testRoute = route; //is this test Route an extra variable??
//         testDistance = oneRoute(arr, testRoute);
//         if(testDistance < bestDistance)
//         //ugh need another loop in here somewhere to explore better options.
//     }
// }

//return false or the number of flips needed to make all the pancakes smiley face up.
// function pancake(griddle){
//     var pancakeside = {
//         // O:☺,
//         // ☺:O,
//         0:1,
//         1:0,
//     };

//     var flips = 0;
//     for(var i = 0; i < griddle.length -2; i++){
//         if(griddle[i] == 0){
//             flips++;
//             for(var j = i; j < (i +3); j++){
//                 griddle[j]=pancakeside[griddle[j]];
//             }
//         }
//     }
     
//      if(griddle[griddle.length-1] == 0 || griddle[griddle.length-2] ==0){
//          return false;
//      }

//      return flips;   

// }

// // var griddle = [☺, ☺, ☺, O, O, O];
// var griddle = [1, 1, 1, 0, 0, 0];
// var griddle2 = [1, 0, 0, 1, 1, 0,];
// console.log(pancake(griddle2));

//linked list madness
//constructors
Node = function(val){
    this.value = val;
    this.next = null;
}

SLL = function(){
    this.head = null;
}

SLL.prototype.AddToFront = function(val){ //make this better, accept node or value....
    if (!this.head){
        this.head = new Node(val);
        // console.log(this.head);
        return this;
    }
    var node = new Node(val);
    node.next = this.head;
    this.head = node;
    return this;
}

SLL.prototype.find = function(){
    var runner = this.head;
    while(runner){

    }
}

SLL.prototype.printAll = function(){ //why do you print undefined at the end??? I was console logging this function which reurns nothing...therefore it was undefined
    var runner = this.head;
    while(runner){
        console.log(runner.value);
        runner = runner.next;
    }
}

SLL.prototype.RemoveFromFront = function(){
    var runner = this.head;
    this.head = this.head.next;
    runner.next = null;
    return runner;
}

SLL.prototype.Traverse = function(){
    var runner = this.head;
    while(runner.next){
        runner = runner.next;
    }
    return runner;
}

SLL.prototype.RemoveFromBack = function(){
    
}

SLL.prototype.Reverse = function(){
    if(!this.head){
        return this;
    }
    if(!this.head.next){ //if list is only one thing long
        return this;
    }
    var runner = this.head;
    var list2 = new SLL;
    list2.head = this.head.next;
    while(list2.head.next){
        this.AddToFront(list2.RemoveFromFront().value);
    }
    this.AddToFront(list2.head.value);
    runner.next = null;
    return this;
}

// var list = new SLL();
// // console.log(list);
// list.AddToFront(3);
// list.AddToFront(5);
// list.AddToFront(2);
// list.printAll();
// // list.removeFromFront();
// list.Reverse(); 
// list.printAll();

// var a = new Node(1);
// var b = new Node(b);
// var c = new Node(c);

// a.next = b;
// b.next = c;
// c.next = a;

// console.log(a);
//stringify head find when next = [Circular], then you will know that you have a loop in the linked list

// //squares in a "true" rectangle where one side is longer than the other

// function sqInRect(lng, wdth){
//   var solution = [];
//   if(lng == wdth){
//     return null;
//   };
//   Helper(lng, wdth);
  
//   function Helper(lng, wdth){
//       if(lng < wdth){
//         solution.push(lng);
//         wdth -= lng;
//       }
//       else {
//         solution.push(wdth);
//         lng -= wdth;
//       };
//     if(lng > 0 && wdth > 0){
//       Helper(lng, wdth);
//     };
//   };
//   return solution;
// }

// //top solution on code wars
// function sqInRect(lng, wdth){
//   if(lng === wdth){
//     return null;
//   }
//   var squares = [];
  
//   while(lng !== wdth){
//     if (lng > wdth) {
//       squares.push(wdth);
//       lng = lng - wdth;
//     } else {
//       squares.push(lng);
//       wdth = wdth - lng;
//     }
//   }
//   squares[squares.length] = squares[squares.length -1]; //adds the extra 1 because the while conditional will stop when you have 1x1
  
//   return squares;
// }

//print numbers fromm 1 to 255

// function print(){
//     for(var i = 0; i <= 255; i++){
//         console.log(i);
//     }
// }

// print();

//print odd numbers from 1 to 1000

// function odds(){
//     for(var i = 1; i <= 1000; i += 2){
//         console.log(i);
//     }
// }

// odds();

// function sumOdds(){
//     var sum = 0;
//     for(var i = 1; i <= 5000; i+=2){
//         sum += i;
//     }
//     return sum;
// }

// // console.log(sumOdds());

// function printArray(arr){
//     for(var i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// // printArray([1, 2, 3, 4, 5]);

// function maxArray(arr){
//     var max = arr[0];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// var arr = [1, 2, 3, 4, 5, 12, 3, 4, 7];

// // console.log(maxArray(arr));

// function arraySum(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }

// // console.log(arraySum(arr));

// function arrayOfOdds(){
//     var arr = [];
//     for(var i = 0; i <= 255; i++){
//         arr.push(i);
//     }
//     console.log(arr);
// }

// // arrayOfOdds();

// function greaterThanY(arr, y){
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > y){
//             count++;
//         }
//     }
//     console.log(count);
// }

// // greaterThanY(arr, 4);

// function mapSquare(arr){
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i]*arr[i];
//     }
//     return arr;
// }

// console.log(mapSquare(arr));

//buying stocks the algorithm
//write a function that returns the greatest(or least worst) profit you can make in a day if you can buy and sell one time.
// function stockMarket(arr){
//     var max = arr[1] - arr[0];
//     var buy = arr[0];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] < buy){
//             buy = arr[i];
//         }
//         if(arr[i] - buy > max){
//             max = arr[i] - buy;
//         }
//     }
//     return max;
// }

// var array = [1, 50, 5, 13, 4, 7, 22];

// console.log(stockMarket(array));

//let's make some heaps
var heap = ["heap"]; //min heap
function AddToHeap(heap, val){
    var valIndex = heap.length;
    var parentIndex = Math.floor(valIndex/2);
    var temp;
    heap.push(val);
    if(valIndex == 1){
        return;
    }
    while(heap[parentIndex] > val){
        temp = heap[parentIndex];
        heap[parentIndex] = heap[valIndex];
        heap[valIndex] = temp;
        valIndex = parentIndex;
        parentIndex = Math.floor(parentIndex/2);
    }
}

// AddToHeap(heap, 1);
// AddToHeap(heap, 3);
// AddToHeap(heap, 5);
// AddToHeap(heap, 11);
// AddToHeap(heap, 7);
// console.log(heap);
// AddToHeap(heap, 2);
// console.log(heap);

// Write a node.js function that takes as input:
// • current:  an array of strings
// • history:  an array of (array of strings)

// and returns:
// • newstrings:  a subset of current, containing only those strings which are in current but NOT in history
// • newhistory:  an array of (array of strings) which is a modified version of history such that a) the zeroth (array of strings) is removed, and the newstrings array is appended to the end

// Example input:
// • current:  [ "xxx", "aaa", "yyy", "hij" ]
// • history:  [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ]

// Example output:
// • newstrings:  [ "xxx", "yyy" ]
// • newhistory:  [ [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ], [ "xxx", "yyy" ] ]

var current = [ "xxx", "aaa", "yyy", "hij" ];
var history = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ];

function StringMadness(current, history){

    var obj = {};
    var newStrings = [];
    var newHistory = [];

    for(var i = 0; i < history.length; i++){
        for(var j = 0; j < history[i].length; j++){
            if(!obj[history[i][j]]){
                obj[history[i][j]] = 1;
            }
        }
    }

    for(i = 0; i < current.length; i++){
        if(!obj[current[i]]){
            newStrings.push(current[i]);
        }
    }

    history.shift();
    history.push(newStrings); //could just return history
    newHistory = history;
    console.log(newStrings);
    console.log(newHistory);
}

StringMadness(current, history);