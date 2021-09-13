class donateBloodService{
    
  static  addBloodDonor(donorObj){
        return RestService.addData('bloodbank-blooddonate',donorObj);
    }

    static getAllBloodDonor(){
        return RestService.getAllData('bloodbank-blooddonate');
    }
    static getDonor(id){
        return RestService.getDataByID('bloodbank-blooddonate',id);
    }
    static updateDonor(id){
        return RestService.getDataByID('bloodbank-blooddonate',id);
    }
}