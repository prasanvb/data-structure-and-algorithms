



// IMPORTANT EXAMPLE: easy way to remove duplicates in an array
let unique = [...new Set(array)];

// Example : A pangram is a string that contains every letter of the alphabet.
let s = 'We promptly judged antique ivory buckles for the next prize';

function pangramChecker(s) {
    let result = new Set(s.replaceAll(' ','').toLowerCase());

    return (result.size === 26) ? 'pangram' : 'not pangram';
}

console.log(pangramChecker(s));
// pangram