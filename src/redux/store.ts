import { createStore, combineReducers, compose } from "redux";
import { WorkExperiencesReducer } from "./workExperience/reducer";

const reducers = combineReducers({
    WorkExperiences: WorkExperiencesReducer
})

//@ts-ignore
const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers());

export type AppState = ReturnType<typeof reducers>;