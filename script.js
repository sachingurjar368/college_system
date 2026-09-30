function login(){
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    if(u=="admin" && p=="1234"){
        window.location.href = "college.html";
    }else{
        alert("Galat hai! admin / 1234 likho");
    }
}
function submitForm(){
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;
    let course = document.getElementById("course");
    let fees = course.options[course.selectedIndex].text;

    if(marks >= 45){
        document.getElementById("result").innerHTML = "Congrats " + name + "! Aapka " + fees + " ke liye admission confirm hai VGI me!";
        document.getElementById("result").style.color = "green";
    }else{
        document.getElementById("result").innerHTML = "Sorry " + name + ", 45% se kam walo ka admission nahi hota";
        document.getElementById("result").style.color = "red";
    }
    return false;
}