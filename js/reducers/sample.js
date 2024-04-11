import { UPDATE_SOMETHING, HAS_CLICKED, LOADED_DATA } from "@js/actions/sample";
function sample(state = { text: 1, hasClicked: false, data: null }, action) {
  switch (action.type) {
    case UPDATE_SOMETHING:
      return {
        ...state,
        text: state.text + 1,
      };

    case LOADED_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case HAS_CLICKED:
      return {
        ...state,
        hasClicked: true,
      };
    default:
      return state;
  }
}
export default sample;
