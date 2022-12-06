import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 15px;
  border-radius: 4px;
  border: 1px solid #58b38f;
  font-weight: 500;
  font-size: 20px;
  color: #545454;
  text-transform: capitalize;

  &:hover {
    background-color: #58b38f;
    border: none;
    cursor: pointer;
  }

  &:nth-child(1):hover {
    background-color: #58b38f;
  }
  &:nth-child(2):hover {
    background-color: #bac9c7;
  }

  &:nth-child(3):hover {
    background-color: #e4392d;
  }

  &:active {
    color: white;
    transform: scale(0.89);
  }
`;
export const ButtonWraper = styled.div`
  display: inline-flex;
  gap: 35px;
`;
