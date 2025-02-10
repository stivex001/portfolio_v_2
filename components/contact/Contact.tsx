import React from "react";
import Section from "../sections/Section";
import SectionHeader from "../sections/SectionHeader";
import SectionDescription from "../sections/SectionDescription";
import { ContactForm } from "./ContactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Section
      name="contact"
      id="contact"
      padding="pt-12 pb-16 md:py-8 md:pb-[160px]"
    >
      <SectionHeader>Contact Me</SectionHeader>
      <SectionDescription>
        You might want to develop a website, application or discuss anything
        related. Feel free to leave a message below
      </SectionDescription>
      <ContactForm />
    </Section>
  );
};

export default Contact;
