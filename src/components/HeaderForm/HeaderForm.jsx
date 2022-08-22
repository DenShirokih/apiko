import { LinkItem, Container, ApicoLogo, Button } from './HeaderForm.styled';

export const HeaderForm = () => {
  return (
      <Container>
        <Button>
          <ApicoLogo />
        </Button>
        <div>
          <LinkItem to="/home">Home</LinkItem>
          <LinkItem to="/login">login</LinkItem>
        </div>
      </Container>
  );
};
