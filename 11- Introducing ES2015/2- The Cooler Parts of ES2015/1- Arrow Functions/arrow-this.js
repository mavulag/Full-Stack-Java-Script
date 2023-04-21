'use strict';

let Teacher = function(data) {
    this.name = data.name;
    this.greet = function(studentCnt) {
        let promise = new Promise(function(resolve, reject) {
            if (studentCnt === 0) {
                reject('Zero students in class');
            } else {
                resolve(`Hello to ${studentCnt} of my favorite students!`);
            }
        });
        return promise;
    }
}

let Classroom = function(data) {
    this.subject = data.name;
    this.teacher = data.teacher;
    this.students = [];
    this.addStudent = function(data) {
        this.students.push(data);
        this.greet();
    }
    this.greet = () => {
        this.teacher.greet(this.students.length).then(
            /*
            (function(classroom) {
                return function(greeting) {
                    console.log(`${classroom.teacher.name} says: `, greeting);
                }
            })(this),
            function(err) {
                console.log(err);
            }
            // or you can use an arrow function instead
            */
           greeting => console.log(`${this.teacher.name} says: `, greeting),
           err => console.log(err)
        );
    }
}

let myTeacher = new Teacher({ name: 'Mavula' });
let myClassroom = new Classroom({ name: 'The Future of JS', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });