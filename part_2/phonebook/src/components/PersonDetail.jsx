const PersonDetail = ({ person, deleteHandler }) => (
    <div>
        <span>
            {person.name} {person.number}
        </span>
        &nbsp;
        <button onClick={() => deleteHandler(person.id, person.name)}>
            delete
        </button>
    </div>
);

export default PersonDetail;
