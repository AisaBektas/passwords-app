import { useContext } from "react";
import { AllColumnsContext } from "../context/AllColumnsContext";

export const useAllColumns = () => useContext(AllColumnsContext);
