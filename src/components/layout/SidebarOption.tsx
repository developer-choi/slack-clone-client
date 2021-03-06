import React, {useCallback} from 'react';
import styled from 'styled-components';
import {SvgIconProps} from '@material-ui/core';
import {db} from '../../firebase';
import {useDispatch} from 'react-redux';
import {enterRoomActionCreator} from '../../store/room';

export interface SidebarOptionProp {
  title: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  addChannelOption?: boolean;
  id?: string;
}

export default function SidebarOption({icon: Icon, title, addChannelOption, id}: SidebarOptionProp) {

  const dispatch = useDispatch();

  const addChannel = useCallback(() => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName
      });
    }
  }, []);
  const selectChannel = useCallback(() => {
    if (id) {
      dispatch(enterRoomActionCreator(id));
    }
  }, []);

  return (
      <Wrap onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon ?
            <>
              <Icon fontSize="small" style={{margin: 10}}/>
              <Title>{title}</Title>
            </>
            :
            <OptionChannel>
              <span>#</span> {title}
            </OptionChannel>
        }
      </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  
  > h3 {
    font-weight: 500;
    
    > span {
      padding: 15px;
    }
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 12px;
  padding-left: 2px;
`;

const OptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
