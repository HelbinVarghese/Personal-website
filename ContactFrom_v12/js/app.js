function alphabetsnumeric(){
    var name = document.getElementById("name").value;
    var letters = /^[a-zA-Z]*$/;
    if(name.length<4){
        errorname.innerHTML="minumum 4 letters"
        return false;
    }
    
    else if(name.match(letters)){
        
        return true;
    }else{
        errorname.innerHTML="Only alphabets"
        return false;
    }
    
}