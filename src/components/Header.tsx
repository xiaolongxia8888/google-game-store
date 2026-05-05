"use client";

import React, { useState } from "react";
import { useLang } from "@/lib/lang";
import { Globe } from "lucide-react";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              Google<span className="text-blue-600">Game</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {t("Home", "首页")}
            </a>
            <a href="/#categories" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {t("Categories", "分类")}
            </a>
            <a href="/#products" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {t("Products", "产品")}
            </a>
            <a href="/#about" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {t("About", "关于")}
            </a>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-400 transition"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "en" ? "中文" : "EN"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenu && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              <a href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">{t("Home", "首页")}</a>
              <a href="/#categories" className="text-gray-600 hover:text-gray-900 text-sm font-medium">{t("Categories", "分类")}</a>
              <a href="/#products" className="text-gray-600 hover:text-gray-900 text-sm font-medium">{t("Products", "产品")}</a>
              <a href="/#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">{t("About", "关于")}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
