import { UPDATE_ME } from "@js/actions/buttonTest";
function buttonTest(state = { hasClicked: false }, action) {
  switch (action.type) {
    case UPDATE_ME:
      return {
        ...state,
        hasClicked: true,
      };

    default:
      return state;
  }
}
export default buttonTest;
