function bloodRequest() {

    event.preventDefault();

    // const requestName = $("#name").val;
    // const requestBlood = $("#bloodGroup").val;
    // const requestPhoneNumber = $("#phoneNumber").val;
    // const requestBloodCity = $("#city").val;


    const requestName = document.getElementById("name").value;
    const requestBlood = document.getElementById("bloodGroup").value;
    const requestPhoneNumber = document.getElementById("phoneNumber").value;
    const requestBloodCity = document.getElementById("city").value;


    try {

        Validator.isValidString(name, "Name Cannot be Blank");
        Validator.isValidMobile(phoneNumber, "Mobile Number Must Contain 10 Digits");


    let datas = {
        "name": requestName,
        "blood": requestBlood
    }
    

    
    // if (requestName == "" || requestName == null) {

    //     alert("Enter Your Name");

    //     return false;

    // }

    if (requestBlood == "Enter Blood Group" || requestBlood == null) {

        alert("Enter Your Blood Group");

        return false;

    }

    // if(requestPhoneNumber == "" || requestPhoneNumber == null){

    //     alert("Enter Your Phone Number");

    //     return false;

    // }

    if(requestBloodCity == "" || requestBloodCity == null){

        alert("Enter Your City");

        return false;

    }

    else {

        
         console.log(datas);

        let formData = {
            name: requestName,
            bloodType: requestBlood,
            phoneNumber : requestPhoneNumber,
            city : requestBloodCity,
            status:"OPEN"
        };

        RequestBloodService.addBloodRequest(formData).then(res=>{
            window.location.href="bloodneed.html"
        })


    

    }

} catch (err) {
    console.error(err.message);
    toastr.error(err.message);
    toastr.error("Failed");
  }

}