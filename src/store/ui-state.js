const initialState = {
    selectedProject: 1000,
    selectedTab: 0
};

const SELECT_PROJECT = 'SELECT_PROJECT';
export const createSelectProject = (id) => ({
    type: SELECT_PROJECT,
    selectedProject: id
});

const SELECT_TAB = 'SELECT_TAB';
export const createSelectTab = (id) => ({
    type: SELECT_TAB,
    selectedTab: id
});

export const uiState = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PROJECT:
            return {
                ...state,
                selectedProject: action.selectedProject
            };
        case SELECT_TAB:
            return {
                ...state,
                selectedTab: action.selectedTab
            };
        default:
            return state;
    }
};