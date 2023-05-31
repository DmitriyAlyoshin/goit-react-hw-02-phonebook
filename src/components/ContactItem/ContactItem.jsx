import PropTypes from 'prop-types';
import { Item, Name, Number, DeleteBtn } from './ContactItem.styled';

export function ContactItem({ contacts, onRemoveContact }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn type="button" onClick={() => onRemoveContact(id, name)}>
              Delete
            </DeleteBtn>
          </Item>
        );
      })}
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  onRemoveContact: PropTypes.func.isRequired,
};
