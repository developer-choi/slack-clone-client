import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/firestore';

export interface ChatMessageItemProp {
  message: string;
  timestamp?: firebase.firestore.Timestamp;
  userImage: string;
  username: string;
}

export default function ChatMessageItem({message, timestamp, userImage, username}: ChatMessageItemProp) {

  return (
      <Wrap>
        <img src={userImage} alt="avatar-image"/>
        <Info>
          <h4>
            {username}
            {timestamp && <span>{new Date(timestamp.toDate()).toUTCString()}</span>}
            <p>{message}</p>
          </h4>
        </Info>
      </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  
  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const Info = styled.div`
  padding-left: 10px;
  
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
