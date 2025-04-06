import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

export const store = createStore(counterReducer)
export type Rootstate = ReturnType<typeof store.getState>