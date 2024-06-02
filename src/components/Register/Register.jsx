import { useContext, useState } from "react";
import { AUthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const {registerUser, setUser} = useContext(AUthContext);
    const [error, setError] = useState('');
    const [emailerror, setEmailError] = useState('')
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        
        
    
        setError('')
        setEmailError('')
        // handle register with email and password
        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => setError(error.message))

        // Email validation
        if(!/@gmail\.com$/.test(email)){
            setEmailError('Email Must End With @gmail.com')
        }

        // Password Validation
        if(password.length < 6){
            setError('Password Must Be 6 Characters or More');
            return;
        }
        if(password !== confirmPassword){
            setError("Password Didn't Match");
            return;
        }
        if(!/\d{2,}$/.test(password)){
            setError('Password Must End With At Least Two Numbers')
            return;
        }
        if(!/[@#%$&^*]/.test(password)){
            setError('Password Must Contain Special Character')
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError('Password Must Contain Uppercase Character')
            return;
        }
    }
    return (
        <div className="min-w-[500px] mx-auto w-[40%] border-2 p-5 rounded-lg shadow-lg bg-slate-400 ">
            <form onSubmit={handleRegister}>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Photo</p>
                    <input type="" name="photo" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                </div>
                {
                    emailerror && <small className="text-red-800">{emailerror}</small>
                }
                <div>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full " />
                </div>
                {
                    error && <small className="text-red-800">{error}</small>
                }
                <div className="mt-4 flex justify-center">
                    {/* <button type="submit" className="btn btn-active btn-accent w-full">Register</button> */}
                    <input className="btn btn-active btn-accent w-full" type="submit" value="Register" />
                    </div>
            </form>
        </div>
    );
};

export default Register;