import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const defaultStatus = {
  isImageListLoading: false,
  isModalLoading: false,
  isCommentPosting: false,
}

const status = handleActions({
  [actions.getImagesListRequest]: (state) => {
    return { ...state, imageListLoading: true }
  },
  [actions.showModalActionRequest]: (state) => {
    return { ...state, modalLoading: true }
  },
  [actions.postCommentRequest]: (state) => {
    return { ...state, commentPosting: true }
  },

  [actions.getImagesListSuccess]: (state) => {
    return { ...state, imageListLoading: false }
  },
  [actions.showModalActionSuccess]: (state) => {
    return { ...state, modalLoading: false }
  },
  [actions.getImagesListSuccess]: (state) => {
    return { ...state, commentPosting: false }
  },
}, defaultStatus);

export default status;