import { handleActions } from 'redux-actions';

import * as actions from '../actions/actions';

const defaultImages = {
  byId: {},
  allImages: [],
};

const images = handleActions({
  [actions.getImagesListSuccess]: (state, { payload }) => {
    const newById = payload.reduce((acc, { id, url }) => {
      return {
        ...acc,
        [id]: url,
      };
    }, {});
    const newAllImages = Object.keys(newById);

    return {
      ...state,
      byId: newById,
      allImages: newAllImages,
    }
  },
  [actions.getImagesListFailure]: () => { //NOTICE: перенеси в статус запроса
    console.log('ALARM!');
    return defaultImages;
  },
  [actions.getImagesListRequest]: () => { //NOTICE: перенеси в статус запроса
    console.log('wait...');
    return defaultImages;
  },
}, defaultImages);

export default images;