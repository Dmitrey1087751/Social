const addPost = "ADD-POST"
const updateNewPostText = "UPDATE-NEW-POST-TEXT"

let profileReducer = (state, action) => {
  switch (action.type) {
    case addPost :
      {
      let newPost = {
        id: 5,
        message: action.message,
        likesCounter: 12
      }
      state.postsData.push(newPost);
      return state;
    }
    case updateNewPostText : {
      state.newPostText = action.message;
      return state;
    }
    default: return state;
  }
  

  }

  export const AddPostActionCreator = (postText) => {
    return  {type: "ADD-POST",
             message: postText}
  }
  
  export const UpdateNewPostTextCreator = (postText) => { 
    return {type:"UPDATE-NEW-POST-TEXT",
            message: postText}
  }
  export default profileReducer;