function donateBlood() {

    event.preventDefault();
    const imageUrl = document.getElementById("imageUrl").value;
    const imageUrlFilePath = imageUrl.substring(imageUrl.lastIndexOf("\\") + 1);
    const donateBloodName = document.getElementById("name").value;
    const donateBloodGroup = document.getElementById("bloodGroup").value;
    const donatePhoneNumber = document.getElementById("phoneNumber").value;
    const donateCity = document.getElementById("city").value;


    let datas = {
        "name": donateBloodName,
        "bloodGroup": donateBloodGroup
    }

    console.log(datas);

    if (donateBloodName == "" || donateBloodName == null) {

        alert("Enter Your Name");

        return false;

    }

    if (donateBloodGroup == "Enter Blood Group" || donateBloodGroup == null) {

        alert("Enter Your Blood Group");

        return false;

    }

    if (donatePhoneNumber == "" || donatePhoneNumber == null) {

        alert("Enter Your Phone Number");

        return false;

    }

    if (donateCity == "" || donateCity == null) {

        alert("Enter Your City");

        return false;

    }

    else {

        console.log(datas);

        let formData = {
            imageUrl: imageUrlFilePath,
            name: donateBloodName,
            bloodType: donateBloodGroup,
            phoneNumber: donatePhoneNumber,
            city: donateCity
        };
        donateBloodService.addBloodDonor(formData).then(res => {
            window.location.href = "available.html"
        })

    }

}
// function onFileUpload(event){
//     let x=event.target.files[0].name;
//     alert(x)
// }