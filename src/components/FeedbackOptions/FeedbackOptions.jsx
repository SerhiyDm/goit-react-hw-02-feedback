import PropTypes from 'prop-types';
import { Button, ButtonWraper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonWraper>
    {options.map((option, index) => (
      <Button key={index} onClick={() => onLeaveFeedback(option)}>
        {option[0].toUpperCase() + option.slice(1)}
      </Button>
    ))}
  </ButtonWraper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
