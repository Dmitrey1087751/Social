import { combineReducers, legacy_createStore as createStore} from "redux"
import messagerReducer from "./messagerReducer";
import profileReducer from "./profileReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messager: messagerReducer
})
let store = createStore(redusers);

export default store