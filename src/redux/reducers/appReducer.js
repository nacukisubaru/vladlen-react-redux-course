export const LOADER = 'APP/LOADER'
export const ALERT = 'APP/ALERT'

const initialState = {
    loadding: false,
    alert: null
}

// Pure functions
// Функции которые работают только через входные параметры, легко переиспользовать
export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADER:
            return {...state, loadding: action.payload}
        case ALERT:
            return {...state, alert: action.payload}
        default: return state
    }
}