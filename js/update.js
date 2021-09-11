class update{
    static updateDonor(id, rev, updateDonorObj) {
        const dbUserName = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        const dbPassword = "ec6094ae0714dc7a5ffc50a86924bef3";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bloodbank-blooddonate/";
        return axios.put(url+id+"?rev="+rev, updateDonorObj, { headers: { 'Authorization': basicAuth } })
    }
}