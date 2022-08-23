import {
  Header,
  LinkItem,
  ApicoLogo,
  Button,
  Container,
  ContainerFilter,
} from './HeaderHome.styled';
import { Filter } from '../Filter/Filter';
// import { useDispatch } from 'react-redux';
// import { removeUser } from 'redux/authSlice';
import { LogOutButton } from 'components/LogOutButton/LogOutButton';

export const HeaderHome = () => {
  return (
    <Header>
      <Container>
        <Button>
          <ApicoLogo />
        </Button>
        <div>
          <LinkItem to="/add">ADD</LinkItem>
          <LinkItem to="/login">login</LinkItem>
          <LogOutButton />
        </div>
      </Container>
      <ContainerFilter>
        <Filter />
      </ContainerFilter>
    </Header>
  );
};
