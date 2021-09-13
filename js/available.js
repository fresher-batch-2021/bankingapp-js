function availableBlood() {

    donateBloodService.getAllBloodDonor().then(res => {

        let data = res.data.rows;
        const users = data.map(obj => obj.doc);
        let content = "";

        for (let task of users) {

            // Cards Items
// alert(task.imageUrl)
            content +=
                `
        <div class="card">

            <img src="image/${task.imageUrl}" alt="Avatar">

            <div class="Blood-details">
               
                <h4 >${task.name}</h4>                
                <h5>Blood Group : ${task.bloodType}</h5>  
                <h5>Phone : ${task.phoneNumber}</h5>
                <a href="View.html?id=${task._id}"><button>View</button></a>

            </div>

        </div>`;

        }

        document.querySelector('.database_data').innerHTML = content;

    })

}

// Calling the function

availableBlood()