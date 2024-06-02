import { useContext } from "react";
import { AUthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    console.log(children);
    const {user} = useContext(AUthContext)
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default ProtectedRoute;