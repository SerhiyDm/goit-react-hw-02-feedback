import styled from 'styled-components';

export const Item = styled.li`
  font-weight: 500;
  font-size: 24px;
  color: #454545;
  & + & {
    margin-top: 15px;
  }
`;
