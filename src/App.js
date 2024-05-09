
import './components/HomePage/Homepage' ;
import Homepage from './components/HomePage/Homepage';
import Navigation from './components/Navigation/Navigation';
// import Profile from '../assets/Profile.jpg'; 

function App() {
  return (
    <div className='overflow-y-auto bg-gray-100'>
     
       <Navigation/>
    <Homepage/>
 
    </div>
  );
}

export default App;
