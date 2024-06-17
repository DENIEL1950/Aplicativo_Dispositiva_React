export interface User{
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    password: string;
}

export interface UserContextState{
    user: User[];
    logged: boolean;
    currentUser: User;
    modal: boolean;
    updateCurretUser: (user: User) => void;
    loginUser: (user: User) => void;
    logoutUser: () => void;
    currenTab: string;
    addUser: (user: User) => void;
    updateUser: (id: number) =>void;
    removeUser: (id: number) => void;
    updateAccounTab: ()=> void;
    displayModal: (b: boolean) => void;
}