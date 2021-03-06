import {createAction, handleActions} from 'redux-actions';

const ENTER_ROOM = 'slack-clone-client/room/ENTER_ROOM';

export const enterRoomActionCreator = createAction<string>(ENTER_ROOM);

export interface RoomState {
  roomId: string | undefined;
}

const initialState: RoomState = {
  roomId: undefined
};

export const room = handleActions<RoomState, any>({

  [ENTER_ROOM]: (state, action: ReturnType<typeof enterRoomActionCreator>) => ({
    roomId: action.payload
  }),

}, initialState);
