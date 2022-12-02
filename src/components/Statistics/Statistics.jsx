import { Item } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = '0',
  positivePercentage,
}) =>
  total ? (
    <ul>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>
        Positive feedback: {positivePercentage ? positivePercentage : 0}%
      </Item>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
