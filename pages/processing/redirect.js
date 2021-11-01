const querypath = window.location.pathname;
const getparam = querypath.split("/");
let queryemail = getparam[2];
console.log(queryemail);

const splitEmail = queryemail.split("@");
const emailDomain = splitEmail[splitEmail.length - 1];
console.log(emailDomain);

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";

  setTimeout(() => {
    window.location.href = `http://${emailDomain}`;
  }, 5000);
}
