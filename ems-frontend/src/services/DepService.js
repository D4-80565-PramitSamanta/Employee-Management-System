import axios from "axios";

const allDepartmentsUrl = 'http://localhost:8080/dep/getall';
export const ListOfDepartments = () => axios.get(allDepartmentsUrl);

const addDepartmentUrl = 'http://localhost:8080/dep/create';
export const AddDepartment = (department) => axios.post(addDepartmentUrl, department);

const getDepartmentUrl = 'http://localhost:8080/dep/get';
export const GetDepartment = (id) => axios.get(getDepartmentUrl + '/' + id);

const editDepartmentUrl = 'http://localhost:8080/dep/edit';
export const EditDepartment = (id, department) => axios.put(editDepartmentUrl + '/' + id, department);

const deleteDepartmentUrl = 'http://localhost:8080/dep/delete';
export const DeleteDepartment = (id) => axios.delete(deleteDepartmentUrl + '/' + id);
