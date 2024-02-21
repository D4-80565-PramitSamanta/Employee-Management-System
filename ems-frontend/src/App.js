import logo from './logo.svg';
import './App.css';
import ListOfEmp from './components/ListOfEmp';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmployeeAddorEdit from './components/EmployeeAddorEdit';
import ListOfDep from './components/ListOfDep';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element = {<ListOfEmp/>}></Route>
          <Route path='/employees' element={<ListOfEmp />}></Route>
          <Route path='/departments' element={<ListOfDep />}></Route>
          <Route path='/add' element={<EmployeeAddorEdit />}></Route>
          <Route path='/edit/:id' element={<EmployeeAddorEdit />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
