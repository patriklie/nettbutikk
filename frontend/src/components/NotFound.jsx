import { useRouteError } from "react-router-dom";
import NavBar from "./NavBar";

const NotFound = () => {

    const error = useRouteError();
    console.log(error);

    return ( 
        <>
        <NavBar />
        <div className="not-found">
            <h2>Oops!</h2>
            <p>Something unexpected has occured!</p>
            <p className="error-status">{ error.status }</p>
            <p>{ error.statusText }</p>
            <p>{ error.error.message }</p>
        </div>
        </>
     );
}
 
export default NotFound;