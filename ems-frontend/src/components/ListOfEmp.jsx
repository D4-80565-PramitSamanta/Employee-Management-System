import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Listofemps } from '../services/EmpService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ListOfEmp() {
  const nav = useNavigate();
  const [emps,setEmps] = useState([]);

  useEffect(()=>
  {
    Listofemps()
    .then(response=>{setEmps(response.data)})
    .catch(error=>{console.log(error)})
  },[])

  function addNewEmp()
  {
    nav('/add');
  }

  function handleUpdate(id)
  {
    nav(`/edit/${id}`);
  }

  return (
    <div>
      <h2>List of employees</h2>
      <button class="btn btn-primary mb-2" onClick={addNewEmp}>Add Employee</button>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th><th>FirstName</th><th>LastName</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            emps.map(e=>
              <tr>
                <th>{e.id}</th><th>{e.firstName}</th><th>{e.lastName}</th><th>{e.email}</th>
                <th><button class="btn btn-info" onClick={()=>{handleUpdate(e.id)}}>Update</button></th>
              </tr>
              )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListOfEmp
