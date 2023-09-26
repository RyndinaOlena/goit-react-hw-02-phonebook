export const Contacts = ({ contacts }) => {
    return <div>
        <ul>{contacts.map(({ name, id, number }) => {
            return <li key={id}>{name} : {number} </li>
        })}</ul>
    </div>;
}
