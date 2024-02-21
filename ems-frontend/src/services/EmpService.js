import axios from "axios";

const allurl = 'http://localhost:8080/emp/getall';
export const Listofemps = ()=>axios.get(allurl);

const addurl = 'http://localhost:8080/emp/create';
export const Addemp = (emp) => axios.post(addurl,emp);