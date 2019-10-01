import { combineReducers } from 'redux';
import ReducerPosts from './reducerPost';
import ReducerActivePost from './reducerActivePost';
import {reducer as Reducerform} from 'redux-form'

const rootReducer = combineReducers({
  posts : ReducerPosts,
  activePost : ReducerActivePost,
  form : Reducerform
});

export default rootReducer;
