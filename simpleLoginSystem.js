const UserName=prompt("enter you username");
const password=prompt("enter your password");

if(UserName=="admin" && password=="1234"){
    alert("Login Successful");
    console.log("Login Successful");

}else{
    alert(" Invalid Username or Password");
    console.log(" Invalid Username or Password");
}