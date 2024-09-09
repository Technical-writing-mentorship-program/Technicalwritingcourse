---
title: "JavaScript Essentials: Understanding Variables and Data Types"
description: "This guide will help you learn the fundamentals of JavaScript variables and data types. You'll also learn how to declare, assign and manipulate values effectively"
summary: "Are you a beginner in JavaScript?
This article will put on the right path of learning the basic building blocks of JavaScript."
date: 2024-08-26T16:21:44+02:00
lastmod: 2024-09-02T16:21:44+02:00
draft: false
weight: 50
categories: [Frontend development, JavaScript, Coding]
tags: [JavaScript, Variables, DataTypes]
contributors: []
pinned: false
homepage: false
seo:
  title: "JavaScript Variables and Data types: A Beginner's Guide" # custom title (optional)
  description: "Understanding the fundamentals of JavaScript is essential. This guide will help you learn the fundamentals of JavaScript variables and data types. You'll also learn how to declare, assign and manipulate values effectively " # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lcgdsfuzxfqsnklr4dpm.png" alt="Header" width="100%">

## Introduction

JavaScript is a popular, verstile programming language that allows developers to create dynamic and interactive online applications. Variables and data types are two key elements in JavaScript that are required for storing and manipulating information within your code.

This article will go over variables in detail, how to declare and assign values to them, as well as the various data types available and how to use them effectively. Mastering these ideas provides a solid basis for creating powerful and efficient JavaScript applications.

## Understanding Variables

Variables acts as a container that holds and stores data for later use. They allow you to assign names to values, thereby, making your code more readable and maintainable.

The `Var`, `Let` and `Const` keywords are used to declare variables. The variables are assigned a value using the assignment operator (=).

Variables holds different data types such as numbers, string, booleans, arrays, objects, and more. Now, let's take a look at each one.

### Var

The `Var` keyword is an old method of declaring a variable and it's not recommended due to its [hoisting](https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/) and [scope concerns](https://www.freecodecamp.org/news/scope-and-closures-in-javascript/). Using `Var` can lead to accidental reassignment of variables.

```javascript
var x = 5;
var name = "Sophie";

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
var x = 5 : In this line of code, a variable "x" is declared and it is then assigned (using the assignment operator = ) to a numerical value "5".

var name = "Sophie" : In this line of code, a variable "name" is declared and it is assigned to a string value "Sophie".

Don't worry about what a string is, we'll talk about it later in this article.
{{< /callout >}}

```javascript
var x = 10;
var y = 20;
var z = x + y;
var name = "Dave";

console.log(x);    // 10
console.log(y);   // 20
console.log (z);  // 30
console.log(name);  // Dave

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
var x = 10 : In this line a variable "x" is declared and assigned to a number "10"

var y = 20 : A variable "y" is declared and assigned to a number "20"

var z = x + y : A variable 'z" is declared and it is assigned to the result of adding the values of "x" and "y"

var name = "Dave": In this line of code, a variable "name" is declared and is then assigned to a string value "Dave".

console.log(x), Console.log (y) : These prints to the console each of the value of variables "x" and "y", which are 10 and 20 respectively.

console.log(z) : This line prints to the console the result of the addition of  var "x" and "y", which is 30.

console.log(name) : This line prints to the console the value of the var "name".
{{< /callout >}}

### Let

The `let` keyword is the most common way of declaring a variable. This keyword is a good choice for declaring variables whose values will be reassigned.

```javascript
let x = 10;
let color = "Red";
color = "Blue";  // values can be reassigned

console.log(x); // 10
console.log (color);  // Blue

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
let x = 10; This line declares a variable "x" using the "let" keyword and assigns it to a number value "10".

let color = "Red"; This line declares a variable "color" and assigns it to a string value "Red"

color = 'Blue"; This line **reassigns** a new value "Blue" to the variable "color". The original value "Red" will be  **overwriten** by the new value "Blue".

console.log(x) : This line prints to the console the value of the variable "x", which is "10".

console.log(color) : This line prints to the console the current value of the variable "color", which is "Blue".
{{< /callout >}}

### Const

The `const` keyword is used to create variables whose values you won't reassign. They are useful for variables that should remain constant throughout their lifetime. This helps prevent accidental changes to your code and improves code maintainability.
Note that values of variables declared with `const` can't be changed.

```javascript
const pi = 3.14159;

console.log(pi); // 3.14159

```

{{< callout context="note" title="Explanation" icon="rocket" >}}

The above code block defines a constant named "pi" and assigns it the value 3.14159. This value represents the mathematical constant pi, which is the ratio of a circle's circumference to its diameter.

console.log(pi): Prints the value of the constant pi to the console

_The const keyword is used to declare a constant variable, it is useful for values like mathematical constants_

{{< /callout >}}

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5378239849378753"
     data-ad-slot="6682693300"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Understanding Data Types

Data Types are another fundamental building blocks of JavaScript. The most common ones are the primitive and complex data types.

The primitive data types consists of Number, String, Boolean, BigInt, Null and Undefined while the Complex data types consist of but not limited to Arrays and Objects.

### Primitive Data types

#### Number : Numeric values

Number represents numerical values. They could be intergers or floating-point numbers and are also used to perform mathematical operations.

```javascript
let person1Age = 16;
let person2Age = 20;
const pi = 3.14159
let totalAge = person1Age + person2Age;

console.log (person1Age);  // 16
console.log(person2Age);   // 20
console.log (pi); // 3.14159
console.log(totalAge);  //36

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
"person1Age" and "person2Age" stores the ages of two people.

"pi" holds the approximate value of the mathematical constant pi (a floating point value).

"totalAge" is used to calculate and store the sum of "person1Age" and "person2Age".

The line "let totalAge = person1Age + person2Age; " calculates the total age by adding the ages of two people and assigns the result to the "totalAge" variable.

The console.log statements print the values of each of the variable to the console.
Person1Age : 16
Person2Age : 20
Value of pi : 3.14159
totalAge : 36

You can see that all of these are assigned to a numerical value.

Use case : In a E-commerce, you can use Numbers to calculate product prices, discount etc.

{{< /callout >}}

#### String : Textual data

String represent sequences of characters and textual data. They must be enclosed within a single (' ') or double (" ") quotes.

```javascript
let name = "Patricia Lawson";
let greeting = "Hello, world!";

console.log(name); // Patricia Lawson
console.log(greeting); // Hello, world!

```

{{< callout context="note" title="Use case" icon="rocket" >}}
The code block defines two variables,
name : which stores the string "Patricia Lawson"
greeting : stores the string "Hello, world!"

The console.log statements then print the values of these variables to the console,
console.log(name); prints "Patricia Lawson"
console.log(greeting); prints "Hello, world!"

Note: It is a string data type when they are enclosed in a single or double quotes.

Use case : In a To-do application, you can use String to store the To-do tasks.

{{< /callout >}}

#### Booleans : True or False

Booleans represents logical values either `true` or `false`. The are often used for conditional statements and logical operations. `true` means "yes or correct", and `false` means "no or incorrect"

```javascript
let isWeekend = true;
let isRaining= false;

console.log(isWeekend) // true
console.log(isRaining) // false
```

{{< callout context="note" title="Explanation" icon="rocket" >}}
The above code defines two boolean variables,
isWeekend : Stores the boolean value "true", indicating that it is indeed the weekend.
isRaining: Stores the boolean value "false", indicating that it is not raining.

The console.log statements then prints the values of these variables to the console,
console.log(isWeekend); prints "true" because it is weekend.
console.log(isRaining); prints "false" because it is not raining.

Use case: In a Social media application, you can use Boolean to determine if the user is a female or male when creating a profile.

{{< /callout >}}

#### BigInt : large Integers

BigInt are used to store numbers that are too large to be stored in the `Number` data type. They provide precise calculation for large intergers. To create a `BigInt`, add n to the end of an integer or call `BigInt()`

```javascript
let largeNumber = 123456789023456789098765432155575643213456789n;
let y = BigInt (12345678909876543213456788904567890643224566788)

console.log(largeNumber); //  123456789023456789098765432155575643213456789
console.log(y); // 12345678909876543213456788904567890643224566788

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
let largeNumber = 123456789023456789098765432155575643213456789n; This line declares a variable named "largeNumber" and assigns it a large interger value. The "n" suffix indicates that this value is a BigInt.

Same goes for "let y = BigInt (12345678909876543213456788904567890643224566788);"

The console.log statements print the values of each of the variable to the console.

largeNumber : 123456789023456789098765432155575643213456789
y : 12345678909876543213456788904567890643224566788

Use case: In a financial application, you can use BigInt to store values that are too big to be stored in Number.

{{< /callout >}}

#### Null : Absence of a value

Null is used to explicitly state the intentional absence of a value. It represents "nothing ", "empty" or "unknown value". It's often used to intentionally set a variable to an empty state.

```javascript
let emptyValue = null;

console.log(emptyValue); // null

```

{{< callout context="note" title="Explanation" icon="rocket" >}}

let emptyValue = null; This line declares a variable named emptyValue and assigns it the value "null".

console.log(emptyValue); This line prints the value of "emptyValue" to the console. Since "emptyValue" is assigned the value "null", the output will be "null".

Use case: Imagine you're building a form where users can enter their informations . You can use Null to indicate the user chose not to answer a particular question.

{{< /callout >}}

#### Undefined : Uninitialized variable

Undefined represents variable that has been declared but has not yet been assigned a value. It means the variable exists, but it doesn't hold any specific data yet.

```javascript
let name;

console.log(name);  //  undefined

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
let name; This line declares a variable named "name". Since no value is assigned to it, "name" currently has the value "undefined".

console.log(name); This line prints the value of "name", because "name" is "undefined", the output will be : undefined.

Use case: Imagine you're building an E-commerce website, when a user registers but hasn't completed their profile, their profile information could be undefined.

{{< /callout >}}

### Complex Data types

#### Arrays : Ordered collections

Arrays are used to store and manipulate mutiple values in a specific order. Each of these value is termed an element, and the each of these elements can be accessed using their index number, which starts from "0", because they are zero-indexed.

That means, the first element of an array is at index "0", the second element is at index "1", the third at index "2", and so on.

```javascript
let fruits = ["Strawberry", "Watermelon", "Grapes"];

console.log(fruits[0]); //Strawberry
console.log(fruits[1]); //Watermelon
console.log(fruits[2]); //Grapes

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
let fruits = ["Strawberry", "Watermelon", "Grapes"]; This line declares an array named "fruits" and assigns it to the values "Strawberry", "Watermelon" and "Grapes".

console.log(fruits[0]); This line of code prints to the console the element at index 0 of the "fruits" array, which is "Strawberry".

console.log(fruits[1]); This line of code prints to the console the element at index 1 of the "fruits" array, which is "Watermelon".

console.log(fruits[2]); This line of code prints to the console the element at index 2 of the "fruits" array, which is "Grapes".

Use case: Imagine you want to create a simple application that allows a user to input their favourite fruits. You can use a JavaScript Arrays to store the fruits.

{{< /callout >}}

#### Objects : Unordered collections

Objects are unordered collections of key-value pairs used to store data in a structured way and each of these key-value pair is termed a property.

An object literal is a collection of key-value pairs, enclosed in curly braces {}. Objects also allows you to store different data types and the properties can be acessed using the properties names.

```javascript
let person = {
  name: "Doris",
  age : 18,
  isFemale : true,
  country : "Nigeria"
};

console.log(person.name);  // Doris
console.log(person.age);  // 18
console.log(person.isFemale);  // true
console.log(person.country);  // Nigeria

```

{{< callout context="note" title="Explanation" icon="rocket" >}}
Let person = { . . . }; This line declares a variable named "person" and assigns it an object literals.

name: "Doris"; This line defines a property named "name" with the value "Doris". The "name" property is used to store the person's name.

age : 18; This line defines a property named "age" with the value "18". The "age" property stores the person's age.

isFemale : true; This line defines a property named "isFemale" with the value "true". The "isFemale" property stores a boolean value indicating the person's gender.

country : "Nigeria"; This line defines a property named "country" with the value "Nigeria". The country property stores the person's country.

console.log(person.name); This line prints the value of the name property of the person object to the console, which is "Doris".

console.log(person.age); This line prints the value of the age property of the person object to the console, which is 18.

console.log(person.isFemale); This line prints the value of the isFemale property of the person object to the console, which is true.

console.log(person.country); This line prints the value of the country property of the person object to the console, which is "Nigeria".

Use case: In an online store project, you might represent the product information as an Object, containing properties such as name of product, price, description, quantity available etc.

{{< /callout >}}

## Conclusion

In this article, we’ve explored the fundamental building blocks of JavaScript: Variables and Data types.

We’ve looked into how these JavaScript essentials store and manipulate data in your scripts as well as real-life use cases for each of the Data types.

As you continue your journey in JavaScript these concepts will form the foundation for more complex topics and help you create powerful, efficient and interactive web apps.

{{< callout context="note" title="Connect" icon="rocket" >}}

Connect with me on [Linkedln](linkedin.com/in/deborah-fabusuyi/) and [Twitter](<[text](https://x.com/Debbyiecodes)>)

{{< /callout >}}
