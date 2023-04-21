/*
// starting create an XMLHTTP Request
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    // callback function
    if (xhr.readyState === 4) {
        // information that web server returns
        // JSON.parse takes a string and convert it in the js object
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        // setting the counter variable to zero for starting a loop
        for (var i = 0; i < employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};

// opening a request
xhr.open('GET', 'data/employees.json');

// sends the request
xhr.send();
*/

$(document).ready(() => {
    const url = 'data/employees.json';
    $.getJSON(url, (response) => {
        let statusHTML = '<ul class="bulleted">';

        // $.each(array_or_object, callback) is useful for looping array or an object
        // does the same thing as for loop do, however in less codes
        $.each(response, (index, employee) => {
            if (employee.inoffice === true) {
                statusHTML += ''
                statusHTML += '<li class="in"><h3 class="btn btn-success">ON    ';
            } else {
                statusHTML += '<li class="out"><h3 class="btn btn-danger">OFF   ';
            }
            statusHTML += employee.name;
            statusHTML += '</h3></li>';
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    }); // end getJSON
}); // end ready