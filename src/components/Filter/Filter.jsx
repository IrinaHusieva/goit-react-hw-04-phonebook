import PropTypes from 'prop-types';
import styled from './Filter.module.css'

export const Filter = ({ filter, handleChange }) => {
    
    return (
        <label className={styled.label}>
            Find contacts by name
            <input className={styled.input}
              onChange={handleChange}
              type="text"
              value={filter}
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
            />
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}