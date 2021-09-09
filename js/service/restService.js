class RestService{

static addData(database,newObj){
    const url=endpoint+database;
    return axios.post(url,newObj,authentication);
}
static getAllData(database)
{
    const url=endpoint+database+`/_all_docs?include_docs=true`;
    return axios.get(url,authentication);

}
static getDataByID(database,id)
{
    const url=endpoint+database+`/${id}`;
    return axios.get(url,authentication);

}

static updateData(database,updateObj)
{
    const id=updateObj._id;
    const rev=updateObj._rev;
    const url=endpoint+database+`/${id}?rev=${rev}`;
    return axios.put(url,updateObj,authentication);

}

static deleteData(database,id,rev)
{
    const url=endpoint+database+`/${id}?rev=${rev}`;
    return axios.delete(url,authentication);

}

}