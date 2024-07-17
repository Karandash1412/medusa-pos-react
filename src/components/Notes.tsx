const Note = (props: string) => {
    return (
        <div className="container-note">
            <p>{props.note}</p>
        </div>
    );
}

export default Note;