
import { a, useSpringRef, useTransition } from "@react-spring/web";
import { useEffect } from "react";
import Button from "../clickable/Button";
import Loading from "../svg/icons/Loading";
import PlaneIcon from "../svg/icons/PlaneIcon";
import { ContactFormSubmitButtonProps } from "./props";

export default function ContactFormSubmitButton({
  formSending,
  disabled,
}: ContactFormSubmitButtonProps) {
  const submitButtonStateTransRef = useSpringRef();
  const submitButtonStateTransition = useTransition(formSending, {
    ref: submitButtonStateTransRef,
    keys: null,
    from: {opacity: 0, x: formSending ? 0 : -8, scale: 0.9},
    enter: {opacity: 1, x: 0},
    leave: {opacity: 0, x: formSending ? 5 : 0, scale: 0.9},
    exitBeforeEnter: true,
  });
  useEffect(() => {
    submitButtonStateTransRef.start();
  }, [formSending]);

  return (
    <div className="flex justify-center mt-8 form-button">
      <Button variant="blue" disabled={disabled}>
        Send{" "}
        {submitButtonStateTransition((style, sending) => (
          <a.div style={style}>{sending ? <Loading /> : <PlaneIcon />}</a.div>
        ))}
      </Button>
    </div>
  );
}
