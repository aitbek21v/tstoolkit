import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBasket, IPhotos } from "../../types";
interface IBasketState {
  basket: IBasket[];
  quantity: number;
}
const initialState: IBasketState = {
  basket: [],
  quantity: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IPhotos>) => {
      const founPhoto = state.basket.find((el) => el.id === action.payload.id);
      if (founPhoto) {
        founPhoto.quantity++;
      } else {
        state.basket.push({
          id: action.payload.id,
          albumId: action.payload.albumId,
          title:action.payload.title,
          quantity:1,
          url:action.payload.url,
          thumbnailUrl:action.payload.thumbnailUrl
        });
      }
    },
  },
});

export default basketSlice.reducer;
export const { addToBasket } = basketSlice.actions;
