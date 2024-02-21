import axios from "axios";

const allurl = 'http://localhost:8080/emp/getall';
export const Listofemps = ()=>axios.get(allurl);

const addurl = 'http://localhost:8080/emp/create';
export const Addemp = (emp) => axios.post(addurl,emp);

const geturl = 'http://localhost:8080/emp/get';
export const Getemp = (id) => axios.get(geturl + '/' + id);

const puturl = 'http://localhost:8080/emp/edit';
export const Putemp = (id, emp) => axios.put(puturl + '/' + id, emp);

const delurl = 'http://localhost:8080/emp/delete';
export const Delemp = (id) => axios.delete(delurl + '/' + id);