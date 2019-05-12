import React from 'react';
import { Field, reduxForm } from 'redux-form';
import normalizePhone from '../../../components/normalizePhone';
import Model from '../../../components/Model';

const ContactForm = ({ handleSubmit, showForm, onClose }) => (
    <Model title={'Contact Form'} show={showForm} onClose={onClose}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" placeholder="First Name" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" placeholder="Last Name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" placeholder="E-Mail" />
            </div>
            <div>
                <label>Phone</label>
                <Field name="phoneNumber" component="input" type="text" placeholder="Phone Number" normalize={normalizePhone} />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <Field name="address" component="input" type="text" placeholder="Address" />
            </div>
            <button type="submit" onClick={() => onClose()}>Submit</button>
        </form> 
    </Model> 
);
export default reduxForm({ form: 'contact' })(ContactForm);