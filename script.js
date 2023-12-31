let n = Math.floor(Math.random() * quotes.length);
let button = document.getElementById("button");
let text = document.getElementById("text");
text.innerHTML = quotes[n].quote;
console.log(n);
console.log(quotes[n].quote);

button.onclick = () => {
	let n = Math.floor(Math.random() * quotes.length);
	text.innerHTML = quotes[n].quote;
};
