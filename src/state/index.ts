import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  theme: "dark" | "light" | undefined;
  changeTheme: () => void;
};

const store = (set: any) => ({
  theme: "dark",
  changeTheme: () =>
    set((state: any) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
});
const persistConfig = {
  name: "app-theme", // name of the item in the storage (must be unique) // (optional) by default, 'localStorage' is used
};

export const theState = create<Store>(persist(store, persistConfig));
