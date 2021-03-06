# beat-maker

Welcome to the Remote Repository for Beat Maker. This contains all the technical information necessary for engineers to do their job right. The engineers working on this project are Luke Ren, Dylan Tran, Chris Shokunbi, and Erick Ho.

# Code Style Standard

## HTML/CSS

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
let favoriteLetter = "x";
let favoriteWord = "chicken";

// always include spaces around operations, and include parenthesis
// when necessary to keep things clear
// booleans should start with "is" unless grammatically confusing
let isSkyBlue = ((true || false) && true) || false;

// write if statements like this, with the first bracket in a new line
// use ! instead of == false
if (!isSkyBlue) {
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
function sumTwoNumbers(a, b) {
  return a + b;
}

//include a space between each function
function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

// use default parameters instead of method overloading
function multiplyUpToThreeNumbers(a = 0, b = 0, c = 0) {
  return a * b * c;
}

function sumArrayNumbers(numArray) {
  let sum = 0;
  let arrayLength = 0;
  // loop like this, don't forget the space after "for"
  // use of when looping through array values
  for (let num of numArray) {
    sum += numArray;
    // use increment when you can instead of += 1
    arrayLength++;
  }

  sum = 0;
  // another way to do looping, use this if you need
  // the index as you're looping
  for (let i = 0; i < numArray.length; i++) {
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
class Animal {
  constructor(width, height) {
    // always use this when referring to a member variable/method
    this.width = width;
    this.height = height;

    this.numKids = 0;
  }

  bite(enemy) {
    enemy.hp -= 10;
  }
}

// when creating a debug function (one that shouldn't be
// able to be called when we release this product) use
// the following syntax
function debug_playRiff(params) {
  console.log(1 + 2);
  console.log(params);
}

// general coding tips/rules
// try to write code that is EXPLICIT instead of IMPLICIT
// try to use meaningful variable/function names that convey purposes
// never be afraid to ask about something that isn't in the style guide
```

# Git

Feel free to use Github Desktop or any other git GUI to help visualize/track things.

Steps to getting your code from your local repository to the public remote repository:

0. Try to fetch/pull changes from the remote repository first, if nothing happens, then proceed.
1. Add/Stage your changes
2. Commit your changes with a relevant message

Your commit message should be the name of the Trello task in square brackets and then any extra information involved with completing the task, like this:

```
[Implement Map Generation] used the cool guy algorithm in the gameLogic file
```

3. Fetch/Pull changes from the remote repository again. If you end up with a merge conflict, deal with the merge conflict, and then re-stage/re-commit your changes.
4. Push your changes, and you're done!

# Code Reviews

After you are done pushing your changes, find the github pages for the commits involved with the task, and pick someone you want to review your code for you. Once you have done these things, mention someone in the code-reviews channel on discord and follow the mention with the name of the task involved and links to the commits, like this:

```
@DiscordUser Fix Map Generation
https://github.com/commit1
https://github.com/commit2
```

Reviewers should look for things like adhering to the style guide, obvious edge cases that were not accounted for, and general coding malpractice. Reviewers should NOT input how they would have implemented the algorithm/feature, unless there is obvious reasons to believe that the current implementation is severely flawed or does not perform its intended purpose.

Feel free to ask questions in the Discord, code reviews can be confusing.
