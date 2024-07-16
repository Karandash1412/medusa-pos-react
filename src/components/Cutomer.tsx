const Customer = (props: any) => {
    const name = props.name
    const surname = props.surname;


    return (
        <div className="customer" onClick={() => props.handleClick(name)}>
            <p>{name} {surname}</p>
        </div>
    );
};

export default Customer;