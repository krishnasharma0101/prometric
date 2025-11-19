"use client";

import { FormEvent, useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? "Failed to send message");
      setStatus("success");
      setMessage("Thanks! Our team will be in touch within one business day.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to send message.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" placeholder="Full Name" required />
      <Input name="email" type="email" placeholder="Email Address" required />
      <Input name="phone" placeholder="Phone Number" />
      <Textarea
        name="message"
        placeholder="How can we help?"
        rows={5}
        required
      />
      <Button className="w-full" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Submit Message"}
      </Button>
      {message && (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-500" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

