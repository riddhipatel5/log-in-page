function login() {
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value; 
   
    if (uname == "" || pass == "")
    {
        alert("There is something wrong...please try again!");
    }
    else
    {
        location.assign("page.html");
    }
}

