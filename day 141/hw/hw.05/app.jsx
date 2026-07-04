import { useState } from "react";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";

import todoIcon from "../assets/images/icon-todo.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import remindersIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";

function Navbar() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 py-6 lg:px-10">
        <div className="flex items-center gap-14">
          <img src={logo} alt="logo" />

          <ul className="hidden lg:flex items-center gap-8 text-gray-500 text-sm">
            <li className="relative">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center gap-2 hover:text-black"
              >
                Features
                <img
                  src={featuresOpen ? arrowUp : arrowDown}
                  alt=""
                />
              </button>

              {featuresOpen && (
                <div className="absolute top-10 -left-14 w-40 rounded-xl bg-white shadow-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={todoIcon} alt="" />
                    <p>Todo List</p>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <img src={calendarIcon} alt="" />
                    <p>Calendar</p>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <img src={remindersIcon} alt="" />
                    <p>Reminders</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={planningIcon} alt="" />
                    <p>Planning</p>
                  </div>
                </div>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className="flex items-center gap-2 hover:text-black"
              >
                Company
                <img
                  src={companyOpen ? arrowUp : arrowDown}
                  alt=""
                />
              </button>

              {companyOpen && (
                <div className="absolute top-10 left-0 w-32 rounded-xl bg-white shadow-xl p-5 space-y-3">
                  <p>History</p>
                  <p>Our Team</p>
                  <p>Blog</p>
                </div>
              )}
            </li>

            <li className="hover:text-black cursor-pointer">
              Careers
            </li>

            <li className="hover:text-black cursor-pointer">
              About
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button className="text-gray-500 hover:text-black">
            Login
          </button>

          <button className="border border-gray-500 px-5 py-2 rounded-xl hover:border-black">
            Register
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <img src={menuIcon} alt="" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-6">

            <div className="flex justify-end mb-10">
              <button onClick={() => setMobileOpen(false)}>
                <img src={closeIcon} alt="" />
              </button>
            </div>

            <div className="space-y-5">

              <details>
                <summary className="cursor-pointer">Features</summary>

                <div className="ml-5 mt-4 space-y-4 text-gray-500">
                  <div className="flex gap-3">
                    <img src={todoIcon} alt="" />
                    <p>Todo List</p>
                  </div>

                  <div className="flex gap-3">
                    <img src={calendarIcon} alt="" />
                    <p>Calendar</p>
                  </div>

                  <div className="flex gap-3">
                    <img src={remindersIcon} alt="" />
                    <p>Reminders</p>
                  </div>

                  <div className="flex gap-3">
                    <img src={planningIcon} alt="" />
                    <p>Planning</p>
                  </div>
                </div>
              </details>

              <details>
                <summary className="cursor-pointer">Company</summary>

                <div className="ml-5 mt-4 space-y-3 text-gray-500">
                  <p>History</p>
                  <p>Our Team</p>
                  <p>Blog</p>
                </div>
              </details>

              <p>Careers</p>
              <p>About</p>

              <button className="w-full mt-6">
                Login
              </button>

              <button className="w-full border rounded-xl py-3">
                Register
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;