const form = document.querySelector("form.login-form");

form.addEventListener("submit", event => {
  event.preventDefault();
  if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const emailInput = event.currentTarget.elements.email.name;
    const passwordInput = event.currentTarget.elements.password.name;
    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;

    const formData = {
      [emailInput]: emailValue,
      [passwordInput]: passwordValue
    };
    
    console.log(formData);
    
    event.currentTarget.reset();
  }
});


