"use client";

import React, { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = (props: Props) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!form.current) {
      console.error("Form ref is not assigned.");
      return;
    }


    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
        }
      )
      .then(
        (result) => {
          setSuccess(true);
          form?.current?.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.01,
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-transparent rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Stephen,</span>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-b-white outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-white outline-none "
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
