document.getElementById("hexInputForm").addEventListener("submit", function(event) {
	event.preventDefault();
	const colorInput = document.getElementById('hexInput').value.trim();
	document.body.style.backgroundColor = colorInput;
});
