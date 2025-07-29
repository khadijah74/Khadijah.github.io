let humbergerButton = document.getElementById("humberger")
humbergerButton.addEventListener("click", function(){
    let navs = document.getElementById("navlinks");
    navs.style.display = "block";
    navs.className = navlinks-small
}

);



let Name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let form = document.getElementById("myForm")

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Name:", Name.value);
    console.log("Email:", email.value);
    console.log("Message:", message.value);
    alert(`Thank you ${Name.value} for submitting your details! Name: ${Name.value}  Email: ${email.value}  Message: ${message.value}`)
    
});