// complete the given function

function palindrome(str){

	let str = str.replace(/[^a-zA-Z0-9]/g,"").tolowerCase();

	return str === str.split("").reverse().join("");
	
}
module.exports = palindrome
