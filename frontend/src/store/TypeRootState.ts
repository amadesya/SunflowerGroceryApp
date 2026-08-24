import type { store } from "./store";

export type TypeRootState = ReturnType<typeof store.getState>;
