"use client";

import React, { useEffect } from "react";

type ServerClosedModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

const ServerClosedModal = ({
  isOpen,
  onClose,
  title = "Server Status",
  message = "The server has been closed permanently.",
}: ServerClosedModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b15] p-6 text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-gray-300 hover:text-white"
            onClick={onClose}
            aria-label="Close dialog"
            autoFocus
          >
            X
          </button>
        </div>
        <p className="mt-4 text-gray-300">{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="button-primary rounded-lg px-4 py-2 text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerClosedModal;
