import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to={".."} onClick={() => {
                navigate(-1);
            }}>Go Back To Home Page</Link>
        </div>
    );
};
export default NotFound;