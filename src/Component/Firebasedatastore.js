import { useState } from 'react';
import './FireCss.css';
function FirebasedDatastore() {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        phoneno: "",
        message: "",
        address: "",

    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fname, lname, phoneno, email, message, address } = user;
        if(fname && lname && phoneno && email && message&& address){
            const response = await fetch("https://reactfirebase-57390-default-rtdb.firebaseio.com/reactapiurl.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    phoneno,
                    message,
                    address
                })
            });
        if (response) {
            setUser({
                fname: "",
                lname: "",
                email: "",
                phoneno: "",
                message: "",
                address: "",
            })
            alert("Data is store successfully")
        }
        }
        else{
            alert("pleace fill the all Data")
        }
        
        
    }
    return (
        <>
            <h4 className='heading-main'>FireBasedDataStore</h4>
            <form className="main-form" method='post'>
                <div className="row">
                    <div className="col">
                        <input type="text" id="form-id" name='fname' value={user.fname} onChange={handleChange} placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" id="form-id" name='lname' value={user.lname} onChange={handleChange} placeholder="Last name" />
                    </div>

                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <input type="email" id="form-id" name='email' value={user.email} onChange={handleChange} placeholder="Email" />
                    </div>
                    <div className="col">
                        <input type="phoneno" id="form-id" name='phoneno' value={user.phoneno} onChange={handleChange} placeholder="PhoneNo" />
                    </div>

                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <textarea type="text" id="form-id" name='message' value={user.message} onChange={handleChange} placeholder="Message" />
                    </div>
                    <div className="col">
                        <textarea type="text" id="form-id" name='address' value={user.address} onChange={handleChange} placeholder="Address" />
                    </div>

                </div>
                <div className="form-group row" id="btn-sub">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" id="btn" onClick={handleSubmit}>Sign in</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default FirebasedDatastore;
