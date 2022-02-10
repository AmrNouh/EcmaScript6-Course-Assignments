# EcmaScript6-Course-Assignments
All Assignments of ES6 

## Day01
1) Swap the values of two variables using destructuring
2) Using rest parameter and spread operator return max value from any array 
note: array length is not fixed return min and max value and display each of them separately after function call.
3) Study new array api methods then create the following methods and apply it on this array var fruits = ["apple", "strawberry", "banana", "orange","mango"]
  a. test that every element in the given array is a string
  b. test that some of array elements starts with "a"
  c. generate new array filtered from the given array with only elements that starts with "b" or "s"
  d. generate new array each element of the new array contains a string declaring that you like the give fruit element
  e. use forEach to display all elements of the new array from previous point
  
## Day02
1) Create your own function that accepts multiple parameters to generate course information and display it. assume course information must contains courseName, courseDuation, courseOwner.
2) Promises
a. Make your own interface to create tabs and display usernames by requesting users from the link below using Ajax ES6 fetch function: 
https://jsonplaceholder.typicode.com/users
Note: handle the response with promises using then and catch methods.
b. When a user tab is clicked display its posts’ titles by requesting the posts from the link below using Ajax ES6 fetch function:
https://jsonplaceholder.typicode.com/posts?userId=userId
Note: 
  - handle the response with promises using Async and await.
  - do not get the posts of all users on page load, the user tab must be clicked to request its posts.

## Day03
1) Proxy
create a dynamic object using Proxy such that it has only the following properties 
  a∙ name property that accepts only string of 7 characters.
  b∙ address property that accepts only string value.
  c∙ age property that accepts numerical value between 25 and 60.
2) Using ES6 new Syntax & features:
Write a script to create different shapes (rectangle, square, circle) make all of them inherits from shape class.
  a. each shape contains two functions to calculate its area and its parameter.
  b. Display the area and each object parameter in your console by overriding toString().
  c. Make your classes in an external file and import them in a module to create objects.
3) generator
Create a generator that returns fibonacci series that takes only one parameter. Make two different implementations as described below:
  a. the parameter passed determines the number of elements displayed from the series.
  b. the parameter passed determines the max number of the displayed series should not exceed its value.
4) iterabtor
Create an iterable object by implementing @@iterator method i.e. Symbol.iterator, so that you can use for..of and retrieve its properties. retrieving the object properties and its values.

