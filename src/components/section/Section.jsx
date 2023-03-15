import PropTypes from 'prop-types';
import Wrapper from './SectionStyle';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Section;
