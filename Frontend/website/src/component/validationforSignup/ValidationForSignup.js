export default function isFormValid(email, password,mobilenumber) {

    let validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validPasswordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let validMobileNumberRegex =/^[0-9]\d{10}$/;

    if (email.match(validEmailRegex) && password.match(validPasswordRegex ) && mobilenumber.match(validMobileNumberRegex )) {

      return true;

    }

    else {

      alert("Invalid Credentials");

      return false;

    }
  }