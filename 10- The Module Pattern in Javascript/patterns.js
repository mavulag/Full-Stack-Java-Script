function foo() {
    console.log('foobar');
};

foo();

/*
(function() {
    function foo() {
        console.log('foobar');
    };

    foo();
}());
*/ 

/*
OR
+function() {
    function foo() {
        console.log('foobar');
    };

    foo();
}());
*/

/*
Much more elegant to add !
!function() {
    function foo() {
        console.log('foobar');
    };

    foo();
}();
*/ 

/*
;function() {
    function foo() {
        console.log('foobar');
    };

    foo();
}());
*/ 

/*
let awesomeNewModule = (function() {
    let exports = {};
    exports.helloMars = function() {
        console.log("Hello Mars!");
    };
    return exports
}());
*/

let awesomeNewModule = (function() {
    let exports = {
        foo: 5,
        bar: 10
    };

    exports.helloMars = function() {
        console.log("Hello Mars!");
    };

    exports.goodbye = function() {
        console.log("Goodbye!");
    };
    
    return exports
}());
 