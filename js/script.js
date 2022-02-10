document.getElementById("submit-button").addEventListener("click",function(){
   const emailField = document.getElementById("user-email");
   // const userEmail = emailField.value;
   const passField = document.getElementById("user-password");
   // const userPassword = passField.value;
   if( emailField.value== 'sontan@baap.com' && passField.value == 'secret'){
      window.location.href = "banking.html";
   }

})