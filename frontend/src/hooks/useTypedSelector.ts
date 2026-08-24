import { TypedUseSelectorHook, useSelector } from "react-redux";

import { TypeRootState } from "../store/TypeRootState";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
