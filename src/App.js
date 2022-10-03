import { useState,useEffect } from 'react';
import Header from './Components/Header';
import InputArea from './Components/InputArea';
import ParkingData from './Components/ParkingData';
import ParkingSlot from './Components/ParkingSlot';
import Footer from './Components/Footer';
import './App.css';


function App() {
  //useState for driver input details
  const [details, setDetails] = useState([]);

  //useState for vehicle number counter in the garage
  const [vehicleCounter,setVehicleCounter] =useState(0);

  //useState for checking time of checkin and checkout
  const [checkTime,setCheckTime]=useState([]);
  

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  //useEffec for making the time updation while adding new item
 useEffect(()=>{
setCheckTime(time);
 },[vehicleCounter]);
 
 //for adding new details with the array of list
    const addDetail = (newDetail)=>{
      setDetails(prevDetails => {
        return [...prevDetails, newDetail];
      });
      //incrementing vehicle counter while adding new vehicle
      setVehicleCounter(vehicleCounter+1);
    }
    
    //filtering to know which vehicle is trying to checkout
    function checkOutSlot(id) {
      setDetails(prevDetails => {
        return prevDetails.filter((slotItem, index) => {
          return index !== id;
        });
      });
      //decrementing the vehicle counter number while vehicle is checking out
      setVehicleCounter(vehicleCounter-1);
      //alerting the checked out message with the checkout time
      alert("vehicle Checking-Out at "+ checkTime)
    }

  return (
    <div>
      <Header />
      <InputArea addDetail={addDetail}/>
      <ParkingData count={vehicleCounter} />
      {details.map((slotItem, index) => {
        return (
          <ParkingSlot
            key={index}
            id={index}
            name={slotItem.name}
            number={slotItem.number}
            checkInTime={checkTime}
            checkOut={checkOutSlot}
          />
        );
      })}
      
      <Footer />

    </div>
  );
}

export default App;
