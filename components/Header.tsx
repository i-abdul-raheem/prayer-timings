"use client";
import Link from "next/link";
import { Modal } from "./Modal";
import { useRef, useState, useEffect, useCallback } from "react";

export const Header = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [openCity, setOpenCity] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [addCityForm, setAddCityForm] = useState({ country: "", city: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAddCityForm((prev) => ({ ...prev, [name]: value }));
  };

  // lock body scroll when drawer is open
  useEffect(() => {
    const orig = document.body.style.overflow;
    if (drawerOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen((v) => !v), []);

  // close drawer on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    if (drawerOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);
  return (
    <>
      {/* Top Bar */}
      <section className="fixed top-0 left-0 right-0 py-4 px-4 z-50 bg-white/95 border-b backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex w-full max-w-7xl items-center justify-between gap-3">
            {/* Hamburger (mobile) */}
            <Link href={"/"} className="text-gradient text-2xl font-bold">
              Prayer Times
            </Link>

            <button
              onClick={toggleDrawer}
              className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700"
              aria-label="Open menu"
              aria-controls="mobile-drawer"
              aria-expanded={drawerOpen}
            >
              {/* bars icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex w-full text-xs items-center justify-end gap-8 uppercase">
            <Link
              href={"/"}
              className="text-primary-600 hover:text-primary-700"
            >
              Home
            </Link>
            <Link
              href={"/#why-us"}
              className="text-primary-600 hover:text-primary-700"
            >
              Why choose us?
            </Link>
            <button
              onClick={() => setOpenCity(true)}
              className="text-primary-600 hover:text-primary-700"
            >
              Add City
            </button>
            <Link
              href={"/#contact-us"}
              className="text-primary-600 hover:text-primary-700"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </section>

      {/* Mobile drawer + overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          drawerOpen ? "" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Drawer */}
        <aside
          id="mobile-drawer"
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white border-r shadow-xl transform transition-transform
            ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="p-4 border-b flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={closeDrawer}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="p-4 flex flex-col gap-2 text-sm">
            <Link
              onClick={closeDrawer}
              href={"/"}
              className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800"
            >
              Home
            </Link>
            <Link
              onClick={closeDrawer}
              href={"/#why-us"}
              className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800"
            >
              Why choose us?
            </Link>
            <button
              onClick={() => {
                closeDrawer();
                setOpenCity(true);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800"
            >
              Add City
            </button>
            <Link
              onClick={closeDrawer}
              href={"/"}
              className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800"
            >
              Contact Us
            </Link>
          </nav>
        </aside>
      </div>

      {/* Spacer so content isn't under the fixed bar */}
      <div className="h-[64px]" />
      <Modal
        open={openCity}
        onClose={() => setOpenCity(false)}
        title="Add City"
        size="lg"
        initialFocusRef={inputRef}
      >
        <div className="flex flex-col items-center justify-start gap-4">
          <select
            className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200 bg-white shadow-lg"
            name="country"
            id="add-city-country"
            value={addCityForm.country}
            onChange={handleChange}
          >
            <option value="">Select country...</option>
          </select>
          <input
            ref={inputRef}
            className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200 bg-white shadow-lg"
            type="text"
            name="city"
            placeholder="Enter city name..."
            value={addCityForm.city}
            onChange={handleChange}
            id="add-city-city"
          />
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button className="btn-secondary" onClick={() => setOpenCity(false)}>
            Cancel
          </button>
          <button className="btn-primary" onClick={() => alert("Saved!")}>
            Send Request
          </button>
        </div>
      </Modal>
    </>
  );
};
