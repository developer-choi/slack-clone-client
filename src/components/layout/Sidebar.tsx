import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import useAuthStateExtend from '../../utils/custom-hooks/useAuthStateExtend';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {useDispatch} from 'react-redux';
import {enterRoomActionCreator} from '../../store/room';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from '../../utils/extend/firebase';
import {ChatRoom} from '../../types/etc/chat';
// import InsertCommentIcon from '@material-ui/icons/InsertComment'
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
// import AppsIcon from '@material-ui/icons/Apps';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Sidebar() {

  const user = useAuthStateExtend()[0] as firebase.User;
  //collection()의 반환값에 제네릭이 없이 항상 DocumentData로 타입이 고정되어있어서 assertion
  const [rooms] = useCollection(db.collection('rooms') as firebase.firestore.CollectionReference<ChatRoom>);
  const [initialRoomSelected, setInitialRoomSelected] = useState(false);
  const dispatch = useDispatch();
  
  //현재 기능(보여줄 페이지)이 채팅방 하나밖에 없으므로, 최초 로딩에 한해 채팅방이 1개이상있으면 최초 방 자동 입장
  useEffect(() => {
    if (!initialRoomSelected && rooms && rooms.docs.length > 0) {
      setInitialRoomSelected(true);
      dispatch(enterRoomActionCreator(rooms.docs[0].id));
    }
  }, [dispatch, rooms, initialRoomSelected]);

  return (
      <Container>
        <Header>
          <SidebarInfo>
            <h2>PAPA FAM HQ</h2>
            <h3>
              <FiberManualRecordIcon/>
              {user.displayName}
            </h3>
          </SidebarInfo>
          <CreateIcon/>
        </Header>

        {/*기능이 구현되지않은 보여주기식 UI여서 주석처리*/}
        {/*<SidebarOption icon={InsertCommentIcon} title="Threads"/>*/}
        {/*<SidebarOption icon={InboxIcon} title="Mentions & reactions"/>*/}
        {/*<SidebarOption icon={DraftsIcon} title="Saved items"/>*/}
        {/*<SidebarOption icon={BookmarkBorderIcon} title="Channel browser"/>*/}
        {/*<SidebarOption icon={PeopleAltIcon} title="People & user groups"/>*/}
        {/*<SidebarOption icon={AppsIcon} title="Apps"/>*/}
        {/*<SidebarOption icon={FileCopyIcon} title="File browser"/>*/}
        {/*<SidebarOption icon={ExpandLessIcon} title="Show less"/>*/}
        {/*<Hr/>*/}
        {/*<SidebarOption icon={ExpandLessIcon} title="Channels"/>*/}
        {/*<Hr/>*/}
        <SidebarOption icon={AddIcon} enableAddRoom title="Add Channel"/>

        {rooms?.docs.map(doc => {
          return <SidebarOption key={doc.id} roomId={doc.id} title={doc.data().name}/>;
        })}
      </Container>
  );
}

const Container = styled.div`
  background: ${props => props.theme.main};
  color: white;
  border-top: 1px solid #49274b;
  width: 260px;
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

// const Hr = styled.hr`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   border: 1px solid #49274b;
// `;
