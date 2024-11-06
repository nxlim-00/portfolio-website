// more-button
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.more-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const gridItem = this.parentElement;
      const gridUnfold = gridItem.querySelector('.gridUnfold');

      // Toggle the visibility of the additional content
      if (
        gridUnfold.style.display === 'none' ||
        gridUnfold.style.display === ''
      ) {
        gridUnfold.style.display = 'block';
        this.textContent = 'See less';
        gridItem.classList.add('expanded');
      } else {
        gridUnfold.style.display = 'none';
        this.textContent = 'See more';
        gridItem.classList.remove('expanded');
      }
    });
  });
});

document.getElementById('homeButton').addEventListener('click', function () {
  window.location.href = '/portfolio-website'; // This will navigate to the home page
});

// modal
/* document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const imageInfo = document.getElementById('imageInfo');
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks on an image
  document.querySelectorAll('.projectImage').forEach((img) => {
    img.onclick = function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      imageInfo.textContent = this.getAttribute('data-info');
    };
  });

  // Close the modal when the user clicks on <span> (x)
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // Close the modal when the user clicks outside of it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
 */
/* function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');} */

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
