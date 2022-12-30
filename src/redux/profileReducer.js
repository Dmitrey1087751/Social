const addPost = "ADD-POST"
const updateNewPostText = "UPDATE-NEW-POST-TEXT"

 let initialState = {
  postsData: [
    { id: 1, message: "sadjnjaiijikcnjjxxjiij", likesCounter: 5 },
    { id: 2, message: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4 },
    { id: 3, message: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2 }
  ],
  newPostText: "Some text"
}
let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost :
      {
      let newPost = {
        id: 5,
        message: action.message,
        likesCounter: 12
      }
      let stateCopy = {...state,
      postsData:[...state.postsData,newPost] };
      return stateCopy;
    }
  
    case updateNewPostText : {
      let stateCopy = {...state}

      stateCopy.newPostText = action.message;
      return stateCopy;
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