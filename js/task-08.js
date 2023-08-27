const registerForm = document.querySelector(".login-form");

const loginData = {};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  loginData.email = email;
  loginData.password = password;

  console.log(loginData);
  event.currentTarget.reset();
};

registerForm.addEventListener("submit", handleSubmit);
