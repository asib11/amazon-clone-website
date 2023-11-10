import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const loaction = useLocation();
    if(loading){
        return <div>loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : loaction}} replace ></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.object,
     // Use the appropriate PropTypes type
};

export default PrivateRouter;