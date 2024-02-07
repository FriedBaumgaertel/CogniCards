import axios from "axios";
import { get_session_data_item, set_session_data_item } from "./crossPagePersistence";
import { v4 as uuidv4 } from 'uuid';

const urls_s = {
    "stacks": "https://webtechlecture.appspot.com/cloudstore/get?owner=s222216_cogniCards",
    "user": "https://webtechlecture.appspot.com/cloudstore/get?owner=s222216_CogniCards_User",
    "groups": "https://webtechlecture.appspot.com/cloudstore/get?owner=s222216_CogniCards_Groups",
}
const urls_a = {
    "stacks": "https://webtechlecture.appspot.com/cloudstore/add?owner=s222216_cogniCards",
    "user": "https://webtechlecture.appspot.com/cloudstore/add?owner=s222216_CogniCards_User",
    "groups": "https://webtechlecture.appspot.com/cloudstore/add?owner=s222216_CogniCards_Groups",
}
const tokens = {
    "stacks": "KIOUro_UzoihJdWDDNt90vbAw_U_",
    "user": "GDJ8gDzTHcWTMPF6cpursP9HU10_",
    "groups": "YnkJQ42vPBFoJOnJHt4Kfohq_MM_",
}

export async function loginUser(username, password) { // returns true if userdata is correct
    try {
        fetchCloudstore("user", username).then(user => {
            if (user.passwort == password) {
                try { set_session_data_item("groups", user.gruppen); } catch { }
                try { set_session_data_item("tokens", user.zugriffe); } catch { }
                set_session_data_item("username", username);
                set_session_data_item("passwort", password);
                set_session_data_item("logged_in", true);
                return true;
            } else {
                alert("Please double check your input")
                return false;
            }
        });
    } catch {
        alert("Login unsuccessfull, try again");
        return false;
    }
} // getested und geht
async function addUserTokens(newTokenName, token) {
    if (get_session_data_item("logged_in")) {
        let zugriff = {
            "anzahl_zuschauer": 0,
            "name": newTokenName,
            "token": token,
        }
        let alle_zugriffe = get_session_data_item("tokens");
        alle_zugriffe.push(zugriff); //add new token to list
        set_session_data_item("tokens",alle_zugriffe);

        let user = { //reconstruct user, to upload it again
            "zugriffe": alle_zugriffe,
            "passwort": get_session_data_item("passwort"),
            "gruppen": get_session_data_item("groups"),
        };
        await postCloudstore("user", user, get_session_data_item("username"));
    }
} // getested und geht
export async function createNewStack(name, description) { //returns true if succeeded
    if (get_session_data_item("logged_in")) {
        let stack = {
            "description": description,
            "karten": [],
        }
        let token = uuidv4();

        await addUserTokens(name, token);

        return await postCloudstore("stacks", stack, token);
    }
    console.warn("failed to create new Stack")
    return false;
} // getested und geht
export async function addCardToStack(token, front_side, back_side) { //returns true if succeeded
    if (get_session_data_item("logged_in")) {
        try {
            let stack = await fetchCloudstore("stacks", token);

            let currentDate = new Date();
            currentDate = `${currentDate.getDate() < 10 ? '0' : ''}${currentDate.getDate()}.${(currentDate.getMonth() + 1) < 10 ? '0' : ''}${(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}`

            let card = {
                "vorderseite": front_side,
                "rueckseite": back_side,
                "zuletzt_wiederholt": currentDate,
                "schwierigkeit": 0,
                "aktiv": true,
                "index": stack.karten.length,
            };

            stack.karten.push(card);
            return await postCloudstore("stacks", stack, token);
        } catch { }
    }
    console.warn("failed to append card to stack");
    return false;
} // getested und geht
export async function modifyCardInStack(token, front_side, back_side, index) { //returns true if succeeded
    if (get_session_data_item("logged_in")) {
        try {
            let stack = await fetchCloudstore("stacks", token);

            let currentDate = new Date();
            currentDate = `${currentDate.getDate() < 10 ? '0' : ''}${currentDate.getDate()}.${(currentDate.getMonth() + 1) < 10 ? '0' : ''}${(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}`

            let card = stack.karten[index];

            if (front_side) {
                card.vorderseite = front_side;
            }
            if (back_side) {
                card.rueckseite = back_side;
            }
            card.zuletzt_wiederholt = currentDate;

            stack.karten[index] = card;
            return await postCloudstore("stacks", stack, token);
        } catch { }
    }
    console.warn("failed to append card to stack");
    return false;
} //getested und geht

// missing functions for groups


export function fetchCloudstore(base_url, key) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = urls_s[base_url]; // base_url == stacks / user / groups
            url = `${url}&key=${key}`;

            const response = await axios.get(url);
            resolve(response.data);
        } catch (error) {
            console.error(`Error fetching ${base_url}: ${error}`);
            reject(null);
        }
    });
} //getested und geht

async function postCloudstore(base_url, data, key) { //data is a JSON
    return new Promise(async (resolve, reject) => {
        try {
            let url = urls_a[base_url]; // base_url == stacks / user / groups
            let token = tokens[base_url];
            data = JSON.stringify(data);
            if (key) {
                url = `${url}&token=${token}&key=${key}&jsonstring=${data}` //key bei update funktion
            } else {
                url = `${url}&token=${token}&jsonstring=${data}`
            }

            const response = await axios.get(url);
            resolve(true);
        } catch (error) {
            console.error(`Error posting ${base_url}: ${error}`);
            reject(false);
        }
    });
} //getested und geht