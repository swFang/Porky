import * as mockdata from "../mockdata/MockData.json";

export function getUser(id: string) {
    if (mockdata.User == id) {
        console.log('inside get user');
    }
}
