import React from "react";
import { ContactFormData } from "./props";

type Props = {};

export const ContactForm = (props: Props) => {
  const initialFormData: ContactFormData = { name: "", email: "", message: "" };

  return <div>ContactForm</div>;
};
