export const createPass = async (args: {
    email: string,
    trade_for: string,
    trade_for_date?: string,
    trade_away: string,
    trade_away_date?: string,
    guests: string,
}) => {
    const response = await fetch('/passes/create_pass', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
    })
    if (!response.ok) {
        throw new Error(`An error occured while creating a new pass:', ${response.status })`);
    }
    const json = await response.json();
    return json;
};