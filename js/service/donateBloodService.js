class donateBloodService{
    
  static  addBloodDonner(donnerObj){
        return RestService.addData('bloodbank-blooddonate',donnerObj);
    }

    static getAllBloodDonner(){
        return RestService.getAllData('bloodbank-blooddonate');
    }
    static getDonner(id){
        return RestService.getDataByID('bloodbank-blooddonate',id);
    }
    static updateDonner(id){
        return RestService.getDataByID('bloodbank-blooddonate',id);
    }
}