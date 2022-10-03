import '../App.css'

function ParkingData (props){
    return(
        <div className='parking-header'>
            <h1>Parking Space </h1>
            <h2>Vehicles in :{props.count} </h2>
        </div>
    )
}
export default ParkingData;