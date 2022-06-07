import RenderEntireTree from '../Render';

  let state = {
      profilePage: {
          postsData: [
            { id: 1, maessage: "sadjnjaiijikcnjjxxjiij", likesCounter: 5 },
            { id: 2, maessage: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4 },
            { id: 3, maessage: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2 }
          ]
      },
      messager:{
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

  }
 
export let addPost = (message) => {
  let newPost = {
    id: 5,
    message: message,
    likesCounter: 12
    
  }
  state.profilePage.postsData.push(newPost);
  RenderEntireTree();
}
  export default state