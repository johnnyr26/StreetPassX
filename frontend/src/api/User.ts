import { post } from "../utils/http";

export type User = {
    name: string;
    phone_number: string;
};

export const login = async () => {
    const response = await post('/login');
    if (!response.ok) {
        throw new Error(`An error occured while signing up:', ${response.status})`);
    }
    const json = await response.json();
    return json;
}

export const signup = async (args: User) => {
    const response = await post('/signup', args)
    if (!response.ok) {
        throw new Error(`An error occured while signing up:', ${response.status})`);
    }
    const json = await response.json();
    return json;
}

export const logout = async () => {
    const response = await post('/logout')
    if (!response.ok) {
        throw new Error(`An error occured while logging out:', ${response.status})`);
    }
    const json = await response.json();
    return json;
}