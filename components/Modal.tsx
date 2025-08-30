"use client";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  describedById?: string;

  /** Optional: element to receive initial focus (e.g., your input). */
  initialFocusRef?: React.RefObject<HTMLElement>;
};

// Prevent body scroll when modal is open
function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

export function Modal({
  open,
  onClose,
  title,
  children,
  size = "md",
  closeOnOverlayClick = true,
  showCloseButton = true,
  describedById,
  initialFocusRef, // <-- NEW
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Trap focus inside the modal
  useEffect(() => {
    if (!open) return;
    const el = containerRef.current;
    if (!el) return;

    const focusables = el.querySelectorAll<HTMLElement>(
      [
        "a[href]",
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input:not([type='hidden']):not([disabled])",
        "select:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
      ].join(",")
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    // Only set initial focus if nothing inside is focused already
    const activeInside = document.activeElement && el.contains(document.activeElement);
    if (!activeInside) {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus?.();
      } else {
        first?.focus?.();
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && focusables.length > 0) {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            (last ?? first)?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            (first ?? last)?.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, initialFocusRef]);

  useLockBodyScroll(open);

  const handleOverlay = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!closeOnOverlayClick) return;
      if (e.target === e.currentTarget) onClose();
    },
    [closeOnOverlayClick, onClose]
  );

  const portalTarget = typeof window !== "undefined" ? document.body : null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] h-[95vh]",
  }[size];

  const role = "dialog";
  const labelledById = title ? "modal-title" : undefined;

  const modal = (
    <AnimatePresence>
      {open && (
        <div aria-live="assertive">
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={handleOverlay}
          />

          {/* Dialog */}
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={containerRef}
              className={`w-full ${sizeClasses} rounded-2xl bg-white shadow-2xl border border-gray-100 ${
                size === "full" ? "h-full" : ""
              }`}
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              role={role}
              aria-modal="true"
              aria-labelledby={labelledById}
              aria-describedby={describedById}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between gap-4 p-4 border-b bg-gray-50/60 rounded-t-2xl">
                  <h2 id={labelledById} className="text-lg font-semibold text-gray-900">
                    {title}
                  </h2>
                  {showCloseButton && (
                    <button
                      // ⬅️ removed ref that hijacked focus
                      onClick={onClose}
                      className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-2.5 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring focus:ring-primary-300"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  )}
                </div>
              )}

              {/* Body */}
              <div className={`p-4 ${size === "full" ? "overflow-auto h-[calc(95vh-5rem)]" : ""}`}>
                {children}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!portalTarget) return null;
  return createPortal(modal, portalTarget);
}