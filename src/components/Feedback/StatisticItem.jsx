import PropTypes from 'prop-types';
import { Item } from './Feedback.styled';

export default function StatisticItem({ data, feedbackState }) {
  return data.map(({ label }) => (
    <Item key={label}>
      {label}:{feedbackState[label]}
    </Item>
  ));
}

StatisticItem.propTypes = {
  data: PropTypes.array.isRequired,
  feedbackState: PropTypes.object.isRequired,
};
