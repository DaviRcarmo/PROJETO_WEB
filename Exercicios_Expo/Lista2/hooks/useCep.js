import { useContext } from "react";
import { CepContext } from "../contexts/CepContext";

export function useCep() {
  return useContext(CepContext);
}