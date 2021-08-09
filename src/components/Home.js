import { useState } from "react";
import firebase from '../config/firebase'

const Home = (props) => {
    const [inputs, setInputs] = useState({
        email: "", password: "", passwordConfirm: ""
    })
    const [errors, setErrors] = useState(null)
    const handleInputs = event => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const registerUser = () => {
        if (inputs.password === inputs.passwordConfirm) {
            firebase.auth().createUserWithEmailAndPassword(inputs.email, inputs.password)
                .then((userCredential) => {
                    // Signed in 
                    console.log(userCredential)
                    var user = userCredential.user;
                    props.setUser(user)
                    setErrors(null)
                    // ...
                })
                .catch((error) => {
                    console.log(error)
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    setErrors(errorMessage)
                    // ..
                });
        } else {
            setErrors('Passwords did not match')
        }
    }
    return (
        <div className="home">
            <form>
                <input type="email" name="email" onChange={handleInputs} placeholder="Mail" />
                <input type="password" name="password" onChange={handleInputs} placeholder="password" />
                <input type="password" name="passwordConfirm" onChange={handleInputs} placeholder="password again" />
            </form>
            <button onClick={registerUser}>Register</button>
            {errors}
        </div>
    );
}

export default Home;