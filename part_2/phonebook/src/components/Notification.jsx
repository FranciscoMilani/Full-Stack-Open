const Notification = ({ notification }) => {
    if (notification === null) return null;

    const { message, isError } = notification;

    const notificationStyling = {
        color: isError ? "red" : "green",
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
