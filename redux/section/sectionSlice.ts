import { AnchorName } from "@/components/data/navigation";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SectionState {
  section: "unmounted" | AnchorName;
}

const initialState: SectionState = {
  section: "unmounted",
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<SectionState["section"]>) => {
      state.section = action.payload;
    },
  },
});

export const {update} = sectionSlice.actions
export default sectionSlice.reducer