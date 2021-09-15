function searchDonor(){
    event.preventDefault();

    // const bloodType=$("#name").val();
    // const city=$("#city").val();
   
   const bloodType= document.querySelector('#searchDonor').value;
   const city=document.querySelector('#city').value;
   
   donateBloodService.searchData(bloodType,city).then(res=>{
       console.table(res.data.docs)
   })  

}
