const PersonAdd = ({
    newName,
    newPhone,
    numberHandler,
    nameHandler,
    phoneHandler,
    nameRef,
}) => (
    <form onSubmit={numberHandler}>
        <div>
            <div>
                <label htmlFor="name">name: </label>
                <input
                    id="name"
                    value={newName}
                    onChange={nameHandler}
                    ref={nameRef}
                />
            </div>
            <div>
                <label htmlFor="phone">phone: </label>
                <input id="phone" value={newPhone} onChange={phoneHandler} />
            </div>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
);

export default PersonAdd;
