import { Link } from "react-router-dom";
const Customer = (props: any) => {
    const name = props.name
    return (
        <div className="customer">
            <Link to="/shopping-panel">{name}</Link>
        </div>
    );
};

export default Customer;