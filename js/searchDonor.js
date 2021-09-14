function searchDonor(){
    event.preventDefault();
    alert('hi');
   const bloodType= document.querySelector('#searchDonor').value;
   const city=document.querySelector('#city').value;
   
   donateBloodService.searchData(bloodType,city).then(res=>{
       console.table(res.data.docs)
   })  

}
// alert('ki')