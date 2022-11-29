import { FETCH_POSTS, NEW_POST } from "../actions/types";

const inintialState = {
  items: [],
  item: {},
};

export default function (state = inintialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
