function registerUser() {
    let USER_REGISTER_FORM = {
        firstName: document.getElementById("inputFirstName"),
        lastName: document.getElementById("inputLastName"),
        userEmail: document.getElementById("inputEmail"),
        userPassword: document.getElementById("inputPassword"),
        confirmUserPassword: document.getElementById("inputConfirmPassword"),
        userMale: document.getElementById("Male"),
        userFemale: document.getElementById("Female"),
        userAddress: document.getElementById("Address"),

    };

    let user = {
        name: USER_REGISTER_FORM.firstName.value && USER_REGISTER_FORM.lastName.value,
        email: USER_REGISTER_FORM.userEmail.value,
        password: USER_REGISTER_FORM.userPassword.value,
        confirmPassword: USER_REGISTER_FORM.confirmUserPassword.value,
        userGender: USER_REGISTER_FORM.userMale.checked ? "Male" : USER_REGISTER_FORM.userFemale.checked ? "Female" : "",
        userLocation: USER_REGISTER_FORM.userAddress.value 
    }

    if (!user.email) return alert("Email is required.");
    if (!user.name) return alert("Name is required.");
    if (!user.password || !user.confirmPassword) return alert("Password is required.");
    if (user.password !== user.confirmPassword) return alert("Passwords do not match.");
    if (!user.userGender) return alert("Fill your Gender");
    if (!user.userLocation) return alert("Please fill up the Address");

    localStorage.setItem("user", JSON.stringify(user));
    console.log("Click", user);
}
let btnSignUp = document.getElementById("btnSignUp");

btnSignUp.onclick = () => {
    registerUser();
}