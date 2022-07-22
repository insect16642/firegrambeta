import React, { useState } from "react";
import { authService, firebaseInstance } from "../FBFireGram";
import GoogleLoginComponent from "components/App";


const Auth =  () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [newAccount, setnewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target: {name,value}} = event;
        if(name === "email") {
            setEmail(value)

        }else if(name=="password") {
            setpassword(value)
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount){
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                );
                }else {
                        data = await authService.signInWithEmailAndPassword(email, password); 
                }
              console.log(data)
        }catch (error) {
                setError(error.message);
        } 
    };

 const toggleAccount = () => setnewAccount((prev) => !prev);
 //button.Onclick 값 실행
 const onSocialClick =  async (event) => {
    const {target:{name}} = event;
    let provider;
    if (name === "Google"){
        provider = new firebaseInstance.auth.GoogleAuthProvider();
    }else if (name ===  "Github"){
        provider = new firebaseInstance.auth.GithubAuthProvider();
    }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
 };
     return (

             <div>

                <form onSubmit={onSubmit}>

                    <input  name="email" type="email" placeholder="Email" required value={email} 
                    onChange={onChange}
                    />
                    <input name="password" type="password" placeholder="Password" required  value={password} 
                    onChange={onChange} 
                    />
                    <input type="submit" value={newAccount ? "Create Account" : "LogIn"} />
                    {error}
                </form>
                <button onClick={toggleAccount}>{newAccount ? "LogIn" : "Create Account" }</button>
                <div>
                                    <button name="Google" type="button" onClick={onSocialClick}>Continue With Google</button>
                <button type="button" name="Github" onClick={onSocialClick} >Continue with Github</button>
                </div>
            </div>
            );
};

export default Auth;
