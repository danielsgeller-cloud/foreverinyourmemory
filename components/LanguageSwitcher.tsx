'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border-2 border-amber-500 px-4 py-2 text-sm font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`flex w-full items-center gap-3 px-4 py-2 text-sm transition hover:bg-neutral-700 ${
                  lang.code === currentLocale ? 'bg-neutral-700 text-amber-400' : 'text-white'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
