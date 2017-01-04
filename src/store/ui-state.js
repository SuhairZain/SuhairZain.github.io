const initialState = {
    selectedTab: 0,
    tabs: [{
        _id: 0,
        title: 'Home'
    }, {
        _id: 1,
        title: 'Projects'
    }, {
        _id: 2,
        title: 'Contact'
    }]
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