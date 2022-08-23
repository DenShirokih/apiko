import {
  Header,
  LinkItem,
  ApicoLogo,
  Button,
  Container,
  ContainerFilter,
} from './HeaderHome.styled';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';

export const HeaderHome = () => {
  const logged = useSelector(authSelectors.getloggedIn);
  return (
    <Header>
      <Container>
        <Button>
          <ApicoLogo />
        </Button>
        <div>
          <LinkItem to="/add">ADD</LinkItem>
          {!logged && <LinkItem to="/login">login</LinkItem>}
        </div>
      </Container>
      <ContainerFilter>
        <Filter />
      </ContainerFilter>
    </Header>
  );
};
