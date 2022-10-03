import '../App.css'



function ParkingSlot(props){
 const handleClick=()=>{
  props.checkOut(props.id);
 }

    return (
        <div className="parking-slot">
        <h1>{props.number}</h1>
        <p>{props.name}</p>
        <p>Check-In Time :{props.checkInTime}</p>
        <button className='submit-button' onClick={handleClick}>OUT </button>

      </div>
    )
}

export default ParkingSlot;