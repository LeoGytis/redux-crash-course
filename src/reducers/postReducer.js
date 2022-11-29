import { FETCH_POSTS, NEW_POST } from "../actions/types";

const inintialState = {
  items: [],
  item: {},
};

export default function (state = inintialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
