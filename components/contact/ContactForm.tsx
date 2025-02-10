"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ContactFormData,
  ContactFormInputName,
  ContactFormInputState,
} from "./props";
import { a, to, useSpring } from "@react-spring/web";
import {
  FormValidationError,
  validateEmail,
  validateMessage,
  validateName,
  verifyEmail,
} from "@/utils/validation";
import { useObservedSprings } from "@/utils/useObservedSpring";
import animation from "../animations/animations";
import ContactFormInput from "./ContactFormInput";
import useContactFormStore from "@/store/contactStore";
import ContactFormSubmitButton from "./ContactFormSubmitButton";
import ContactFormSuccessModal from "./ContactFormSuccessModal";

type Props = {};

export const ContactForm = (props: Props) => {
  const initialFormData: ContactFormData = { name: "", email: "", message: "" };
  const { formState, setFormState } = useContactFormStore();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formSending, setFormSending] = useState<boolean>(false);
  const [error, setError] = useState<FormValidationError | null>(null);
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false);
  const isSubmitDisabled = useMemo(handleSubmitDisabled, [formState]);
  const areInputsDisabled = useMemo(handleInputsDisabled, [formState]);
  useEffect(processInputChange, [formData]);

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function processInputChange() {
    (["name", "email", "message"] as const).forEach((input) => {
      const inputValue = formData[input];

      if (inputValue.trim()) {
        setFormState(input, "typing"); // Update Zustand store
      } else {
        setFormState(input, "empty"); // Update Zustand store
      }
    });
  }

  function handleSubmitDisabled() {
    const inputStates: Array<ContactFormInputState> = [
      formState.name,
      formState.email,
      formState.message,
    ];

    const submitDisabledStates = new Set<ContactFormInputState>([
      "empty",
      "loading",
    ]);
    const submitDisabled = inputStates.some((state) =>
      submitDisabledStates.has(state)
    );
    return submitDisabled;
  }

  function handleInputsDisabled() {
    const inputStates: Array<ContactFormInputState> = [
      formState.name,
      formState.email,
      formState.message,
    ];

    const inputsDisabledStates = new Set<ContactFormInputState>(["loading"]);
    const inputsDisabled = inputStates.some((state) =>
      inputsDisabledStates.has(state)
    );
    return inputsDisabled;
  }

  function handleError(name: ContactFormInputName, error: FormValidationError) {
    setFormState(name, "error"); // Zustand state update
    setError(error);
    setFormSending(false);
  }


  function clearFormData() {
    setFormData(initialFormData);
  }

  async function sendFormData() {
    const API_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_API_URL!;

    const formSubmissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formSubmissionData.append(key, value)
    );

    const fetchOptions = {
      method: "POST",
      body: formSubmissionData,
      headers: {
        Accept: "application/json",
      },
    };

    try {
      await fetch(API_URL, fetchOptions);
      clearFormData();
      setFormSending(false);
      setSuccessModalOpen(true);
    } catch (err) {
      setFormSending(false);
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSending(true);
    const { name, email, message } = formData;

    const isNameValidated = validateName(name);
    if (isNameValidated.error) {
      handleError("name", isNameValidated.error);
      return;
    }

    const isEmailValidated = validateEmail(email);
    if (isEmailValidated.error) {
      handleError("email", isEmailValidated.error);
      return;
    }

    const isMessageVerified = validateMessage(message);
    if (isMessageVerified.error) {
      handleError("message", isMessageVerified.error);
      return;
    }
    setFormState("email", "loading");
    const isEmailVerified = await verifyEmail(email);
    if (isEmailVerified.error) {
      handleError("email", isEmailVerified.error);
      return;
    } else {
      setFormState("email", "success");
    }
    await sendFormData();
    setError(null);
  };

  // Reveal animation
  const {
    observedRef,
    springAnimate: [layoutTransformSpring, layoutOpacitySpring],
  } = useObservedSprings(
    [...animation.layout.revealSlow.start],
    [...animation.layout.revealSlow.end.map((x) => x())],
    [useSpring, useSpring]
  );

  return (
    <div className="form-container mx-auto max-w-[512px] w-full mt-4 md:mt-6">
      <a.form
        className="grid"
        onSubmit={handleSubmit}
        ref={observedRef}
        style={{
          transform: to(layoutTransformSpring.y, (y) => `translateY(${y}px)`),
          opacity: to(layoutOpacitySpring.opacity, (op: number) => `${op}`),
        }}
      >
        <ContactFormInput
          id="contact-form/name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          maxLength={100}
          state={formState.name}
          error={error}
          disabled={areInputsDisabled}
          required
        >
          Name
        </ContactFormInput>
        <ContactFormInput
          id="contact-form/email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          maxLength={320}
          state={formState.email}
          error={error}
          disabled={areInputsDisabled}
          required
        >
          Email
        </ContactFormInput>
        <ContactFormInput
          id="contact-form/message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          type="textarea"
          maxLength={1500}
          state={formState.message}
          error={error}
          disabled={areInputsDisabled}
          required
        >
          Message
        </ContactFormInput>
        <ContactFormSubmitButton
          formSending={formSending}
          disabled={isSubmitDisabled}
        />
      </a.form>
      <ContactFormSuccessModal
        open={successModalOpen}
        setOpen={setSuccessModalOpen}
      />
    </div>
  );
};
