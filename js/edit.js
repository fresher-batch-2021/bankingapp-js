const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const rev = urlParams.get('rev');
console.log(id);

const dbUserName = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
const dbPassword = "ec6094ae0714dc7a5ffc50a86924bef3";
const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
let url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bloodbank-blooddonate/" + id;
axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
    // donateBloodService.getDonor(id).then(res => {
    console.log(res.data)
    const details = res.data

    localStorage.setItem('donarDetails', JSON.stringify(details.imageUrl))
    let image = `

    <figure>
     <img id="imgDonor" src="image/${details.imageUrl}" alt="">
    </figure>`;

    document.querySelector(".donorImage").innerHTML = image;

    //$("donorImage").html(image);

    // $("#name").val(details.name);
    // $("#phonenumber").val(details.phoneNumber);
    // $("#bloodtype").val(details.bloodtype);
    // $("#city").val(details.city);   


    document.querySelector("#name").value = details.name;
    document.querySelector("#phoneNumber").value = details.phoneNumber;
    document.querySelector("#bloodType").value = details.bloodType;
    document.querySelector("#city").value = details.city;

    let content = `<button onclick="updateBloodDonor('${id}','${rev}')">update</button> `;
    document.querySelector("#btn").innerHTML = content;

    //$("#btn").html(content);
})
    .catch(err => console.error(err));

function updateBloodDonor(id, rev) {
    event.preventDefault();

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    console.log(rev);
    console.log(id);


    // const bloodDonorName=$("#name").val;
    // const bloodDonorContact=$("#phoneNumber").val;
    // const bloodDonorBloodType=$("#bloodType").val;
    // const bloodDonorcity=$("#city").val;


    const bloodDonorName = document.querySelector("#name").value;
    const bloodDonorContact = document.querySelector("#phoneNumber").value;
    const bloodDonorBloodType = document.querySelector("#bloodType").value;
    const bloodDonorCity = document.querySelector("#city").value;
    const imageUrl = JSON.parse(localStorage.getItem('donarDetails'));


    let updateDonorObj = {
        _id: id,
        _rev: rev,
        imageUrl: imageUrl,
        name: bloodDonorName,
        phoneNumber: bloodDonorContact,
        bloodType: bloodDonorBloodType,
        city: bloodDonorCity
    }
    console.log("Obj", updateDonorObj);

    update.updateDonor(id, rev, updateDonorObj).then(res => {

        Toastr.success("Successfully Updated");
        setTimeout(function () {
            window.location.href = `Available.html`;
        }, 1000);



    }).catch(err => {
        // Toastr.error("error ")
        toastr.error(Failed)
    });
}