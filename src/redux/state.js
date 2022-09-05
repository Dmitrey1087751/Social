

let store = {

  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "sadjnjaiijikcnjjxxjiij", likesCounter: 5 },
        { id: 2, message: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4 },
        { id: 3, message: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2 }
      ],
      newPostText: "Some text"
    },
    messager: {
      messagesData: [
        { id: 1, text: "a;lsmlsmlkmscmck  sdsdsd  scscm" },
        { id: 2, text: "a;lsmlsmlkmscmck   dcsdc   m" },
        { id: 3, text: "a;lsmlsmlkmscmckm  sdcsdcsd" },
        { id: 4, text: "a;lsmlsmlkmscmckmsdcsdsdsdsd" },
        { id: 5, text: "a;lsmlsmlkmscmckm" }
      ],
      dialogsData: [
        { id: 1, Name: "Ivan" },
        { id: 2, Name: "Viktoria" },
        { id: 3, Name: "Papendus" },
        { id: 4, Name: "Chubaka" }
      ]
    }

  },
  _renderEntireTree() {
    console.log("OK")
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._renderEntireTree = observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: action.message,
        likesCounter: 12

      }
      this._state.profilePage.postsData.push(newPost);
      this._renderEntireTree(store._state);

    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.message;
      this._renderEntireTree(store._state);

    }
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
export default store