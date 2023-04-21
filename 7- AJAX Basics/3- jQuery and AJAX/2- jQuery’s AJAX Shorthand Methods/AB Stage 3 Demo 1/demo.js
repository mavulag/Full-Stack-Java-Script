
/*
url is the url you making request to
const url = '/employees.php';
*/  
/*
data (optional) is the data you send to the server, is added to the url as query string
const data = {
    firstName: "Mavula",
    lastName: "Geofrey"
};
*/ 
/*
callback is the callback function to process the return data
const callbak = (response) => {
    // do something with the response
};
*/ 

jQuery.get(url, data, callback);