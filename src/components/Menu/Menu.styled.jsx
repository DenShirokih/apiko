import styled from '@emotion/styled';

export const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  height: 100vh;
  z-index: 1000;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    color: #ffffff;
    padding-bottom: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
