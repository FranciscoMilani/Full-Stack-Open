const Notification = ({ message }) => {
    if (message === null) return null;

    const notificationStyling = {
        color: "green",
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px",
    };

    return (
        <div>
            <p style={notificationStyling}>{message}</p>
        </div>
    );
};

export default Notification;
