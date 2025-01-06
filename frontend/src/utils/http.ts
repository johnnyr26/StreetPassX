export const get = async (url: string) => {
    const response = await fetch(url);
    // Unauthenticated user
    if (!response.ok && response.status === 401) {
        window.location.href = '/register';
    }
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
    // Unauthenticated user
    if (!response.ok && response.status === 401) {
        window.location.href = '/register';
    }
    return response;
}