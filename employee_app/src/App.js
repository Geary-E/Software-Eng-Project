//import logo from './logo.svg';
import './App.css';
import './Header.css';
import './EmployeeList.css';
import './Footer.css';
/*import './EmployeePage.css';*/
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import EmployeeList from './EmployeeList';
import Footer from './Footer';
/*import doctor1 from './doctor7.jpg';
import doctor2 from './doctor2.jpg';
import doctor3 from './doctor3.jpg';
import doctor4 from './doctor4.jpg';
import doctor5 from './doctor5.jpg';
import doctor6 from './doctor6.jpg'; */
//import EmployeePage from './EmployeePage';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <EmployeeList />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
