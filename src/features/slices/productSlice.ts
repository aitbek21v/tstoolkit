import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPhotos } from "../../types";

interface IPhotosState {
  photos: IPhotos[];
  loader: boolean;
  error: string;
  limit: number;
  page: number;
}
const initialState: IPhotosState = {
  photos: [],
  loader: false,
  error: "",
  limit: 6,
  page: 1,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    photosFetching: (state) => {
      state.loader = true;
    },
    photosFetchingSucsess: (state, action: PayloadAction<IPhotos[]>) => {
      state.loader = false;
      state.photos = action.payload;
      state.error = "";
    },
    photosFetchingError: (state, action: PayloadAction<string>) => {
      state.loader = false;
      state.photos = [];
      state.error = action.payload;
    },
    setPhotosPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {
  photosFetching,
  photosFetchingError,
  photosFetchingSucsess,
  setPhotosPage,
} = productSlice.actions;
