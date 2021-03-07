import React, {useCallback, useEffect, useRef} from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';
import ChatInput from './ChatInput';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from '../utils/extend/firebase';
import ChatMessageItem from './ChatMessageItem';

function selector(state: RootState) {
  return state.room.roomId;
}

export default function ChatPage() {

  const chatRef = useRef<HTMLDivElement>(null);
  const roomId = useSelector<RootState, ReturnType<typeof selector>>(selector);
  //TODO 해결하지못한 Firebase 타입에러
  const [roomDetails] = useCollection(roomId && db.collection('rooms').doc(roomId));
  const [roomMessages, loading] = useCollection(!roomId ? undefined : db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc'));
  
  //TODO 해결하지못한 Firebase 타입에러
  const channelName = roomDetails?.data()?.name as string | undefined;
  
  const scrollToBottom = useCallback(() => {
    chatRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);
  
  useEffect(() => {
    scrollToBottom();
  }, [roomId, loading, scrollToBottom]);
  
  if (!roomId || !channelName || !roomMessages) {
    return null;
  }
  
  return (
      <Wrap>
        <Header>
          <HeaderLeft>
            <h4><strong>#{channelName}</strong></h4>
            <StarBorderOutlinedIcon/>
    
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon/> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>
          {roomMessages.docs.map(doc => {
            const {message, timestamp, user, userImage, id} = doc.data();
            return (
                <ChatMessageItem key={id} message={message} userImage={userImage} username={user} timestamp={timestamp}/>
            );
          })}
          <ChatBottom ref={chatRef}/>
        </ChatMessages>
        <ChatInput
            onSendSuccess={scrollToBottom}
            channelName={channelName}
            roomId={roomId}
        />
      </Wrap>
  );
}

const Wrap = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;

    > .MuiSvgIcon-root {
      margin-left: 20px;
      font-size: 18px;
    }
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;

    > .MuiSvgIcon-root {
      margin-right: 5px;
      font-size: 16px;
    }
  }
`;

const ChatMessages = styled.div`

`;

const ChatBottom = styled.div`

`;
