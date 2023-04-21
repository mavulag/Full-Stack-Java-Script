var person = {
    name : 'Mavula',
    country : 'Tanzania',
    age : 25,
    UDSM : true,
    skills : ['HTML', 'CSS', 'JAVASCRIPT']
};

/*
function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
// change the value property
person.name = 'Mavula Geofrey';
message += '<p>However. I wish my name was ' + person.name + '</p>';
// change or increment the value property
person.age += 1;
message += '<p>My age now is ' + person.age + '</p>';
// accessing the properties
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '</p>'; 
print(message);
*/

// you can name key or prop or anything
for (prop in person) {
    console.log(prop, ': ', person[prop]);
}