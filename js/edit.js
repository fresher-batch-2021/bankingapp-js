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
    // donateBloodService.getDonner(id).then(res => {
    console.log(res.data)
    const details = res.data
    document.querySelector("#name").value = details.name;
    document.querySelector("#phoneNumber").value = details.phonenumber;
    document.querySelector("#bloodType").value = details.bloodtype;
    document.querySelector("#city").value = details.city;
    let content = `<button onclick="updateFees('${id}','${rev}')">update</button> `;
    document.querySelector("#btn").innerHTML = content;
})
    .catch(err => console.error(err));

function updateFees(id, rev) {
    event.preventDefault();

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    //const id = urlParams.get('id');
    //const rev = urlParams.get('rev')
    console.log(rev);
    console.log(id);

    let bloodDonorName = document.querySelector("#name").value;
    let bloodDonorContact = document.querySelector("#phoneNumber").value;
    let bloodDonorBLoodType = document.querySelector("#bloodType").value;
    let bloodDonorCity = document.querySelector("#city").value;


    let updateDonorObj = {
        "name": bloodDonorName,
        "phoneNumber": bloodDonorContact,
        "bloodType": bloodDonorBLoodType,
        "city": bloodDonorCity
    }
    console.log("Obj", updateDonorObj);
    alert("success");
    update.updateDonor(id, rev, updateDonorObj).then(res => {
        console.log(res.data);
        alert("successfull");
        window.location.href = "view.html";
    }).catch(err => alert("error ")

    );
}