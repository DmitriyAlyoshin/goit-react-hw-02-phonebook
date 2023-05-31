import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ConForm, ContactInput, SubmitBtn, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInput = nanoid();
  telInput = nanoid();

  handleInputChange = element => {
    const { name, value } = element.target;

    this.setState({ [name]: value });
  };

  handleSubmit = element => {
    element.preventDefault();

    this.props.createContact(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <ConForm onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInput}>Name</Label>

        <ContactInput
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          id={this.nameInput}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={this.telInput}>Number</Label>

        <ContactInput
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          id={this.telInput}
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </ConForm>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
