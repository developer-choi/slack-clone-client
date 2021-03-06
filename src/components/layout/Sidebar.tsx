import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import {useCollection} from 'react-firebase-hooks/firestore';
import {auth, db} from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

export default function Sidebar() {

  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection('rooms'));

  return (
      <Container>
        <Header>
          <SidebarInfo>
            <h2>PAPA FAM HQ</h2>
            <h3>
              <FiberManualRecordIcon/>
              {user?.displayName}
            </h3>
          </SidebarInfo>
          <CreateIcon/>
        </Header>

        <SidebarOption icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption icon={InboxIcon} title="Mentions & reactions"/>
        <SidebarOption icon={DraftsIcon} title="Saved items"/>
        <SidebarOption icon={BookmarkBorderIcon} title="Channel browser"/>
        <SidebarOption icon={PeopleAltIcon} title="People & user groups"/>
        <SidebarOption icon={AppsIcon} title="Apps"/>
        <SidebarOption icon={FileCopyIcon} title="File browser"/>
        <SidebarOption icon={ExpandLessIcon} title="Show less"/>
        <Hr/>
        <SidebarOption icon={ExpandLessIcon} title="Channels"/>
        <Hr/>
        <SidebarOption icon={AddIcon} addChannelOption title="Add Channel"/>

        {channels?.docs.map(doc => (
            <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
        ))}
      </Container>
  );
}

const Container = styled.div`
  background: ${props => props.theme.main};
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  
  > .MuiSvgIcon-root {
    padding: 5px;
    color: #49274b;
    background-color: white;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
    
    >.MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`;

const Hr = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #49274b;
`;
