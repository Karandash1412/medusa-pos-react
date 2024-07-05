const Customer = (props: any) => {
    const name = props.name
    return (
        <div className="customer">
            <p>{name}</p>
        </div>
    );
};

export default Customer;