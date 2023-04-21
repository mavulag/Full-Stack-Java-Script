'use strict';

/*
Use 'let' when you need to reassign a variable, or scope a variable at the block level.

Use 'const' when you don't want a variabel's value to change throughout your project.
*/ 

(function() {
    const student = {name: 'Mavula'};

    function createStudent(name) {
        const student = {name: name};
        return student;
    }

    console.log(createStudent('Annaliss'));
    console.log(student);
})();