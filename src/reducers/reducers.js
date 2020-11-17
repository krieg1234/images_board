import { combineReducers } from 'redux';
import images from './images';
import modalContent from './modal'
import status from './status'



export default combineReducers({
  images,
  modalContent,
  status,
});