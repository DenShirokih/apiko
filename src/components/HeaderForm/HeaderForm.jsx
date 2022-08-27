import { LinkItem, Container, ApicoLogo } from './HeaderForm.styled';

export const HeaderForm = () => {
  return (
    <Container>
      <LinkItem to="/">
        <ApicoLogo />
      </LinkItem>
      <div>
        <LinkItem to="/home">Home</LinkItem>
        <LinkItem to="/login">login</LinkItem>
      </div>
    </Container>
  );
};
