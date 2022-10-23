//import logo from './logo.svg';
import './App.css';
import './Header.css';
import './EmployeeList.css';
import './Footer.css';
import Header from './Header';
import EmployeeList from './EmployeeList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeList />
      <Footer />
    </div>
  );
}

export default App;
