

import './components/HomePage/Homepage' ;
import Homepage from './components/HomePage/Homepage';
import Navigation from './components/Navigation/Navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Profile from '../assets/Profile.jpg'; 

function App() {
  return (
    <div className='overflow-y-auto bg-gradient-to-b from-gray-100 to-blue-300'>
     
       <Navigation/>
       <Homepage/>
       
 
    </div>
  );
}

export default App;
