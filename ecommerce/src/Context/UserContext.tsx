import React from "react";
import { User, UserContextState } from "../Types/User";
import { useState } from "react";

interface ProviderProps {
    children: React.ReactNode;
}

export const Context = React.createContext<UserContextState | null>(null);

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [logged, setLogged] = useState<boolean>(false);
    const [currentTab, setCurrentTab] = useState<string>('1');
    const [modal, setModal] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User>({
        userId: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
    });

    const addUser = (user: User) => {
        const newUser: User = {
            userId: Math.floor(Math.random() * 1000) + 1,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            password: user.password,
        };
        setUsers([...users, newUser]);
    };

    const update = (id: number, updatedUser: User) => {
        setUsers(users.map((user) => {
            if (user.userId === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        }));
    };

    const removeUser = (id: number) => {
        setUsers(users.filter((user) => user.userId !== id));
    };

    const updateAccountTab = () => {
        setCurrentTab(currentTab === '1' ? '2' : '1');
    };

    const loginUser = (user: User) => {
        setLogged(true);
        setCurrentUser(user);
    };

    const logoutUser = () => {
        setLogged(false);
        setCurrentUser({
            userId: 0,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            password: '',
        });
    };

    const displayModal = (b: boolean) => {
        setModal(b);
    };

    return (
        <Context.Provider
            value={{
                users,
                addUser,
                update,
                removeUser,
                currentTab,
                updateAccountTab,
                logged,
                loginUser,
                logoutUser,
                currentUser,
                displayModal,
                modal,
            }}
        >
            {children}
        </Context.Provider>
    );
};
