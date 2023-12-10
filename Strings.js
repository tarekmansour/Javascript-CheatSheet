var alphabet = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know'      // \n new line
var length = alphabet.length;     // string length
alphabet.indexOf('lmno');         // find the index within a string of the first occurrence of a specified substring
alphabet.lastIndexOf('lmno');     // find the index within a string of the last occurrence of a specified substring
alphabet.slice(3, 6);             // extract a section of a string and returns a new string
alphabet.replace("abc", "123");   // replace a specified substring or pattern with another substring
alphabet.toUpperCase();           // convert to upper case
alphabet.toLocaleLowerCase();     // convert to lower case
alphabet.concat(" ", "HELLO");    // alphabet + " " + "HELLO" : 'abcdefghijklmnopqrstuvwxyz HELLO'
alphabet.charAt(2);               // retrieve the character at a specified index
alphabet[2];                      // unsafe retrieve the character at a specified index
alphabet.charCodeAt(2);           // retrieve the Unicode value of the character at a specified index 'c' -> 99
alphabet.split(",");              // split a string into an array of substrings based on a specified separator -> ["abcdefghijklmnopqrstuvwxyz"]
alphabet.split("");               // split the string into an array of individual characters -> ["a", "b", "c", ..., "z"]