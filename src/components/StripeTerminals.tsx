const StripeTerminals = (props: any) => {
    const name = props.name;
    const selectTerminal = props.selectTerminal;

    return (
        <div onClick={selectTerminal} className="stripe-terminal">
            <p>{name}</p>
        </div>
    )
}

export default StripeTerminals;