import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer */}
      <div className="mx-auto px-6 py-6 sm:px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="h-6 w-auto object-contain"
            />

            <p className="mt-3 max-w-xs text-[9px] leading-[1.6] text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-1 text-[8px] font-medium text-slate-600 transition hover:text-slate-900"
              >
                <FaGithub className="text-[10px]" />
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-1 text-[8px] font-medium text-slate-600 transition hover:text-slate-900"
              >
                <FaTwitter className="text-[10px]" />
                Twitter
              </a>

              <a
                href="#"
                className="flex items-center gap-1 text-[8px] font-medium text-slate-600 transition hover:text-slate-900"
              >
                <FaLinkedinIn className="text-[10px]" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                Home
              </a>

              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                About
              </a>

              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[8px] text-slate-500 transition hover:text-slate-900"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 border-t border-slate-100 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[8px] text-slate-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-4 mr-20">
              <a
                href="#"
                className="text-[8px] text-slate-400 transition hover:text-slate-700"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-[8px] text-slate-400 transition hover:text-slate-700"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
