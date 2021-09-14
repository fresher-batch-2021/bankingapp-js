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
    static searchData(bloodType,city)
    {
        const selectorObj={ bloodType:bloodType,city:city};
        const fieldObj = ['name','bloodType','phoneNumber','city','imageUrl'];
        return RestService.findData('bloodbank-blooddonate',selectorObj,fieldObj);
    }
}