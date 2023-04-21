// or you can use
jQuery.get(
    '/employees.php',
    {
        firstName: "Mavula",
        lastName: "Geofrey"
    },
    callbak = (response) => {
        // do something with the response
    }
);