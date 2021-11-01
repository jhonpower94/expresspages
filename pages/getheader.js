const queryString = window.location.search;
let params = new URLSearchParams(queryString);
let queryemail = params.get("email");

console.log(queryemail);

const splitEmail = queryemail.split("@");
const emailDomain = splitEmail[splitEmail.length - 1];

$("#emaildomain").html(emailDomain);
