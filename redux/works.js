let init = {
  list: []
};
const changeTheNumber = (state = init, action) => {
  switch (action.type) {
    case "addd":
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    default:
      return state;
  }
};
export default changeTheNumber;
