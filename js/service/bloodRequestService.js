class RequestBloodService{
    
    static  addBloodRequest(requestObj){
          return RestService.addData('bloodbank-bloodrequest',requestObj);
      }
  
      static getAllBloodRequest(){
          return RestService.getAllData('bloodbank-bloodrequest');
      }
      static getBloodRequest(id){
          return RestService.getDataByID('bloodbank-bloodrequest',id);
      }
  }