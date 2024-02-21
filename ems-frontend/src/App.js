import logo from './logo.svg';
import './App.css';
import ListOfEmp from './components/ListOfEmp';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListOfEmp/>
      <Footer></Footer>
    </div>
  );
}

export default App;
