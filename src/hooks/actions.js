import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { itemsActions } from "../store/slices/itemsSlice";

const actions = {
  ...itemsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
