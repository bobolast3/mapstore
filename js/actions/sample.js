export const UPDATE_SOMETHING = "SAMPLE:UPDATE_SOMETHING";
export const HAS_CLICKED = "HAS_CLICKED";

export const updateSomething = (payload) => ({
  type: UPDATE_SOMETHING,
  payload,
});

export const updateHasClicked = () => ({ type: HAS_CLICKED });
