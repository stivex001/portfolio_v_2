
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function useActiveSection() {
  return useSelector((state: RootState) => state.section.section);
}