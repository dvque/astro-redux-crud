import { deleteUserById, type UserId } from '../store/slice';
import { useAppDispatch } from '../../hooks/store';

export const useUserActions = (): { removeUser: (id: UserId) => void } => {
    const dispatch = useAppDispatch();

    const removeUser = (id: UserId): void => {
        dispatch(deleteUserById(id));
    }

    return { removeUser }
}