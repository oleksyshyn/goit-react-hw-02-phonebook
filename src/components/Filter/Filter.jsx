import React from 'react';
// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    )
 
}

export default Filter;