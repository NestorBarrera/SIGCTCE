function validar() {
var nombre, apP,apM, edad, sexo, tele,email,passwd, area,level,active;
nombre= document.getElementById("name").nodeValue;
apP= document.getElementById("app").nodeValue;
apM= document.getElementById("apm").nodeValue;
edad= document.getElementById("edad").nodeValue;
sexo= document.getElementById("sexo").nodeValue;
tele= document.getElementById("tel").nodeValue;
email= document.getElementById("email").nodeValue;
passwd= document.getElementById("password").nodeValue;
area= document.getElementById("area").nodeValue;
level= document.getElementById("level").nodeValue;
active= document.getElementById("active").nodeValue;

if (nombre === "" ||apP === "" ||apM === ""||edad === ""||sexo === ""||tele === ""||email === ""||passwd === ""||area === ""||level === ""||active === "") {
    alert("No todos los campos se encuentran llenos");
    return false;
}else if(paswd.length<8){
alert("")
}



}