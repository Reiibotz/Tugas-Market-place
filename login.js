function login() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value 

  if( username == "joko" && password == "123456"){
    alert("Login berhasil")
    window.location.href = 'page/index.html';
  }
  else{
    alert("Login gagal")
    return false;
  }
}