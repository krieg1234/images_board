import { createAction } from 'redux-actions';
import getImages from '../functions/getImages';
import getModalImage from '../functions/getModalImage'
import addComment from '../functions/addComment'

export const getImagesListRequest = createAction('IMAGES_LIST_GET_REQUEST');
export const getImagesListSuccess = createAction('IMAGES_LIST_GET_SUCCESS');
export const getImagesListFailure = createAction('IMAGES_LIST_GET_FAILURE');

export const getImagesList = async (dispatch) => {
  dispatch(getImagesListRequest());
  try {
    const imagesList = await getImages();
    dispatch(getImagesListSuccess(imagesList));
  } catch (e) {
    dispatch(getImagesListFailure());
  }

};

export const showModalActionRequest = createAction('MODAL_SHOW_REQUEST');
export const showModalActionSuccess = createAction('MODAL_SHOW_SUCCESS');
export const showModalActionFailure = createAction('MODAL_SHOW_FAILURE');

export const showModalAction = ({ id }) => async (dispatch) => {
  dispatch(showModalActionRequest());
  try {
    const data = await getModalImage(id);
    dispatch(showModalActionSuccess({ ...data, id }))
  } catch (e) {
    dispatch(showModalActionFailure());
  }
}

export const hideModalAction = createAction('MODAL_HIDE_ACTION');

export const postCommentRequest = createAction('POST_COMMENT_REQUEST');
export const postCommentSuccess = createAction('POST_COMMENT_SUCCESS');
export const postCommentFailure = createAction('POST_COMMENT_FAILURE');

export const postComment = ({ id, userName, userComment }) => async (dispatch) => {
  dispatch(postCommentRequest());
  try {
    const { status } = await addComment(id, userName, userComment);
    console.log(`Код: ${status}, коммент не сохраняется по условиям работы сервера`);
    dispatch(postCommentSuccess({ id, userName, userComment }));

  } catch (e) {
    dispatch(postCommentFailure());
  }

};

