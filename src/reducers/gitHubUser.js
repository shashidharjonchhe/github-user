import { act } from "react-dom/test-utils";

const initialState = {
    user: null,
    loading: false,
    count: 1,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_GIT_HUB':
            return {
                ...state,
                loading: true,
            }
        case 'ON_SUCCESS_GITHUB':
            return {
                ...state,
                loading: false,
                user: action.data,
                error: null
            }
        case 'ON_FAIL_GITHUB':
            return {
                ...state,
                loading: false,
                error: action.error,
                user: null
            }
        case 'ON_INCREMENT_FOLLOWING':
            return {
                ...state,
                user: action.user,
                count: action.count
            }
        default:
            return state;
    }
};

export default reducer;