import * as actionTypes from "../constants/action-types";

export const displayDetailsDays = day => {
  return {
    type: actionTypes.DISPLAY_DETAILS_DAY,
    payload: {
      day: day
    }
  };
};

export const showMobileNavMenu = () => ({
  type: actionTypes.SHOW_MOBILE_NAV_MENU
})

export const hideMobileNavMenu = () => ({
  type: actionTypes.HIDE_MOBILE_NAV_MENU
})


let nextTodoId = 0
export const addStory = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})



export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})



export const chooseMood = mood => ({
  type: 'CHOOSE_MOOD',
  mood
})

export const chooseActivity = activities => ({
  type: 'SELECT_ACTIVITY',
  
    activities
  
})

export const unselectActivity = activities => ({
  type: 'UNSELECT_ACTIVITY',

    activities
  
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SAD_MOOD: 'SAD_MOOD',
    HAPPY_MOOD: 'HAPPY_MOOD',
    WOW_MOOD:'WOW_MOOD',
    WTF_MOOD:'WTF_MOOD',
    EXCITED_MOOD:'EXCITED_MOOD',
    GOOD_MOOD:'GOOD_MOOD'
  }
