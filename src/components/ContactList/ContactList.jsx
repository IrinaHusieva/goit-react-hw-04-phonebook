import PropTypes from 'prop-types';
import styled from './ContactList.module.css'

export const ContactList = ({contacts, onDelete}) => {
      return (
    <ul className={styled.list}>
      {contacts.map((contact) => (
        <li className={styled.contact} key={contact.id}>
          <div className={styled.wrap}>
            <p> {contact.name}: {contact.number}</p>
            <button className={styled['list-btn']} type="button" onClick={() => onDelete(contact.id)}>
            Delete
            </button>
          </div>
          
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}