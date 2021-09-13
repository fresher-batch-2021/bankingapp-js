// Getting Value From Data Base (Blood Request)

function bloodNeed(){

    let url ="https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bloodbank-bloodrequest/_all_docs?include_docs=true";

    const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
    const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";

    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);
       
    axios.get(url, { headers: {'Authorization': basicAuth}}).then(res => {

    let data = res.data.rows;

    const users = data.map(obj=>obj.doc);

    console.log(users);
        
    let content = "";

    let i = 0;

    for (let task of users) {

        i++;

        content = content + 
        `<tr>
        <td>${i}</td>
        <td>${task.name}</td>
        <td>${task.bloodType}</td>
        <td>${task.phoneNumber}</td>
        <td>${task.city}</td>
        </tr>`;

    }

    console.log(content);

    document.querySelector("#task_table").innerHTML = content; 
     
    })

}

// Calling the function

bloodNeed()