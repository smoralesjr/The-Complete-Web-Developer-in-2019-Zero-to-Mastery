// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var database = [
    {
        username: "smoralesjr",
        password: "foo123"
    }
];

var newsfeed = [
    {
        username: "randiberry",
        timeline: "theater!"
    },
    {
        username: "elicole",
        timeline: "dancing!"
    },
    {
        username: "ruthiebriar",
        timeline: "food!"
    }
];


function signIn(username, password) {
    if (username === database[0].username && password == database[0].password) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}