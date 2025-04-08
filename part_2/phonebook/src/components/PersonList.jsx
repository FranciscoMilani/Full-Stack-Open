import { nanoid } from "nanoid";
import PersonDetail from "./PersonDetail";

const PersonList = ({ filteredPeople, deleteHandler }) => {
    return filteredPeople.map((x) => (
        <PersonDetail
            key={nanoid()}
            person={x}
            deleteHandler={deleteHandler}
        ></PersonDetail>
    ));
};

export default PersonList;
