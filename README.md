# CGExam

1) Write a function that checks if 2, 3, 5 and 7 are multiples of the number entered
[Output]
console.log("Number 20 is multiple of number 2")

2) Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

3) You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string..
[Output]
console.log(countBs("BBC"));                // 2
console.log(countChar("kakkerlak", "k"));    // 4

4) Using recursion write a JavaScript function to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
The value of 0! is 1.

5) Write a function to convert a Cardinal into an Ordinal number by adding a suffix. Suffix is added based on the last digit of a number: 1st, 2nd, 3rd. Other numbers are suffixed with th: 4th, 9th, 10th. Exception are numbers 11-13: 11th, 12th, 13th.
[Output]
console.log(humanizeNumber(1));        // 1st

6) Write a range1 function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Write a range2 function to take an optional third argument that indicates the "step" value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to range1 behavior. Make sure it also works with negative step values.
[Output]
// range1
console.log(range1(2, 8));        // [2, 3, 4, 5, 6, 7, 8]
console.log(range1(8, 2));        // [8, 7, 6, 5, 4, 3, 2]
// range2 without step parameter
console.log(range2(2, 8));        // [2, 3, 4, 5, 6, 7, 8]

7) Write a function to truncate a string to a certain number of words.
[Output]
console.log(truncateWords('Lorem ipsum dolor sit amet.', 3));    // Lorem ipsum dolor

8) Write a function to alphabetize a string, i.e. sort the letters alphabetically. Remove the whitespace.
[Output]
console.log(alphabetizeString('Lorem ipsum'));    // Leimmoprsu

9) Write a function to find the most frequent item of an array of primitive types.
[Output]
console.log(findMostPopularItem([1, 1, 1, 2, 2]));        // 2

10) Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
[Output]
console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A'];
