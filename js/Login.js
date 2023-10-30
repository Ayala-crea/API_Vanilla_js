const endpoint = "https://reqres.in/api/users";
const datalogin = "https://reqres.in/api/login";

fetch(endpoint)
    .then((result) => result.json())
    .then((data) => console.log(data));



