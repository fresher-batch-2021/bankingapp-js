function bloodRequest() {

    event.preventDefault();

    var requestName = document.getElementById("name").value;
    var requestBlood = document.getElementById("bloodGroup").value;
    var requestPhoneNumber = document.getElementById("phoneNumber").value;
    var requestBloodCity = document.getElementById("city").value;

    let datas = {
        "name": requestName,
        "blood": requestBlood
    }
    

   

   

    
    if (requestName == "" || requestName == null) {

        alert("Enter Your Name");

        return false;

    }

    if (requestBlood == "Enter Blood Group" || requestBlood == null) {

        alert("Enter Your Blood Group");

        return false;

    }

    if(requestPhoneNumber == "" || requestPhoneNumber == null){

        alert("Enter Your Phone Number");

        return false;

    }

    if(requestBloodCity == "" || requestBloodCity == null){

        alert("Enter Your City");

        return false;

    }

    else {

        // let url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bloodbank-bloodrequest/";

        // const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        //  const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";

        // const basicAuth = 'Basic ' + btoa(dbusername + ":" + dbpassword);
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
    alert("Unable to Login");
    toastr.error(err.message);

  }

}