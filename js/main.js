let form = [];

addAccount = () => {
    let names = document.getElementById("names").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subjects = document.getElementById("subjects").value;
    let password = document.getElementById("password").value;
    
    form.push({
            names, email, number, subjects, password,
        })

    let checkbox = document.getElementById("checkbox").checked

    if(checkbox){
        alert("Welcome " + names + "! Thank you for your interest in " + subjects + "! We will contact you via the email provided: " + email + " or alternatively on the phone number: " + number + ".")
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + names + "!  If you want to sign up, you better CHECK that newsletter box!") 
    }

    document.getElementById("addForm").reset();

}

addAccount();