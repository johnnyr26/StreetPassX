import { User } from "./User";

export type Pass = {

  user: User;
  event: string;
  date?: string;
  guests?: string;
  creationDate: Date;
};

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

export const getPendingPasses = async () => {
    const response = await fetch('/passes/get_pending_passes');
    if (!response.ok) {
        throw new Error(`An error occured while creating a new pass:', ${response.status })`);
    }
    const json = await response.json();
    return json;
}

export const completePass = async (pass: Pass) => {
    const response = await fetch('/passes/complete_pass', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pass),
    });
    if (!response.ok) {
        throw new Error(`An error occured while creating a new pass:', ${response.status })`);
    }
    const json = await response.json();
    return json;
};