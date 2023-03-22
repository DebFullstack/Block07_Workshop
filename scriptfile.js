// 1. Create a string for the user that reads: You have recieved this message because you have been chosen to open an important vault. Here is the secret combination: 10 - 40 - 39
// 2. Assign 3 variables. Each variable contains the corresponding result of a calculation using a unique arithmetic operator (+ - * /) Each must = one of the 3 codes of the combination 10 - 40 - 39
// 3. Create a dialogue box displaying the vault code and the text if using html anda script tag, or creat a popup dialog.

const comb1 = 1 * 10; //expected 10
const comb2 = 80 / 2; //expected 40
const comb3 = 40 - 1; //expected 39

//User will see a dialog box before the page loads that reads the text inside the quotes
alert("You have recieved this message because you have been chosen to open an important vault. Here is the secret combination: " + comb1 + "-" + comb2 + "-" + comb3)

