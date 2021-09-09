const param=new URLSearchParams(window.location.search.substr(1));
let Id=param.get('id');
 
    donateBloodService.getDonner(Id).then(res=>{
        console.table(res.data)
        let data=res.data;

        let image=`
        
        
        `
        let content=`
        <table>

        <caption></caption>

        <tr>
            <th scope="col">Name : </th>
            <td>${data.name}</td>
        </tr>

        <tr>
            <th scope="col">Address : </th>
            <td>1/1 Anna Avenue Street</td>
        </tr>

        <tr>
            <th scope="col">Phone : </th>
            <td>${data.phonenumber}</td>
        </tr>

        <tr>
            <th scope="col">Blood Group : </th>
            <td>${data.bloodtype}</td>
        </tr>

        <tr>
            <th scope="col">Location : </th>
            <td>${data.city}</td>
        </tr>

    </table>

        `;
        document.querySelector('.bill-details').innerHTML=content;
        // document.querySelector('.topnav').innerHTML=image;   
        
    })
 

//     <table>

//     <caption></caption>

//     <tr>
//         <th scope="col">Name : </th>
//         <td>Sudharsanan</td>
//     </tr>

//     <tr>
//         <th scope="col">Address : </th>
//         <td>1/1 Anna Avenue Street</td>
//     </tr>

//     <tr>
//         <th scope="col">Phone : </th>
//         <td>7339471597</td>
//     </tr>

//     <tr>
//         <th scope="col">Blood Group : </th>
//         <td>B+</td>
//     </tr>

//     <tr>
//         <th scope="col">Location : </th>
//         <td>Kanchipuram</td>
//     </tr>

// </table>
