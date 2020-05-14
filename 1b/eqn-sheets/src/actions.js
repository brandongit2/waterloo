export const TYPES = {
    changeList: 'CHANGE_LIST',
    changeCourse: 'CHANGE_COURSE'
};

export function changeCourse(newCourse) {
    return {
        type: TYPES.changeCourse,
        newCourse
    };
}

export function changeList(newList) {
    return {
        type: TYPES.changeList,
        newList
    };
}
