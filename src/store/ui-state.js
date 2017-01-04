const initialState = {
    selectedTab: 0
};

const SELECT_TAB = 'SELECT_TAB';
export const createSelectTab = (id) => ({
    type: SELECT_TAB,
    selectedTab: id
});

export const uiState = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return {
                ...state,
                selectedTab: action.selectedTab
            };
        default:
            return state;
    }
};