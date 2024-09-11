const Customer = (props: any) => {
    const name = props.name
    const surname = props.surname;
    const id = props.id;


    return (
        <div className="customer" onClick={() => props.handleClick(id)}>
            <p>{name} {surname}</p>
        </div>
    );
};

export default Customer;