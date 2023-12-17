import { addNewUser, deleteUserById, editUserById, type User, type UserId, type UserState } from '../store/slice';
import { useAppDispatch } from '../../hooks/store';

export const useUserActions = (): {
    addUser: ({ name, email, github }: User) => void,
    removeUser: (id: UserId) => void,
    editUser: ({ id, name, email, github }: UserState) => void
} => {
    const dispatch = useAppDispatch();

    const addUser = ({ name, email, github }: User): void => {
        dispatch(addNewUser({ name, email, github }));
    }

    const removeUser = (id: UserId): void => {
        dispatch(deleteUserById(id));
    }

    const editUser = ({ id, name, email, github }: UserState): void => {
        dispatch(editUserById({ id, name, email, github }));
    }

    return { addUser, removeUser, editUser }
} 