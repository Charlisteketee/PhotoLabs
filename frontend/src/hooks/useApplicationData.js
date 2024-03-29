import { useReducer, useEffect } from 'react';
import axios from 'axios';

// Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  selectedTopic: null,
  similarPhotos: [],
  favouritePhotos: [],
  favouritePhotosCount: 0,
  photoData: [],
  topicData: [],
  error: null,
  darkMode: false,
};

// Define the actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_ERROR: 'SET_ERROR',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
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
        photoData: action.payload.photoData,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.topicData,
      };
    case ACTIONS.SELECT_PHOTO:
      const photo = state.photoData.find((photo) => action.payload.photo.id === photo.id);
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: photo,
        similarPhotos: photo.similar_photos,
      };
    case ACTIONS.SET_SELECTED_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload.topic,
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
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case ACTIONS.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
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

  const fetchPhotosByTopic = () => {
    console.log("State: selected topic:", state.selectedTopic);
    if (state.selectedTopic) {
      axios.get(`/api/topics/photos/${state.selectedTopic}`)
        .then(response => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData: response.data } });
        })
        .catch(error => {
          console.error('Error fetching photos by topic:', error);
          dispatch({ type: ACTIONS.SET_ERROR, payload: { error: 'An error occurred while fetching photos.' } });
        });
    }
  };

  const handleTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topic: topicId } });
    fetchPhotosByTopic(); // Fetch photos for the selected topic
  };

  const toggleDarkMode = () => {
    dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
  };

  useEffect(() => {
    const photoPromise = axios.get('/api/photos')
    const topicPromise = axios.get('/api/topics')

    // Use Promise.all to wait for both requests to complete
    Promise.all([photoPromise, topicPromise])
      .then(([photoResponse, topicResponse]) => {
        // Dispatch actions to set photo and topic data in the state
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData: photoResponse.data } });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicData: topicResponse.data } });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        dispatch({ type: ACTIONS.SET_ERROR, payload: { error: 'An error occurred while fetching data.' } });
      });
  }, []); // Empty dependency array ensures this runs once on mount
  
  return {
    state,
    actions: {
      openModal,
      closeModal,
      handlePhotoClick,
      toggleFavourite,
      handleTopicClick,
      toggleDarkMode,
    },
  };
};

export default useApplicationData;