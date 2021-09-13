const param = new URLSearchParams(window.location.search.substr(1));
let Id = param.get('id');

donateBloodService.getDonor(Id).then(res => {
    console.table(res.data)
    let data = res.data;

    let image = `
        
        
        `
    let content = `
        <table>

        <caption></caption>

        <tr>
            <th scope="col">Name : </th>
            <td>${data.name}</td>
        </tr>

        

        <tr>
            <th scope="col">Phone : </th>
            <td>${data.phoneNumber}</td>
        </tr>

        <tr>
            <th scope="col">Blood Group : </th>
            <td>${data.bloodType}</td>
        </tr>

        <tr>
            <th scope="col">Location : </th>
            <td>${data.city}</td>
        </tr>
        <tr>
        
        <td><button><a href="edit.html?id=${data._id}&rev=${data._rev}">Update</a></button></td>
        </tr>

    </table>

        `;
    document.querySelector('.bill-details').innerHTML = content;


})


