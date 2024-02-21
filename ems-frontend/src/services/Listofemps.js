import axios from "axios";

const url = 'http://localhost:8080/emp/getall';
export const Listofemps = ()=>axios.get(url);