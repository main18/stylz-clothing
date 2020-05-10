import React from 'react';
import './forminput.styles.scss';
const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='form-group'>
            <input className='input-field' onChange={handleChange} {...otherProps} />
            {
                label ?
                    (
                    <label
                        className={`${otherProps.value.length ? 'make-label-smaller' : ''} label`}
                    >
                        {label}
                    </label>
                    ) : null
            }
        </div>
    )
}

export default FormInput;