import { LOADER } from "../reducers/appReducer";

export function loadding(isLoad) {
    return {
        type: LOADER,
        payLoad: isLoad
    }
}