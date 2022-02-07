import { LOADER, ALERT } from "../reducers/appReducer";

export function loadding(isLoad) {
    return {
        type: LOADER,
        payload: isLoad
    }
}

export function showAlert(text) {
    return {
        type: ALERT,
        payload: text
    }
}