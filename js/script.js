/* // XXXX überarbeiten!!! XXXXX


function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    
   /*  function validateEmail() {
      let value = emailInput.value;
      let hasAtSign = value.indexOf('@') > -1;
      let hasDot =  value.indexOf('.') > -1;
      return value && hasAtSign && hasDot;
    } *

    function validateEmail() {
        let value = emailInput.value;
      
        if (!value) {
          showErrorMessage(emailInput, 'Email is a required field.');
          return false;
        }
      
        if (value.indexOf('@') === -1) {
          showErrorMessage(emailInput, 'You must enter a valid email address.');
          return false;
        }
      
        if (value.indexOf('.') === -1) {
          showErrorMessage(emailInput, 'You must enter a valid email address.');
          return false;
        }
      
      
        showErrorMessage(emailInput, null);
        return true;
    }
    
  /*   function validatePassword() {
      let value = passwordInput.value;
      return value && value.length >= 8;
    } *
    
    function validateForm() {
      return validateEmail
      /* return validateEmail() && validatePassword(); *
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    })  

    function showErrorMessage(input, message) {
        let container = input.parentElement; // The .input-wrapper
      
        // Check and Remove any existing errors
        let error = container.querySelector('.error-message');
        if (error) {
          container.removeChild(error);
        }
      
        // Now add the error if the message isn’t empty
        if (message) {
          let error = document.createElement('div');
          error.classList.add('error-message');
          error.innerText = message;
          container.appendChild(error);
        }
      }
    return {
     validateEmail,
     /* validatePassword, *
     showErrorMessage
    }
} */