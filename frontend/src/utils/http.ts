export const get = async (url: string) => {
    const response = await fetch(url);
    return response;
};

export const post = async (url: string, args: unknown) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
    });
    return response;
}