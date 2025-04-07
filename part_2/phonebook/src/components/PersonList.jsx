import { nanoid } from "nanoid";
import PersonDetail from "./PersonDetail";

const PersonList = ({ filteredPeople }) => {
    return filteredPeople.map((x) => (
        <PersonDetail key={nanoid()} person={x}></PersonDetail>
    ));
};

export default PersonList;
