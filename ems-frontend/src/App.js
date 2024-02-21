import logo from './logo.svg';
import './App.css';
import ListOfEmp from './components/ListOfEmp';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmployeeAdd from './components/EmployeeAdd';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element = {<ListOfEmp/>}></Route>
          <Route path='/employees' element={<ListOfEmp />}></Route>
          <Route path='/add' element={<EmployeeAdd />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
