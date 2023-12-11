import { addNewUser, deleteUserById, type User, type UserId } from '../store/slice';
import { useAppDispatch } from '../../hooks/store';

export const useUserActions = (): { addUser: ({ name, email, github }: User) => void, removeUser: (id: UserId) => void } => {
    const dispatch = useAppDispatch();

    const addUser = ({ name, email, github }: User): void => {
        dispatch(addNewUser({ name, email, github }));
    }

    const removeUser = (id: UserId): void => {
        dispatch(deleteUserById(id));
    }

    return { addUser, removeUser }
} 