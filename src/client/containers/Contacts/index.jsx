import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { fetchContacts, addContact, removeContact } from './action';
import "./style.css";
import Icon from '../../components/Icon';
import ContactForm from './components/ContactForm';


class ContactsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.handleModel = this.handleModel.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { fetchContacts, contacts } = this.props;
    if(contacts.length === 0) {
      fetchContacts();
    }
  }

  handleModel = val => {
    this.setState({ showForm: val });
  };

  removeItem = val => {
    this.props.removeContact(val);
  };

  submit = values => {
    this.props.addContact(values);
  };

  render() {
    const { showForm } = this.state;
    const { loading, error, contacts } = this.props;
    return (
      <Fragment>
        <div className="contacts-area">
          <button onClick={() => this.handleModel(true)}>Add Contact</button>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>E-Mail</th>
                <th>address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, key) => {
                const { index, firstName, lastName, email, phoneNumber, address } = contact;
                return (
                  <tr key={key}>
                    <td>{index}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td><button onClick={() => this.removeItem(key)}><Icon icon='trash-alt' size="1" /></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ContactForm showForm={showForm} onSubmit={this.submit} onClose={() => this.handleModel(false)} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, contacts } = state.Contacts;
  return { loading, error, contacts };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    addContact: contact => dispatch(addContact(contact)),
    removeContact: index => dispatch(removeContact(index))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsExample);