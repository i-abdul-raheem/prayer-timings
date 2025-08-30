"use client";
import Link from "next/link";
import { Modal } from "./Modal";
import { useRef, useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [addCityForm, setAddCityForm] = useState({ country: "", city: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAddCityForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <section className="fixed py-4 px-4 text-center w-screen z-50 bg-white border-b-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-gradient text-2xl font-bold">Prayer Times</span>
          <nav className="flex text-xs items-center justify-end gap-8 uppercase">
            <Link href={"/"} className="text-primary-600">
              Home
            </Link>
            <Link href={"/#why-us"} className="text-primary-600">
              Why choose us?
            </Link>
            <span onClick={() => setOpen(true)} className="text-primary-600">
              Add City
            </span>
            <Link href={"/"} className="text-primary-600">
              Contact Us
            </Link>
          </nav>
        </div>
      </section>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
          <button className="btn-secondary" onClick={() => setOpen(false)}>
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
