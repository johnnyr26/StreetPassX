import { User } from "./User";
import { get, post } from "../utils/http";

export type PassRequest = {
    _id: string;
    user: User;
    trade_for: string;
    trade_for_date?: string;
    trade_away: string;
    trade_away_date?: string;
    guests?: string;
    creationDate: Date;
}

export const acceptPassRequest = async (args: {
    _id: string
    email: string,
    trade_for: string,
    trade_for_date?: string,
    trade_away: string,
    trade_away_date?: string,
    guests?: string,
}) => {
    const response = await post('/pass_requests/accept_pass_request', args);
    if (!response.ok) {
        throw new Error(`An error occured while accepting a pass request: ${response.status}`);
    }
    const json = await response.json();
    return json;
};

export const createPassRequest = async (args: {
    email: string,
    trade_for: string,
    trade_for_date?: string,
    trade_away: string,
    trade_away_date?: string,
    guests: string,
}) => {
    const response = await post('/pass_requests/create_pass_request', args)
    if (!response.ok) {
        throw new Error(`An error occured while creating a new pass request: ${response.status}`);
    }
    const json = await response.json();
    return json;
};

export const getPassRequests = async () => {
    const response = await get('/pass_requests/get_pass_requests');
    if (!response.ok) {
        throw new Error(`An error occured while fetching pass requests:', ${response.status })`);
    }
    const json = await response.json();
    return json;
}