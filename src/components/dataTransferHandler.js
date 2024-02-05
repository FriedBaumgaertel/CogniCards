import axios from "axios";

const urls_s = {
    "stacks": "https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s222216_cogniCards",
    "user": "https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s222216_CogniCards_User",
    "groups": "https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s222216_CogniCards_Groups",
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

// // key und jsonstring weglasse, das kommt über die url automatisch
const dummy_stack = {
        "description": "dummy description of a stack",
        "karten": [
            {
                "index": 0,
                "vorderseite": "dummy front side",
                "rueckseite": "dummy back side",
                "zuletzt_wiederholt": "01.01.2024",
                "schwierigkeit": 0,
                "aktiv": true
            }
        ],
    }

const dummy_user = {
        "passwort": "dummy_password",
        "gruppen": ["dummy"],
        "zugriffe":
            [
                {
                    "token": "dummy",
                    "name": "dummy stack name",
                    "anzahl_zuschauer": 0,
                }
            ]
    }

const dummy_group = {
        "mitglieder": ["dummy"],
        "admins": ["dummy"],
        "zugriffe":
            [
                {
                    "token": "dummy",
                    "name": "dummy stack name",
                    "anzahl_zuschauer": 0,
                }
            ]
    }

const dummies = {
    "stacks": dummy_stack,
    "user": dummy_user,
    "groups": dummy_group,
}

export function fetchCloudstore(base_url) {
    let url = urls_s[base_url]; // base_url == stacks / user / groups

    axios.get(url).then(response => {
        console.log(`${base_url}:`);
        console.log(response);
    }).catch(error => {
        console.error(`Error fetching ${base_url}: ${error}`);
    });
}

export function postCloudstore(base_url, data) { //auth probleme
    let url = urls_a[base_url]; // base_url == stacks / user / groups
    let token = tokens[base_url];
    data = JSON.stringify(dummies[base_url]); //replace with actual data

    url = `${url}&token=${token}&key=dummy&jsonstring=${data}` //key bei update funktion

    console.log(url);

    axios.get(url).then(response => {
        console.log(`${base_url}:`);
        console.log(response);
    }).catch(error => {
        console.error(`Error posting ${base_url}: ${error}`);
    });
}