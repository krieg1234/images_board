import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';
import * as _ from 'lodash';

const defaultModalContent = {
  showModal: false,
  id: '',
  modalImgUrl: '',
  comments: [],
}

const modalContent = handleActions({
  [actions.showModalActionSuccess]: (state, { payload }) => {
    const { url, comments, id } = payload;

    return {
      ...state,
      id,
      showModal: true,
      modalImgUrl: url,
      comments
    }
  },
  [actions.showModalActionFailure]: (state) => {
    console.log('modal fail');
    return state;
  },
  [actions.hideModalAction]: (state) => {
    return {
      ...state,
      showModal: false,
    }
  },
  [actions.postCommentSuccess]: (state, { payload }) => {
    const { userName, userComment } = payload;
    const newComments = [...state.comments, {
      date: Date.parse(String(new Date())),
      text: userComment,
      id: _.uniqueId(),
    }];
    console.log(newComments);
    return { ...state, comments: newComments };
  }
}, defaultModalContent);

export default modalContent;