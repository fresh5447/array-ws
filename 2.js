var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

function caps(n){
	console.log(n.toUpperCase());
}

function reverse(n){
	console.log(n.length)
}

names.forEach(reverse)

names.forEach(function(name) {
	console.log(name);
});