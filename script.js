let n = Math.floor(Math.random() * quotes.length);
let button = document.getElementById("button");
let text = document.getElementById("text");
let body = document.getElementsByTagName("body");
text.innerHTML = `"${quotes[n].quote}"`;
// console.log(n);
// console.log(quotes[n].quote);

button.onclick = () => {
	let n = Math.floor(Math.random() * quotes.length);
	text.innerHTML = `"${quotes[n].quote}"`;
	// body.style.backgroundimage = `url("https://source.unsplash.com/1600x900/?landscape")`;
};
// Auto- refreshes quotes in every 20 seconds
setInterval(() => {
	let n = Math.floor(Math.random() * quotes.length);
	text.innerHTML = `"${quotes[n].quote}"`;
}, 20000);
