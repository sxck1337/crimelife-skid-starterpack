register.style.display = 'none'
login.style.display = 'block'

function showRegister() {
  login.style.display = 'none'
  register.style.display = 'block'

  $("#registerUsername").focus();
}

function showLogin() {
  login.style.display = 'block'
  register.style.display = 'none'

  $("#loginPassword").focus();
}

$(document).on("keydown", (e) => {
  let key = e.originalEvent.key;

  if (key == "Enter") {
      einloggen();
  }
})

const registerRegEx = /^([a-zA-Z\d_]{4,20})$/;

$('.toggle').on('click', function () {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function () {
  $('.container').stop().removeClass('active');
});

function response(text) {
  var responseElement = document.getElementById("response");

  responseElement.style.visibility = "hidden";

  setTimeout(() => {
    responseElement.style.visibility = "visible";
  }, 150);
  responseElement.innerHTML = text;
}


function registerResponse(text) {
  var responseElement = document.getElementById("registerResponse");

  responseElement.style.visibility = "hidden";

  setTimeout(() => {
    responseElement.style.visibility = "visible";
  }, 150);
  responseElement.innerHTML = text;
}

function einloggen() {
  var pass = $('#loginPassword').val();

  if (!pass.length) {
    return response("password undefined");
  }

  mp.trigger("client:handleLogin", pass);
}

function registerfnc() {
  var username = $('#registerUsername').val();
  var pass = $('#registerPassword').val();
  var password2 = $('#registerPassword2').val();

  if (!username.length) {
    return registerResponse("username undefined", 0);
  }

  if (!pass.length) {
    return registerResponse("password undefined", 0);
  }
  if (pass != password2) {
    return registerResponse("your repeated password was incorrect", 0);
  }

  if (!registerRegEx.test(username)) {
    return registerResponse("invalid username", 0);
  }

  mp.trigger("client:handleRegister", username, pass);

}