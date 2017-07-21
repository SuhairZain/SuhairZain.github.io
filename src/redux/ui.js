const initialState = {
  selectedPage: 0,
};

const CHANGE_PAGE = 'CHANGE_PAGE';
export const createChangePage = (index) => ({
  type: CHANGE_PAGE,
  index,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        selectedPage: action.index,
      };
    case undefined:
      return initialState;
    default:
      return state;
  }
};
