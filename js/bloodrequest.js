function bloodrequest() {

    event.preventDefault();

    var requestname = document.getElementById("name").value;
    var requestblood = document.getElementById("bloodgroup").value;
    var requestphonenumber = document.getElementById("phoneNumber").value;
    var requestbloodcity = document.getElementById("city").value;

    let datas = {
        "name": requestname,
        "blood": requestblood
    }

    console.log(datas);

    if (requestname == "" || requestname == null) {

        alert("Enter Your Name");

        return false;

    }

    if (requestblood == "" || requestblood == null) {

        alert("Enter Your Blood Group");

        return false;

    }

    if(requestphonenumber == "" || requestphonenumber == null){

        alert("Enter Your Phone Number");

        return false;

    }

    if(requestbloodcity == "" || requestbloodcity == null){

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
            name: requestname,
            bloodtype: requestblood,
            phonenumber : requestphonenumber,
            city : requestbloodcity,
            status:"OPEN"
        };

        RequestBloodService.addBloodRequest(formData).then(res=>{
            window.location.href="bloodneed.html"
        })


    

    }

}