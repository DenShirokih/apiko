import styled from '@emotion/styled';

export const BtnOut = styled.button`
  font-size: 12px;
  color: #ffffff;
  background-color: transparent;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 75px;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    transition: color 0.3s linear;
    font-weight: bold;
    letter-spacing: 0.5rem;
  }
`;
