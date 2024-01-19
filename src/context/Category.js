import { useContext, createContext } from "react";

export const CategoryContext = createContext({
  category: "",
});

export const CategoryProvider = CategoryContext.Provider;

export default function useCategory() {
  return useContext(CategoryContext);
}
