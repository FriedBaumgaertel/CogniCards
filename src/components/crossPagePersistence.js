
function get_session_data_item(key) {
    let sesion_data;
    try {
        sesion_data = window.sessionStorage.getItem("session_data");
        sesion_data = JSON.parse(sesion_data);
    } catch { // only when session storage hasn't been set yet
        sesion_data = {
            "tokens": {},
            "id": "",
            "groups": [],
            "logged_in": false,
        };
        window.sessionStorage.setItem("session_data", JSON.stringify(sesion_data));
    }
    return sesion_data[key];
}

function set_session_data_item(key, data) {
    let sesion_data;
    try {
        sesion_data = window.sessionStorage.getItem("session_data");
        sesion_data = JSON.parse(sesion_data);
        sesion_data[key] = data;
        window.sessionStorage.setItem("session_data", JSON.stringify(sesion_data));
    } catch { // only when session storage hasn't been set yet
        sesion_data = {
            "tokens": {},
            "id": "",
            "groups": [],
            "logged_in": false,
        };
        sesion_data[key] = data;
        window.sessionStorage.setItem("session_data", JSON.stringify(sesion_data));
    }
}

/* 
evtl async funktionen nötig
*/