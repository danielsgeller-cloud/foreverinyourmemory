import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <nav className="bg-neutral-900 text-white">
            <div className="mx-auto max-w-6xl px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href={`/${locale}`} className="font-serif text-xl font-semibold hover:text-amber-400 transition">
                  {locale === 'ru' ? 'Навечно в Вашей Памяти' : locale === 'uk' ? 'Назавжди у Вашій Пам\'яті' : 'Forever In Your Memory'}
                </Link>
                <div className="flex gap-4 items-center">
                  <Link
                    href={`/${locale}/gallery`}
                    className="rounded-full border-2 border-amber-500 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-amber-400 transition hover:bg-amber-500 hover:text-black"
                  >
                    {locale === 'ru' ? 'Галерея' : locale === 'uk' ? 'Галерея' : 'Gallery'}
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-amber-400"
                  >
                    {locale === 'ru' ? 'Связаться с Нами' : locale === 'uk' ? 'Зв\'язатися з Нами' : 'Contact Us'}
                  </Link>
                  <LanguageSwitcher currentLocale={locale} />
                </div>
              </div>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
