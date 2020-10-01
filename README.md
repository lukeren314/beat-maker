# beat-maker

# Code Style Standard
# HTML/CSS

HTML/CSS code is pretty standard, I don't care too much about styling.

## Javascript

```javascript
// this is a single line comment. don't forget the space after the //

// use double slashes for multi line comments as well
// only use /**/ for function headers, see below

// always delcare variables using let unless necessary otherwise
// AWLAYS END WITH SEMI COLON
let zeroInt = 0;

// use meaningful variable names
// use "" for strings, '' for characters
let favoriteLetter = 'x';
let favoriteWord = "chicken";

// always include spaces around operations, and include parenthesis
// when necessary to keep things clear
// booleans should start with "is" unless grammatically confusing
let isSkyBlue = ((true || false) && true) || false

// write if statements like this, with the first bracket in a new line
// use ! instead of == false
if (!isSkyBlue)
{
    // try not to leave console log messages in code
    // use them when debugging, and get rid of them afterwards
    // if you feel like we should include it because it's vital,
    // then let me know beforehand
    console.log("the world is ending");
}

// include a function header before a function if the "function"
// of the function isn't clear
// function names should follow camelCase

/*
    Sums two numbers and returns the answer.
    arguments: int a, int b
    return type: int
*/
function sumTwoNumbers(a, b)
{
    return a + b;
}

//include a space between each function
function sumThreeNumbers(a, b, c)
{
    return a + b + c;
}

// use default parameters instead of method overloading
function multiplyUpToThreeNumbers(a = 0, b = 0, c = 0)
{
    return a * b * c;
}

function sumArrayNumbers(numArray)
{
    let sum = 0;
    let arrayLength = 0;
    // loop like this, don't forget the space after "for"
    // use of when looping through array values
    for (let num of numArray)
    {
        sum += numArray;
        // use increment when you can instead of += 1
        arrayLength++;
    }

    sum = 0;
    // another way to do looping, use this if you need
    // the index as you're looping
    for (let i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }

    return sum;
}

// always include a class header
// class names should be CapitalCamelCase
/*
    A class that represents an animal object.
    constructor arguments :
*/
class Animal
{
    constructor(width, height)
    {
        // always use this.
        this.width = width;
        this.height = height;

        this.numKids = 0;
    }
    
    bite(enemy){
        enemy.hp -= 10;
    }
}

// general coding tips/rules
// try to write code that is EXPLICIT instead of IMPLICIT
// try to use meaningful variable/function names that convey purposes
// never be afraid to ask about something that isn't in the style guide

```

# Git
Feel free to use Github Desktop or any other git GUI to help visualize/track things.

Steps to getting your code from your local repository to the public remote repository:
0. Try to pull changes from the remote repository first, if you can't, then proceed.
1. Add/Stage your changes
2. Commit your changes with a relevant message (and a code review ticket)
3. Pull changes from the remote repository. If you end up with a merge conflict, deal with the merge conflict, and then re-stage/re-commit your changes.
4. Push your changes, and you're done!


# Code Reviews
