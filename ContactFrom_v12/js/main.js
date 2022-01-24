function validation(name){
    
    

    var Email = document.getElementById("Email").value;
    var message = document.getElementById("message").value;
    var errormsg = document.getElementById("errormsg")
    var text;
    



    if(Email.indexOf("@") == -1 || Email.length < 6){
        text = "Please Enter Valid Email"
        erroremail.innerHTML= text;
        return false;
    }

    if(message.length <=10){
        text = "Minumum 10 letters"
        errormsg.innerHTML=text;
        return false;
    }
    alert("Form Submitted Successfully");
    return true;
}
