"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error?.message || "Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/field-soft-repeat.jpg"
            alt="Contact us"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-neutral-100">
              We're here to help you honor your loved one
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-lg bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-center font-serif text-3xl font-semibold text-neutral-900">
              Get In Touch
            </h2>
            <p className="mt-4 text-center text-neutral-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            {status === "success" && (
              <div className="mt-6 rounded-lg border border-green-300 bg-green-50 p-4">
                <p className="text-center font-semibold text-green-900">
                  Thank you for contacting us!
                </p>
                <p className="mt-1 text-center text-sm text-green-800">
                  We've received your message and will respond shortly.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4">
                <p className="text-center font-semibold text-red-900">
                  Error
                </p>
                <p className="mt-1 text-center text-sm text-red-800">
                  {errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-block rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <svg
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">Email Us</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Email address will be provided soon
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <svg
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">Call Us</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Phone number will be provided soon
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <svg
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">Hours</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: By Appointment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-white py-12">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 transition"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 text-neutral-400">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-white">
              Forever In Your Memory
            </h3>
            <p className="mt-2 text-sm">
              Serving families with compassion and dedication
            </p>
          </div>
          <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Forever In Your Memory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
