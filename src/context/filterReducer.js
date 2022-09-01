export const initialState = {
  brand: [],
  size: [],
  gender: []
};

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "BRAND":
      return {
        ...state,
        brand: [...state.brand, payload]
      };
    case "SIZE":
      return {
        ...state,
        brand: [...state.size, payload]
      };
    case "GENDER":
      return {
        ...state,
        brand: [...state.gender, payload]
      };
    case "CLEAR_FILTER":
      return initialState;
    default:
      return initialState;
  }
};
