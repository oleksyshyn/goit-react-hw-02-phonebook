import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsListItem.module.css';

const ContactsListItem = ({ key, name, number}) => {
    return (
        <li key={key}>
              <p>{name}: {number}</p>
        </li>
    )
 
}

export default ContactsListItem;