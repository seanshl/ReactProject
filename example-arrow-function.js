var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function(name) {
	console.log('forEach', name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
});

var returnMe = (name) => name + '!';
console.log(returnMe('Shawn'));

var person = {
	name: 'Andew', 
	greet: function() {
		names.forEach(function(name) {
			console.log(this.name + ' says hi to ' + name);
		});
	}
};

person.greet();