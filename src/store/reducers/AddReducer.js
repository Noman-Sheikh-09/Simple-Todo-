export const intialState = {
  data : [],
};
 const AddReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, data } = action.payload;
      return {
        ...state,
        data: [
          ...state,
          data,
          {
            id: id,
            data: data,
          },
        ],
      };

    default: return state;
  }
};
export default AddReducer;
