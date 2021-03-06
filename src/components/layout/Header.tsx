import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase';

export default function Header() {
  const [user] = useAuthState(auth);

  const onClickAvatar = useCallback(() => {
    auth.signOut();
  }, []);

  return (
      <Container>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar onClick={onClickAvatar} alt={user?.displayName} src={user?.photoURL}/>
        <AccessTimeIcon/>
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon/>
        <input placeholder="Search text"/>
      </HeaderSearch>

        <HeaderRight>
          <HelpOutlineIcon/>
        </HeaderRight>
      {/* Header Right */}
      </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  color: white;
  background: ${props => props.theme.main};

  > input {
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  
  >.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
