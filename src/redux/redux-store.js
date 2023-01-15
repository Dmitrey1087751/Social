import { combineReducers, legacy_createStore as createStore} from "redux"
import messagerReducer from "./messagerReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messager: messagerReducer,
    usersPage: usersReducer
})
let store = createStore(redusers);

export default store