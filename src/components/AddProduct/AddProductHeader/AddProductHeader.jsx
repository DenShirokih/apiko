import {
  Header,
  LinkItem,
  ApicoLogo,
  Button,
  Container,
  UserName,
  UserMenu,
} from './AddProductHeader.styled';

export const AddProductHeader = () => {
  return (
    <>
      <Header>
        <Container>
          <LinkItem to="/">
            <ApicoLogo />
          </LinkItem>
          <UserMenu>
            <UserName></UserName>
            <LinkItem to="/login">login</LinkItem>
          </UserMenu>
        </Container>
      </Header>
    </>
  );
};
