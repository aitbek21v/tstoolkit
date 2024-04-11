import axios from "axios";
import { AppDispatch } from "./../app/store";
import {
  photosFetchingError,
  photosFetchingSucsess,
  productSlice,
} from "./slices/productSlice";
import { IPhotos } from "../types";

export const fetchingPhotos = (limit: number, page: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.photosFetching());
      const response = await axios<IPhotos[]>(
        `https://jsonplaceholder.typicode.com/photos`,
        {
          params: { _limit: limit, _page: page },
        }
      );
      dispatch(photosFetchingSucsess(response.data));
    } catch (e: any) {
      dispatch(photosFetchingError(e.message));
    }
  };
};
