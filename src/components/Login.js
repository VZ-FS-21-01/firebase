import { useState } from "react";
import firebase from '../config/firebase'

const Login = (props) => {
    const [inputs, setInputs] = useState({
        email: "", password: ""
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
    const loginUser = () => {
        firebase.auth().signInWithEmailAndPassword(inputs.email, inputs.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                props.setUser(user)
                setErrors(null)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrors(errorMessage)
            });
    }
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            props.setUser(null)
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="login">
            <form >
                <input type="email" name="email" onChange={handleInputs} placeholder="Mail" />
                <input type="password" name="password" onChange={handleInputs} placeholder="password" />
            </form>
            <button onClick={loginUser}>Login</button>
            <button onClick={signOut}>Logout</button>
            {errors}

        </div>
    );
}

export default Login;