
export function get_session_data_item(key) {
    let sesion_data;
    try {
        sesion_data = sessionStorage.getItem("session_data");
        sesion_data = JSON.parse(sesion_data);
        return sesion_data[key];
    } catch (error) { // only when session storage hasn't been set yet
        sesion_data = {
            "tokens": [],
            "username": "",
            "groups": [],
            "logged_in": false,
        };
        if(!sesion_data.hasOwnProperty(key)){
            sessionStorage.setItem("session_data", JSON.stringify(sesion_data));
            return null;
        }
        return sesion_data[key];
    }
    
}

export function set_session_data_item(key, data) {
    let sesion_data;
    try {
        sesion_data = sessionStorage.getItem("session_data");
        sesion_data = JSON.parse(sesion_data);
        sesion_data[key] = data;
        sessionStorage.setItem("session_data", JSON.stringify(sesion_data));
    } catch (error) { // only when session storage hasn't been set yet
        sesion_data = {
            "tokens": [],
            "username": "",
            "groups": [],
            "logged_in": false,
        };
        sesion_data[key] = data;
        sessionStorage.setItem("session_data", JSON.stringify(sesion_data));
    }
}

/* 
evtl async funktionen nötig
*/