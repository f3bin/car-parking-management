import '../App.css'


import { useState } from 'react';



function InputArea(props) {
    //defined an Array
    const [details, setDetails] = useState({
        name: "",
        number: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        //  Destructured the below lines 
        //    const name=e.target.name;
        //    const value= e.target.value

        //taking the values from the input feilds
        setDetails((prev) => {
            return { ...prev, [name]: value.toUpperCase() }
        });
    }

    //creating function for submit button 
    const handleSubmit = (e) => {
//calling adding data function from app.js through props
        props.addDetail(details);
        setDetails({
            number: "",
            name: ""
        });
        e.preventDefault()
    }
   
    return (
        <div className="input-area">
            <form autoComplete="off" className="input-form">
            <label> Vehicle number:
                    <input  className='input-feild' type="text" name="number" value={details.number} onChange={handleChange} />
                </label><br />
                <label>Enter your name:
                    <input className='input-feild'  type="text" name="name" value={details.name} onChange={handleChange} />
                </label><br />
                <br />
                <button onClick={handleSubmit} className="submit-button" >IN</button>

            </form>
        </div>

    )
}
export default InputArea;