// $(document).ready(function(){
//     console.log("success");
//     $("#loginform").submit(login);
//   });


function login() {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  // const email=$("#email").val();
  // const password=$("#password").val();


  try {
    Validator.isValidEmail(email, "Email Cannot be Blank");
    Validator.isValidPassword(password, "Password must contain atleast 8 Character");

    let userObj = {
      "email": email,
      "password": password,

    };
    console.log(userObj);
    UserService.login(email, password).then(res => {
      let data = res.data.docs;
      console.log(data);


      if (data.length == 0) {
        toastr.error(Invalid_Login_Credentials);

      } else {
        let user = data[0];
        console.log(user);

        if (user.role == "ADMIN") {
          toastr.success("", "Login successful", {
          });
          console.log("Toastr completed");
          setTimeout(function () {
            localStorage.setItem("userData", JSON.stringify(user));
            window.location.href = "admin.html"
          }, 1000);
        }
        else if (user.role == "USER" && user.donorStatus == "INACTIVE") {
          alert("else works");
          // toastr.error("Your Account is Blocked"); 
          toastr.error(User_Account_Blocked);
          setTimeout(function () {
            // localStorage.setItem("userData", JSON.stringify(data));
            // window.location.href = "index.html"
          }, 3000);

        }
        else if (user.role == "USER" && user.donorStatus == "ACTIVE") {
          toastr.success("Login Successful");
          setTimeout(function () {
            localStorage.setItem("userData", JSON.stringify(user));
            window.location.href = "index.html"
          }, 1000);

        }

      }




    })

  } catch (err) {
    console.error(err.message);
    toastr.error("Unable to Login");
    toastr.error(err.message);

  }


}

