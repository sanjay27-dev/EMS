import logo from './logo.svg';
import './App.css';
import { BrowserRouter as BrowserRouter,Routes,Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
    
   
      <BrowserRouter>
         <HeaderComponent/>
         <div className="container">
           <Routes>
             <Route path="/"  exact components={ListEmployeeComponent}></Route>
             <Route path="/employee" components={ListEmployeeComponent}></Route>
             <Route path="/add-emlpoyee" components={CreateEmployeeComponent}></Route>
        
            </Routes>
           
         
        </div>
           <FooterComponent/>
          
      </BrowserRouter>
   </div>   
   
  );
}

export default App;
