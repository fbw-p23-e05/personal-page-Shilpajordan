
alert('Click me to go to this page') 

function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.trim() === "") {
      alert("Please provide an email address.");
      email.focus();
      return false;
    } else if (email.value.match(validRegex)) {
      return true;
    } else {
      alert("Email address is invalid.");
      email.focus();
      return false;
    }
  }