import { DISABLE_DIALOG, ENABLE_DIALOG } from "@js/actions/sidePanel";
function dialog(
  state = {
    isDialogOpen: false,
    content: null,
  },
  action
) {
  switch (action.type) {
    case DISABLE_DIALOG:
      return {
        ...state,
        isDialogOpen: false,
        content: null,
      };

    case ENABLE_DIALOG:
      return {
        ...state,
        isDialogOpen: true,
        content: action.payload,
      };

    default:
      return state;
  }
}
export default dialog;
