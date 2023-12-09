import { deleteUserById, type UserId } from '../store/users/slice';
import { useAppDispatch } from './store';

export const useUserActions = (): { removeUser: (id: UserId) => void } => {
    const dispatch = useAppDispatch();

    const removeUser = (id: UserId): void => {
        dispatch(deleteUserById(id));
    }

    return { removeUser }
}