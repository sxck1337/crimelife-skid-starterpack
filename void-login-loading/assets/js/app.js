const loginRegex = /^([a-zA-Z\d_]{4,20})$/;

$('.toggle').on('click', function () {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function () {
  $('.container').stop().removeClass('active');
});

function response(text) {
  var responseElement = document.getElementById("response");

  responseElement.classList.remove("show-response");

  setTimeout(() => {
    responseElement.classList.add("show-response");
  }, 150);
  responseElement.innerHTML = text;
}


function registerResponse(text) {
  var responseElement = document.getElementById("registerResponse");

  responseElement.classList.remove("show-response");

  setTimeout(() => {
    responseElement.classList.add("show-response");
  }, 150);
  responseElement.innerHTML = text;
}

function einloggen() {
  var username = $('#loginUsername').val();
  var pass = $('#loginPassword').val();

  if (!username.length) {
    return response("Benutzernamefeld unzureichend");
  }

  if (!pass.length) {
    return response("Passwortfeld unzureichend");
  }

  if (!loginRegex.test(username)) {
    return response("Ung&uuml;ltiger Nutzername.");
  }
  mp.trigger("client:handleLogin", username, pass);
}

function register() {
  var username = $('#registerUsername').val();
  var pass = $('#registerPassword').val();
  var password2 = $('#registerPassword2').val();

  if (!username.length) {
    return registerResponse("Benutzernamefeld unzureichend", 0);
  }

  if (!pass.length) {
    return registerResponse("Passwortfeld unzureichend", 0);
  }
  if (pass != password2) {
    return registerResponse("Passwortwiederholung nicht richtig!", 0);
  }

  if (!loginRegex.test(username)) {
    return registerResponse("Ung&uuml;ltiger Nutzername.", 0);
  }

  mp.trigger("client:handleRegister", username, pass);

}