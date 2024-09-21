let btnRegis = document.getElementById("regisform")
let errorMessages = [];
// let usnname = document.getElementById("name").value;
// let email = document.getElementById("email").value;
// let phone = document.getElementById("phone").value;
// let password = document.getElementById("password").value;
// let confirmPassword = document.getElementById("confirmPassword").value;

let usnname = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

btnRegis.addEventListener("submit", function(event){
    event.preventDefault()
        
    console.log(usnname)
    if (usnname.length < 5) {
        errorMessages.push("Username must be at least 5 characters.");
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }
    
    let phonePattern = /^[0-9]{10,12}$/;
    if (!phonePattern.test(phone)) {
        errorMessages.push("Please enter a valid phone number (10-12 digits).");
    }
        
    if (password.length < 8) {
        errorMessages.push("Password must be at least 8 characters.");
    }
        
    if (password !== confirmPassword) {
        errorMessages.push("Passwords do not match.");
    } else {
        alert("Register successful!");
    }
    window.location.href="home.html"
});