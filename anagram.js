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


function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);


var anas = ["stuff", "bob", "sally", "anna"];

var goods = [];

anas.forEach(function(name){
	var revName = name.split('').reverse().join('');
	if(name === revName ){
		goods.push(name);
	};
});
		console.log(goods);



