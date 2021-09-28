import react, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import "./login.css"



import SessionContext from '../../components/session/SessionContext';

const Login = () => {
    let history = useHistory();


    const {
        actions: { login }
    } = useContext(SessionContext);



    const [state, setValue] = useState({
        username: '',
        password: ''
    });

    const { username, password } = state;

    function setState(nextState) {
        setValue(prevState => ({
            ...prevState,
            ...nextState
        }))
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    async function handleSubmit(e) {
        console.log("baraa")

        e.nativeEvent.preventDefault();
        login(state);

    }


    return (


        <body className="body_login">
            <div class="container_login">

                <div class="circleTop_login"></div>
                <form onSubmit={handleSubmit}>
                <div class="content_login">
                    <h1 className="h1_login">Login Form</h1>
                    <div class="form-group_login">
                        <label for="">Username</label>
                        <br/>
                     
                        <input onChange={handleChange} value={username} type ="text" class ="form_login" name="username" id="" aria-describedby="helpId" placeholder="" />
                        </div>
                        <div class ="form-group_login">
                        <label for="">Password</label>
                        <br/>
                        <input onChange={handleChange} value={password} type ="password" class ="form_login" name="password" id="" placeholder=""/>
                        </div>
                        <p className="p_login">
                        <a href="index.html"> Forgot Password?</a>
                        </p>
                       
                        <button type ="submit" className="button_login">Login</button>

                        </div>
                        </form>
                        <div class ="circleBottom_login"></div>

                    </div>

                </body>
                );
}

                export default Login;