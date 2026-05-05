"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "zh";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string, zh: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (en: string) => en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (en: string, zh: string) => (lang === "en" ? en : zh);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
