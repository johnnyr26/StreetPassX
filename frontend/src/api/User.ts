export type User = {
    name: string;
    email: string;
};

export const signup = async (args: {
    phone_number: string
}) => {
        const response = await fetch('/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
    })
    if (!response.ok) {
        throw new Error(`An error occured while signing up:', ${response.status})`);
    }
    const json = await response.json();
    return json;
}