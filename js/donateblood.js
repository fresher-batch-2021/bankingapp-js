function donateblood(){

    event.preventDefault();
    const imageUrl=document.getElementById("imageUrl").value;
    const imageUrlFilePath =imageUrl.substring(imageUrl.lastIndexOf("\\")+1);
    alert(imageUrlFilePath)
    const donatebloodname = document.getElementById("name").value;
    const donatebloodgroup = document.getElementById("bloodgroup").value;
    const donatephonenumber = document.getElementById("phoneNumber").value;
    const donatecity = document.getElementById("city").value;


    let datas = {
        "name" : donatebloodname,
        "bloodgroup" : donatebloodgroup
    }

    console.log(datas);

    if(donatebloodname == "" || donatebloodname == null){

        alert("Enter Your Name");

        return false;

    }

    if(donatebloodgroup == "" || donatebloodgroup == null){

        alert("Enter Your Blood Group");

        return false;

    }

    if(donatephonenumber == "" || donatephonenumber == null){

        alert("Enter Your Phone Number");

        return false;

    }

    if(donatecity == "" || donatecity == null){

        alert("Enter Your City");

        return false;

    }

    else{

        console.log(datas);

        let formData = {
            imageUrl:imageUrlFilePath,
            name: donatebloodname,
            bloodtype: donatebloodgroup,
            phonenumber : donatephonenumber,
            city : donatecity
        };
        donateBloodService.addBloodDonner(formData).then(res=>{
            window.location.href="available.html"
        })

    }

}
// function onFileUpload(event){
//     let x=event.target.files[0].name;
//     alert(x)
// }