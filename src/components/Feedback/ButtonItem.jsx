import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export default function ButtonItem({ title, onClick }) {
  return (
    <li>
      <Button type="button" onClick={onClick}>
        {title}
      </Button>
    </li>
  );
}

ButtonItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
