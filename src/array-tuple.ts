const friends = ["rahim", "karim"];
// friends.push(10); throw error cause it is string array

const subject: (string | number)[] = ["math", 120];

const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

/* tuple: A tuple is a typed array with a pre-defined length and types for each index.*/
const myTuple: [string, number] = ["tomal", 10];
// can't set like this const myTuple: [string, number] = ["tomal", "10"];

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, "The Real Coding God"];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
