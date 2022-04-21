const apiReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case "FETCH_USER":
            if (action.success)
                return { ...state, users: action.payload }
            else
                return state;
        default:
            return state;
    }
}

export default apiReducer;