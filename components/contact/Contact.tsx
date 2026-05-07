import React from "react";
import Section from "../sections/Section";
import ContactCTA from "./ContactCTA";

const Contact = () => {
  return (
    <Section
      name="contact"
      id="contact"
      padding="pt-12 pb-16 md:py-8 md:pb-[160px]"
    >
      <ContactCTA />
    </Section>
  );
};

export default Contact;
