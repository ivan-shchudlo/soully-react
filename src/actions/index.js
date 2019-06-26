
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

export const selectActivity = (checked, name) => ({
  type: 'SELECT_ACTIVITY',
  payload: {checked, name}
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SAD_MOOD: 'SAD_MOOD',
    HAPPY_MOOD: 'HAPPY_MOOD',
    WOW_MOOD:'WOW_MOOD',
    WTF_MOOD:'WTF_MOOD',
    EXCITED_MOOD:'EXCITED_MOOD',
    GOOD_MOOD:'GOOD_MOOD',
    
  }

export const onCreatePost=(post)=>({
  type:'NEW_POST_CREATED',
  post
})
export const onAddPost=(post)=>({
  type:'NEW_POST_ADDED',
  payload: {post}
})
export const GetPosts=()=>({

})
export const fetchDataSuccess = posts => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: { posts }
});

export const fetchDataFailure = error => ({
    type: 'FETCH_DATA_FAILURE',
    payload: {error}

})
export const fetchDataLoading=()=>({
  type: 'FETCH_DATA_LOADING'
})

/*
export const fetchPosts= () =>
 {(dispatch) => {
    dispatch({ type:' FETCH_POSTS '});
    return fetch('...')
      .then(posts => dispatch({ type: 'FETCH_POSTS_SUCCESS', posts}))
      .catch(error => dispatch({ type: 'FETCH_POSTS_FAIL'}));
  }}
*/
