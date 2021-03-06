import React, {Ref, useCallback, useRef} from 'react';
import styled from 'styled-components';
import FormExtend from './extend/FormExtend';
import {Button} from '@material-ui/core';
import {auth, db} from '../firebase';
import firebase from 'firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

export interface ChatInputProp {
  channelId: string;
  channelName: string;
  chatRef: Ref<HTMLDivElement>;
}

export default function ChatInput({channelName, channelId, chatRef}: ChatInputProp) {

  const inputRef = useRef<HTMLInputElement>(null);
  const [user] = useAuthState(auth);

  //https://youtu.be/QiTq5WrWoJw?t=8002 부터 설명시작
  const sendMessage = useCallback(async () => {
    if (channelId && inputRef.current) {
      await db.collection('rooms').doc(channelId).collection('messages').add({
        message: inputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //https://youtu.be/QiTq5WrWoJw?t=8123 부터 설명시작
        user: user?.displayName,
        userImage: user?.photoURL
      });
      inputRef.current.value = '';
      chatRef?.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [channelId, chatRef]);

  return (
      <Wrap>
        <input ref={inputRef} placeholder={`Message #${channelName}`}/>
        <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
      </Wrap>
  );
}

const Wrap = styled(FormExtend)`
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  
  > input {
    position: fixed;
    bottom: 30px;
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
