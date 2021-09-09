// $(document).ready(function(){
//     console.log("success");
//     $("#loginform").submit(login);
//   });
  
  
  function login() {
    event.preventDefault();
      alert("works");
    
   
  
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    // const email=$("#email").val();
    // const password=$("#password").val();
    
  
    try{
        Validator.isValidEmail(email,"Email Cannot be Blank");
        Validator.isValidPassword(password,"Password must contain atleast 8 Charcter");
  
        let userObj={
            "email":email,
            "password":password,
              
        };
        console.log(userObj);
        UserService.login(email,password).then(res=>{
            let data=res.data.docs[0];
            console.log(data);
           
  
            if (data.role == "ADMIN") {
              toastr.success("","login successful",{
                
              });
  
              console.log("toastr completed");
              setTimeout(function () {
                localStorage.setItem("userData",JSON.stringify(data));
                  window.location.href = "admin.html"
              }, 1000);     
          }
          else if (data.role == "USER") {
              toastr.success("login Successful");
              setTimeout(function () {
                localStorage.setItem("userData",JSON.stringify(data));
                  window.location.href = "index.html"
              }, 1000);
  
          }
  
            if (data.length == 0) {
              toastr.error("Invalid Login Credentials");
              setTimeout(function () {}, 1000)
          }
         
  
  
        })
  
  
      }catch(err)
      {
          console.error(err.message);
          toastr.error("Unable to Login");
          toastr.error(err.message);
  
      }
  
  
    }
  
    