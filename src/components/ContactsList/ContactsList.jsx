import React from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

const ContactsList = ({ contacts}) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                < ContactsListItem 
                    key={id} 
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    )
 
}

export default ContactsList;