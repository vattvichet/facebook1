var database = [
    {
        username: "vichet",
        password: "12345678"
    },

    {
        username: "vichetprime",
        password: "11112222"
    }
];

var newsFeed = [
    {
        username: "Tom",
        timeline: "i am so focus today"
    },

    {
        username: "Sam",
        timeline: "i got enough sleep today"
    }
];

var usernamePrompt = prompt("what is your username");
var passwordPrompt = prompt("what is your password");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    }
    else if (user === database[1].username &&
        pass === database[1].password) {
        console.log(newsFeed);
    }
    else {
        alert("sorry, wrong username and password!");
    }
}

signIn(usernamePrompt, passwordPrompt);