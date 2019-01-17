// ### Problem 1:
// Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps
//     . Hint: see toUppercase()
//
// ex. ```in a galaxy far far away``` -> ```in A galaxy FAR far AWAY```
//


function problem1() {

    function replaceEO(str) {
        var phrase = str.split(' ');
        //  console.log(phrase);
        for (var i = 0; i < phrase.length; i++) {

            let word = phrase[i];

            if (i % 2 === 0) {
                word = word.toUpperCase();
            }

            console.log(word);
        }

    }

    replaceEO("Lets be best friends");

}


//////////////////////////////////////////////////////////////////////////////////////////////////

// ### Problem 2:
// Write a JavaScript function that accepts a word in all lowercase or in all uppercase,
//     and returns the word in the opposite case. Hint: see toLowercase()
//
// ex. ```hello``` -> ```HELLO``` or ```HOWDY``` -> ```howdy```

function problem2() {

    function switchItUp(str) {
        var phrase = str.split(' ');
        for (var i = 0; i < phrase.length; i++) {
            let word = phrase[i];
            word = word.toLowerCase();
            console.log(word);
        }

        console.log(word);
    }
switchItUp("WHO IS YOUR PAPI?");

}


function main() {
    // problem1();
    problem2();
    // problem3();
}


main();