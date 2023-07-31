import styled from './Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className={styled.section}>
      <h2 className={styled.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired
}