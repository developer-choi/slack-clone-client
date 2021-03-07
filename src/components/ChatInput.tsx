import React, {useCallback, useRef} from 'react';
import styled from 'styled-components';
import FormExtend from './extend/FormExtend';
import {Button} from '@material-ui/core';
import {db} from '../utils/extend/firebase';
import firebase from 'firebase';
import useAuthStateExtend from '../utils/custom-hooks/useAuthStateExtend';

export interface ChatInputProp {
  roomId: string;
  channelName: string;
  onSendSuccess: () => void;
}

export default function ChatInput({channelName, roomId, onSendSuccess}: ChatInputProp) {
  
  //이 컴포넌트는, 로그인하지않으면 렌더링되지않으므로 assertion
  const {displayName, photoURL} = useAuthStateExtend()[0] as firebase.User;
  const inputRef = useRef<HTMLInputElement>(null);

  //https://youtu.be/QiTq5WrWoJw?t=8002 부터 설명시작
  const sendMessage = useCallback(async () => {
    if (roomId && inputRef.current) {
      await db.collection('rooms').doc(roomId).collection('messages').add({
        message: inputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //https://youtu.be/QiTq5WrWoJw?t=8123 부터 설명시작
        user: displayName,
        userImage: photoURL
      });
      inputRef.current.value = '';
      onSendSuccess();
    }
  }, [roomId, onSendSuccess, displayName, photoURL]);

  return (
      <Wrap>
        <input ref={inputRef} placeholder={`Message #${channelName}`}/>
        <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
      </Wrap>
  );
}

const Wrap = styled(FormExtend)`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  margin-top: auto;
  
  > input {
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
    background-color: white;
  }
  
  > button {
    display: none;
  }
`;
