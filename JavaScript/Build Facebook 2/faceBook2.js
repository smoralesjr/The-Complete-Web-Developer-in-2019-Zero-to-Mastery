var database = [
    {
        username: "smoralesjr",
        password: "foo123"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
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

// function signIn(username, password) {
//     if (username === database[0].username && password == database[0].password) {
//         console.log(newsfeed);
//     } else {
//         alert("Sorry, wrong username and password");
//     }
// }

function isUserValid (username, password){
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}
function signIn(username, password) {
    if (isUserValid(username,password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password.");
    }
}