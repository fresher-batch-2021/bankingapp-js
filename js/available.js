
function userTemplate(task){
    
   return `<div class="card">

   <img src="image/${task.imageUrl}" alt="Avatar"></img>

            <div class="Blood-details">
               
                <h4 >${task.name}</h4>                
                <h5>Blood Group : ${task.bloodType}</h5>  
                <h5>Phone : ${task.phoneNumber}</h5>
                <h5>City: ${task.city}</h5>

                <a href="View.html?id=${task._id}"><button>View</button></a>

            </div>

        </div>`;
}



function availableBlood() {

    donateBloodService.getAllBloodDonor().then(res => {

        let data = res.data.rows;
        const users = data.map(obj => obj.doc);
        let content = "";

        for (let task of users) {

            // Cards Items

            content +=userTemplate(task)

        }

        document.querySelector('.database_data').innerHTML = content;

    })

}

// Calling the function

availableBlood()

let filteredData;
function availableSearch(e){
  
    let content=''
console.log(e.target.value)
let searchData = e.target.value;
donateBloodService.getAllBloodDonor().then(res => {

    let data = res.data.rows;
    const users = data.map(obj => obj.doc)
    
    filteredData=[];
    for(let usr of users){

        console.error(usr.name)
        if(usr.bloodType.toLowerCase().indexOf(e.target.value.toLowerCase())!=-1 || usr.city.toLowerCase().indexOf(e.target.value.toLowerCase())!=-1){
            filteredData.push(usr);
        }
    }
    console.table(filteredData)
    for (let task of filteredData) {
        content +=userTemplate(task)

    }

    document.querySelector('.database_data').innerHTML = content;

})



}