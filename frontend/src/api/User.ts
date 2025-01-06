import { post } from "../utils/http";

export type User = {
    name: string;
    email: string;
};

export const signup = async (args: {
    phone_number: string
}) => {
    const response = await post('/signup', args)
    if (!response.ok) {
        throw new Error(`An error occured while signing up:', ${response.status})`);
    }
    const json = await response.json();
    return json;
}