const form = document.querySelector("form.login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const formData = {
      [emailInput.name]: emailInput.value,
      [passwordInput.name]: passwordInput.value
    };
    
    console.log(formData);
    
    event.currentTarget.reset();
  }
});


