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
      let data = res.data.docs[0];
      console.log(data);


      if (data.role == "ADMIN") {
        toastr.success("", "Login successful", {
        });
        console.log("Toastr completed");
        setTimeout(function () {
          localStorage.setItem("userData", JSON.stringify(data));
          window.location.href = "admin.html"
        }, 1000);
      }

      else if ( data.role == "USER" && data.donorStatus == "Inactive") {
        alert("else works");
        toastr.error("Your Account is Blocked");
        setTimeout(function () {
          // localStorage.setItem("userData", JSON.stringify(data));
          // window.location.href = "index.html"
        }, 3000);

      }

      else if (data.role == "USER" && data.donorStatus == "Active") {
        toastr.success("Login Successful");
        setTimeout(function () {
          localStorage.setItem("userData", JSON.stringify(data));
          window.location.href = "index.html"
        }, 1000);

      }



      else if (data.length == 0) {
        toastr.error("Invalid Login Credentials");
        setTimeout(function () { }, 1000)
      }



    })

  } catch (err) {
    console.error(err.message);
    toastr.error("Unable to Login");
    toastr.error(err.message);

  }


}

