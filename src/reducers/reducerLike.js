
const  initialState= {
  posts: [{}],
  postsLikeCounters: [{}].reduce((out, post) => {
    //console.log("here",typeof(postsData()));
    return {
      ...out,
      [post.id]: post.likes
    };
  }, {})
  };

export function posts(state=[], action) {
  return state;
}

export function postsLikes(state={}, action) {
  switch (action.type) {
    case 'LIKE_POST':
      return {
        ...state,
        [action.post.id]: true
      };
    case 'UNLIKE_POST':
      return {
        ...state,
        [action.post.id]: false
      };
   
    default:
      return state;
  }
}

export function postsLikeCounters(state=[], action) {
  let value;

  switch (action.type) {
    case 'LIKE_POST':
      value = state[action.post.id] || 0;
      
      return {
        ...state,
        [action.post.id]: value + 1
      };
    case 'UNLIKE_POST':
      value = state[action.post.id] || 0;

      return {
        ...state,
        [action.post.id]: Math.max(value - 1, 0)
      };
    default:
      return state;
  }
}

