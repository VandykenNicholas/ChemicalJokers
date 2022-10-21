///// Global document///////

let p = document.createElement("p");
let x = 24;
let y = '12';

function createDiv()
{
	let div = document.createElement("div");
	let node = document.createTextNode(`This is the 1st div`)
	div.appendChild(node);
}

createDiv();
// p.append(`This is the first P`);
// div.append(`this is a variable test, this is x, ${x}, this is y, ${y}.`)


