function ValidateUserAndRedirect(){
    var listOfUserName = ["simha", "rahul"];
    var listOfPaasword = ["test123","abc123"];
    var isTeacher = false;
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value; 

    if((listOfUserName.indexOf(userName) > -1) && (listOfPaasword.indexOf(password) > -1)){
        if(isTeacher){
            location.replace("../html/teacherpage.html");
        }else{
            location.replace("../html/student.html");
        }
    }else{
        alert("Username or password is wrong");
    }
}