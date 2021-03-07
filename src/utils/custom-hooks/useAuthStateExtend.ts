import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../extend/firebase';

export default function useAuthStateExtend() {
  return useAuthState(auth);
}
