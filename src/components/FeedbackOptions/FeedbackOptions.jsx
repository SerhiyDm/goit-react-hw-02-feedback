import PropTypes from 'prop-types';
import { Button, ButtonWraper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonWraper>
    <Button onClick={() => onLeaveFeedback(options[0])}>Good</Button>
    <Button onClick={() => onLeaveFeedback(options[1])}>Neutral</Button>
    <Button onClick={() => onLeaveFeedback(options[2])}>Bad</Button>
  </ButtonWraper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
