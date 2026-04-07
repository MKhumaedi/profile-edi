"use client";
// @flow strict

import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbBrandWhatsapp } from "react-icons/tb";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendWhatsapp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    }

    if (!isValidEmail(userInput.email)) {
      setError({ ...error, email: true });
      return;
    }

    setError({ email: false, required: false });
    setIsLoading(true);

    // 🔥 GANTI NOMOR KAMU DI SINI
    const phoneNumber = "6281947996680";

    const text = `Halo, saya ${userInput.name}
Email: ${userInput.email}

${userInput.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setIsLoading(false);

    // reset form
    setUserInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>

      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, feel free to contact me via WhatsApp.
        </p>

        <div className="mt-6 flex flex-col gap-4">

          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label>Your Name:</label>
            <input
              className="bg-[#10172d] border rounded-md border-[#353a52] px-3 py-2"
              type="text"
              value={userInput.name}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label>Your Email:</label>
            <input
              className="bg-[#10172d] border rounded-md border-[#353a52] px-3 py-2"
              type="email"
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError({
                  ...error,
                  email: !isValidEmail(userInput.email),
                });
              }}
            />
            {error.email && (
              <p className="text-sm text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label>Your Message:</label>
            <textarea
              className="bg-[#10172d] border rounded-md border-[#353a52] px-3 py-2"
              rows={4}
              value={userInput.message}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
            />
          </div>

          {/* BUTTON */}
          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">
                All fields are required!
              </p>
            )}

            <button
              onClick={handleSendWhatsapp}
              disabled={isLoading}
              className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-white hover:bg-green-600 transition"
            >
              {isLoading ? (
                "Opening WhatsApp..."
              ) : (
                <>
                  Send via WhatsApp
                  <TbBrandWhatsapp size={20} />
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactForm;