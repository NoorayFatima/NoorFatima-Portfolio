"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setStatus("loading");

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      formRef.current.reset();
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      className="space-y-8"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label
            className="font-label-caps text-label-caps text-on-surface"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="form-input-focus w-full rounded-lg border border-border bg-surface-dim px-4 py-3 font-body-md text-on-surface transition-all placeholder:text-text-muted focus:outline-none"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            type="text"
          />
        </div>

        <div className="space-y-2">
          <label
            className="font-label-caps text-label-caps text-on-surface"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="form-input-focus w-full rounded-lg border border-border bg-surface-dim px-4 py-3 font-body-md text-on-surface transition-all placeholder:text-text-muted focus:outline-none"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          className="font-label-caps text-label-caps text-on-surface"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          className="form-input-focus w-full rounded-lg border border-border bg-surface-dim px-4 py-3 font-body-md text-on-surface transition-all placeholder:text-text-muted focus:outline-none"
          id="subject"
          name="subject"
          placeholder="How can I help you?"
          required
          type="text"
        />
      </div>

      <div className="space-y-2">
        <label
          className="font-label-caps text-label-caps text-on-surface"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="form-input-focus w-full resize-none rounded-lg border border-border bg-surface-dim px-4 py-3 font-body-md text-on-surface transition-all placeholder:text-text-muted focus:outline-none"
          id="message"
          name="message"
          placeholder="Tell me about your project or inquiry..."
          required
          rows={5}
        />
      </div>

      <button
        className={`flex w-full items-center justify-center gap-3 rounded-lg px-10 py-4 text-body-md font-bold transition-all active:scale-[0.98] md:w-auto ${
          status === "success"
            ? "bg-success text-on-surface"
            : status === "error"
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-primary-container text-on-primary-container hover:bg-accent-hover"
        }`}
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" && (
          <>
            <MaterialIcon name="progress_activity" className="animate-spin" />
            <span>Sending...</span>
          </>
        )}

        {status === "success" && (
          <>
            <MaterialIcon name="check_circle" />
            <span>Message Sent</span>
          </>
        )}

        {status === "error" && (
          <>
            <MaterialIcon name="error" />
            <span>Failed to Send</span>
          </>
        )}

        {status === "idle" && (
          <>
            <span>Send Message</span>
            <MaterialIcon name="send" />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="text-sm text-success">
          Thank you, your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong while sending your message. Please try again.
        </p>
      )}
    </form>
  );
}