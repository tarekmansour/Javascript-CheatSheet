var numbers = [1, 2, 3, 4];
numbers.push(5);     // add one or more elements to the end of an array
numbers.pop();       // modifies the original array by removing the last element from it
numbers.fill(1);     // overwrites all elements in the array with the specified value -> [1, 1, 1, 1]
numbers.shift();     // remove first element -> [2, 3, 4]
numbers.unshift(5);  // add element to beginning -> [5, 1, 2, 3, 4]
numbers.reverse();   // sort in descending order -> [4, 3, 2, 1]
numbers.includes(2); // verify if array contains a specific value -> true
numbers.map( item => item * 2);         // create a new array by applying a function to each element of an existing array -> [2, 4, 6, 8]
numbers.filter(item => item > 2)        // filter elements -> [3, 4]
numbers.every(item => item > 0);        // check if every element in the numbers array is greater than 0 -> true
numbers.find(item => item > 2);         // find element -> 3 (first match)
numbers.findIndex(item => item === 2);  // find the index of the first element in an array -> 1
numbers.reduce( (prev, curr) => prev + curr, 0); // The reduce method is used to reduce an array to a single value based on a provided callback function
                                                 // The prev parameter represents the accumulated value (the sum so far)
                                                 // The curr represents the current element being processed
                                                 // The 0 at the end is the initial value for the accumulator (prev)
numbers.toString();              // convert array item to one string -> '1,2,3,4'
numbers.join(" * ");             // join all elements of an array into a single string -> '1 * 2 * 3 * 4'
numbers.splice(2, 0, 'i', 'p');  // change the contents of an array by removing or replacing existing elements and/or adding new elements in place. -> [1, 2, 'i', 'p', 3, 4]
numbers.slice(1,4);              // extract a portion of an array and return a new array without modifying the original array -> [2, 3, 4]
numbers.sort();                  // sort the elements of an array in ascending order
numbers.sort(function(a,b){return a - b});  // ou can provide a compare function to the sort method