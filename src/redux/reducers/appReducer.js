export const LOADER = 'APP/LOADER'

const initialState = {
    loadding: false
}

// Pure functions
// Функции которые работают только через входные параметры, легко переиспользовать
export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADER:
            return {...state, loadding: action.payload}
        default: return state
    }
}