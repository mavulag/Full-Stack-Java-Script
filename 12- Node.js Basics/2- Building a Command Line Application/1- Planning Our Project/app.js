// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Require https module
const https = require('https');

// Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}

function getProfile(username) {
    // Connect to the API URL (https://url.com/username.json)
    const request = https.get(`https://url.com/${username}.json`, response => {
        // console.dir(response);

        /*
        To log the status code
        console.log(response.statusCode);

        200 means web request was successful
        */

        let body = "";

        // Read the data
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {     
            // Parse the data
            const profile = JSON.parse(body);
            // use 'console.dir(profile);' to look inside the profile variable.
            // type that above insteady of that below
            // console.log(body);
            // console.log(typeof body);

            // Print the data
            // 'badges' here is from the site
            printMessage(username, profile.badges.length, profile.points.JavaScript);
        });
    });
}

// here you can pass any username from the one's profile
getProfile("Mavula");

/*
Or use DRY
const users = ["Mavual", "George", ...prop];

Or
const users = process.argv.slice(2);

***

users.forEach(username => {
    getProfile(username);
});

Or
users.forEach(getProfile);
*/ 