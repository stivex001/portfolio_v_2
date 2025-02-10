import { ContactFormState } from "@/components/contact/props";
import { create } from "zustand";

type ContactFormStore = {
  formState: ContactFormState;
  setFormState: (type: keyof ContactFormState, value: "empty" | "error" | "typing" | "success" | "loading") => void;
};

const useContactFormStore = create<ContactFormStore>((set) => ({
  formState: {
    name: "empty",
    email: "empty",
    message: "empty",
  },
  setFormState: (field, value) =>
    set((state) => ({
      formState: { ...state.formState, [field]: value },
    })),
}));

export default useContactFormStore;
