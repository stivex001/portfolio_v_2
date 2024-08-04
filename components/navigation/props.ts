
import { LegacyRef } from "react";
import { AnchorName } from "../data/navigation";

export type SubmenuProps<T> = {
  name: AnchorName;
  anchors: T[];
  open: boolean;
  setOpen: Function;
  submenuItemRef: LegacyRef<HTMLAnchorElement>; 
}