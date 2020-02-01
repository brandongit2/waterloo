import { TYPES } from './actions';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case TYPES.changeCourse:
            return {
                ...state,
                curCourse: action.newCourse
            };
        case TYPES.changeList:
            return {
                ...state,
                curList: action.newList
            };
        default:
            return state;
    }
};

export default rootReducer;
