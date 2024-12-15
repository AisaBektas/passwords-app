import { useContext } from "react";
import { AllPasswordsContext } from "../context/AllPasswordsContext";

export const useAllPasswords = () => useContext(AllPasswordsContext);
