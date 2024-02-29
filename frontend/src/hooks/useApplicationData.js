// hooks/useApplicationData.js
import { useReducer } from 'react';

// Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favouritePhotos: [],
  favouritePhotosCount: 0,
};

// Define the actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

// Implement the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload.id],
        favouritePhotosCount: state.favouritePhotosCount + 1,
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter(id => id !== action.payload.id),
        favouritePhotosCount: state.favouritePhotosCount - 1,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        similarPhotos: action.payload.photo.similar_photos,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        similarPhotos: action.payload.photo.similar_photos,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: true,
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
 }
}

// Implement the useApplicationData hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const toggleFavourite = (photoId) => {
    if (state.favouritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  return {
    state,
    actions: {
      openModal,
      closeModal,
      handlePhotoClick,
      toggleFavourite,
    },
  };
};

export default useApplicationData;