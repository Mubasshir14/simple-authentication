import { useContext } from "react";
import { AUthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const { logInUser, googleLogin, setUser, facebookLogin } = useContext(AUthContext)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // handle login with email and password
        logInUser(email, password)
    }
    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => setUser(result.user))
            .catch(error => console.log(error.message))
    }
    const handleFacebookLogIn = () => {
        facebookLogin()
            .then(result => setUser(result.user))
            .catch(error => console.log(error.message))
    }
    return (
        <div className="min-w-[500px] mx-auto w-[40%] border-2 p-5 rounded-lg shadow-lg bg-slate-400 ">
            <form onSubmit={handleLogin}>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full " />
                </div>
                <div className="mt-4 flex justify-center">
                    {/* <button type="submit" className="btn btn-active btn-accent w-full">Register</button> */}
                    <input className="btn btn-active btn-accent w-full" type="submit" value="Login" />
                </div>
            </form>
            <div className="mt-4 flex justify-center">
                {/* <button type="submit" className="btn btn-active btn-accent w-full">Register</button> */}
                <input onClick={handleGoogleLogIn} className="btn btn-active btn-accent w-full" type="submit" value="Google Login" />
            </div>
            <div className="mt-4 flex justify-center">
                {/* <button type="submit" className="btn btn-active btn-accent w-full">Register</button> */}
                <input onClick={handleFacebookLogIn} className="btn btn-active btn-accent w-full" type="submit" value="Facebook Login" />
            </div>
        </div>
    );
};

export default Login;