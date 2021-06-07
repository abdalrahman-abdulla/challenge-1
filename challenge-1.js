/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

 function BestProfit(arr) {
    let min = 0;
    let max = 0;
    let days =['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
    for (let i = 0; i < arr.length; i++) {
        for (let index = i+1; index < arr.length; index++) {
            if(arr[index] - arr[i] > arr[max] - arr[min]){
                min = i
                max = index
            } 
        }
    }
    return `buy dollar at ${days[min]} and sell at ${days[max]}` 
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
    return  t2Start > t1End || t1Start >  t2End ? 'no overlap' :'overlap'
}
console.log(
    CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ),' -- ',
    CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00")
);

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) { 
    let count =0 
    let letter={
        'R':[],
        'L':[]
    }; 
    let flag=shoes[0];
    for (let i = 0; i < shoes.length; i++) { 
        if(shoes[i] == flag && letter['R'].length && letter['L'].length) 
        {
            letter[flag]=[]
            flag = shoes[i-1]
        } 
        letter[shoes[i]].push(shoes[i])
        if(shoes[i] != flag && letter['L'].length == letter['R'].length ){    
            count+=letter[shoes[i]].length
            letter['R']=[]
            letter['L']=[] 
            flag=shoes[i+1] 
        } 
        
    }
    return count
}
console.log(HowManyPairs("LLLRLRL"));

/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
    let count={};
    for (let index = 0; index < word.length; index++) {
        count[word[index]] = word[index] in count? count[word[index]]+1 : 1
    }
    return count;
}
console.log(HowManyLetters("abcac"));

/** Q5
 * Write a binary search function
 */

function BinarySearch(element, arr) {   
    /*arr.sort(function(a, b) {
        return a - b;
    })*/ 
    let end=arr.length -1
    let start=0
    let index
    while (end >= start){
        index = (start+end)%2==0 ? (start+end)/2 : Math.floor((start+end)/2)
        if(arr[index] == element)
            return index
        if(arr[index] > element) 
        {
            end = index -1
        }
        else
        {
            start = index + 1
        }
    }
    return 'not found'
}

console.log(BinarySearch(9, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
console.log(BinarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
console.log(BinarySearch(2, [1,2,3,4,5,6,7,8,9]));

/** Q6
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
function sortArray(arr){
    /*for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                temp =arr[j+1]
                arr[j+1]=arr[j]
                arr[j] =temp
            }
        }
    }*/
    let pos={}
    let neg={}
    arr.map(e=> e < 0 ? neg[-1*e]=1 : pos[e]=1 )
    arr=[ ...Object.keys(neg).map(e=> e*-1).reverse(),  ...Object.keys(pos)].map(e => Number(e))
    return arr
} 
console.log(sortArray([23, 15, 34, 17,-99,-60,-20,-33,0,-88,-10,9,8,7,6,5,4,3,2,1]))
/** Q7
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */
function minMax(arr){
    let min=0;
    let max=0;
    arr.forEach((element,index) => {
        arr[min] > element ? min =index :''
        arr[max] < element ? max =index :'' 
    });
   return [arr[min],arr[max]]
}
console.log(minMax([1, 2, 3, 4, 5]))

/** Q8
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */
function missingNum(arr) {
   let total=55 // total sum from 1 to 10 => if just one missing => total - sum of array = missing
   let sum=0
   arr.forEach(element => sum+=element)
   return total - sum;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
/** Q9
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */
function numToEng(num){
    let strNum='';
    numbersToTeen= [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    numbersToHundred = [
        '-',
        '-',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    if(num >= 100){
        strNum= numbersToTeen[Math.floor(num/100)] + ' hundred '
        num = num % 100
    }
    else if(num > 20){
        strNum= numbersToHundred[Math.floor(num/10)]+' '
        num = num % 10
    }
    else {
        strNum= numbersToTeen[num]+' '
        num= 0
    } 
    strNum = num != 0 ? strNum+numToEng(num) : strNum
    return strNum 
}
console.log(numToEng(126))
/** Q10
  * Create a function that squares every digit of a number.
 
 Examples
 squareDigits(9119) ➞ 811181
 
 squareDigits(2483) ➞ 416649
 
 squareDigits(3212) ➞ 9414
 Notes
 The function receives an integer and must return an integer.
  */
 function squareDigits(number){  
    return  Number((''+number).toString().split('').map(e =>  e*e).join('')) 
 }
 console.log(squareDigits(3212))
/** Q11
  * Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
 
 Example
 fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
 
 fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 Notes
 Make sure to return an array.
  */
function fizzBuzz(num){
    arr=[]
    for (let i = 1; i <= num; i++) {
        arr[i-1] = i%3==0 ? i%5==0 ? 'FizzBuzz':'Fizz' : i%5==0 ? 'Buzz' : i
    }
    return arr
}
console.log(fizzBuzz(15))
/** Q12
  * Create a function that concatenates n input arrays, where n is variable.
 
 Examples
 concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
 
 concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
 Notes
 Arrays should be concatenated in order of the arguments.
  */
function concat(...arr) {
    let arr2=[];
    arr.forEach(element=>{
        arr2=[...arr2,...element] 
    })
    return arr2
}
console.log(concat([1, 2], [3, 4]))
/** Q13
  * Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 
 Examples
 arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 
 arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 
 arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 Notes
 Notice that num is also included in the returned array.
  */
function arrayOfMultiples(num, length) {
    let arr=[]
    for (var i = 0; i <length;i++)
    {
        arr[i]=num*(i+1)
    }
    return arr
}
console.log(arrayOfMultiples(7, 5))
/** Q14
  * I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
 
 Here is my code:
 
 function flatten(arr) {
   arr2 = [];
   for (let i = 0; i < arr.length; i++) {
     arr2.concat(arr[i]);
   }
   return arr2;
 }
 But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.
 
 Examples
 flatten([[1, 2], [3, 4]]) ➞ []
 // Expected: [1, 2, 3, 4]
 
 flatten([["a", "b"], ["c", "d"]]) ➞ []
 // Expected: ["a", "b", "c", "d"]
 
 flatten([[true, false], [false, false]]) ➞ []
 // Expected: [true, false, false, false]
 
  */

function flatten(arr) {
    let arr2=[]
    for (let i = 0; i < arr.length; i++) {
        arr2=arr2.concat(arr[i]);
    }
    return arr2;
}

 console.log(flatten([[true, false], [false, false]]))
/** Q15
  * Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
 
 Examples
 testJackpot(["@", "@", "@", "@"]) ➞ true
 
 testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
 
 testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
 
 testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
 
 testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
 Notes
 The elements must be exactly identical for there to be a jackpot.
  */
function  testJackpot(arr) {
    for (let index = 1; index < arr.length; index++) {
        if(arr[0] != arr[index])
            return false
    }
    return true;
}
console.log( testJackpot(["@", "@", "@", "@","@"]))
/** Q16
  * Create a function that takes an array of numbers and returns the second largest number.
 
 Examples
 secondLargest([10, 40, 30, 20, 50]) ➞ 40
 
 secondLargest([25, 143, 89, 13, 105]) ➞ 105
 
 secondLargest([54, 23, 11, 17, 10]) ➞ 23
 Notes
 There will be at least two numbers in the array.
  */
function secondLargest(arr){
    let first=0;
    let second=1; 
    arr.forEach((element,index) => { 
        if(arr[first] < element){
            second=first
            first = index
        }
        else if(arr[second] < element && arr[first] > element){
            second =  index
        }
    })
    return arr[second]
}
console.log(secondLargest([54, 23, 11, 17, 10]));
/** Q17
  * Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
 
 Examples
 numberSplit(4) ➞ [2, 2]
 
 numberSplit(10) ➞ [5, 5]
 
 numberSplit(11) ➞ [5, 6]
 
 numberSplit(-9) ➞ [-5, -4]
 Notes
 All numbers will be integers.
 You can expect negative numbers too.
  */
function numberSplit(num) {
    if(typeof(num) != 'number'){
        return 'accept only integer'
    } else {
        return num % 2 === 0 ? [num/2, num/2] :  [Math.floor(num/2), Math.ceil(num/2)]
    }
}
console.log(numberSplit(-7));
/** Q18
  * Create a function that takes an array of strings and return an array, sorted from shortest to longest.
 
 Examples
 sortByLength(["Google", "Apple", "Microsoft"])
 ➞ ["Apple", "Google", "Microsoft"]
 
 sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
 ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
 
 sortByLength(["Turing", "Einstein", "Jung"])
 ➞ ["Jung", "Turing", "Einstein"]
 Notes
 All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
  */
function sortByLength(arr) {
    let temp 
    for (let index = 0; index < arr.length; index++) {
        for (let index2 = index + 1; index2 < arr.length; index2++) {
            if (arr[index].length > arr[index2].length) {
                temp = arr[index]
                arr[index] =arr[index2]
                arr[index2] =temp
            }
        }
    }
    return arr
}
console.log(sortByLength(["Google", "Apple", "Microsoft"]));  
/** Q19
  * Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
 
 Examples
 findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
 
 findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
 
 findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
 Notes
 Watch out for negative integers (numbers).
  */
function findLargestNums(arr) {
    let max=[]
    arr.forEach((element,index) => {
        max[index]=element[0]
        element.forEach(element => {
            max[index] = max[index] < element ? element : max[index]
        })
    })
    return max
}
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]))
/** Q20
  * A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
 
 [1, 3, 3, 5, 5, 5]
 // original array
 
 [1, 3, 5]
 // original array transformed into a set
 Create a function that sorts an array and removes all duplicate items from it.
 
 Examples
 set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
 
 set([4, 4, 4, 4]) ➞ [4]
 
 set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
 
 set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
 Notes
 For this question, output an array, not a set.
  These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
 See resources for a hint if you get stuck.
  */

 function set(arr) {  
    return [...new Set(arr)].sort(function(a, b) {
        return a - b;
    })
 }
 console.log(set([66,22.5,3,7,9,1]))