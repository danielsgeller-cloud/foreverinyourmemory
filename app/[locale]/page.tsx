import Image from "next/image";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');
  const tFooter = await getTranslations('footer');

  return (
    <main className="min-h-screen bg-white">
      {/* About Section */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-neutral-900 md:text-4xl">
                {t('about.title')}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-700">
                {t('about.paragraph1')}
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                {t('about.paragraph2')}
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-xl md:h-96">
              <Image
                src="/1000072571.jpg"
                alt={t('about.imageAlt')}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-3xl font-semibold text-neutral-900 md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-center text-neutral-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                {t('services.customMonuments.title')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t('services.customMonuments.description')}
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                {t('services.memorialPortraits.title')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t('services.memorialPortraits.description')}
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                {t('services.engraving.title')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t('services.engraving.description')}
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                {t('services.cemeteryServices.title')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t('services.cemeteryServices.description')}
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                {t('services.consultation.title')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t('services.consultation.description')}
              </p>
            </div>
          </div>

          <div className="mt-16 mx-auto max-w-md">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/FB_IMG_1707660593203.jpg"
                alt={t('services.servicesImageAlt')}
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/gallery`}
              className="inline-block rounded-full border-2 border-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-amber-600 transition hover:bg-amber-500 hover:text-white"
            >
              {t('services.viewGallery')}
            </Link>
          </div>
        </div>
      </section>

      {/* Serving States Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-8 font-serif text-2xl font-semibold text-neutral-800 md:text-3xl">
            Proudly Serving
          </h3>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg md:h-24 md:w-24">
                <span className="text-3xl font-bold text-white md:text-4xl">NJ</span>
              </div>
              <span className="mt-3 text-sm font-medium text-neutral-700 md:text-base">New Jersey</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg md:h-24 md:w-24">
                <span className="text-3xl font-bold text-white md:text-4xl">NY</span>
              </div>
              <span className="mt-3 text-sm font-medium text-neutral-700 md:text-base">New York</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg md:h-24 md:w-24">
                <span className="text-3xl font-bold text-white md:text-4xl">PA</span>
              </div>
              <span className="mt-3 text-sm font-medium text-neutral-700 md:text-base">Pennsylvania</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="/1000081828.jpg"
            alt={t('cta.imageAlt')}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-lg text-neutral-100">
            {t('cta.subtitle')}
          </p>
          <div className="mt-8">
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition hover:bg-amber-400"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 text-neutral-400">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-white">
              {tNav('siteName')}
            </h3>
            <p className="mt-2 text-sm">
              {tFooter('tagline')}
            </p>

            {/* Contact Information */}
            <div className="mt-6 space-y-2">
              <p className="text-sm">
                <a href="tel:7322976008" className="text-amber-500 hover:text-amber-400 transition">
                  (732) 297-6008
                </a>
              </p>
              <p className="text-sm">
                <a href="mailto:info@foreverinyourmemory.com" className="text-amber-500 hover:text-amber-400 transition">
                  info@foreverinyourmemory.com
                </a>
              </p>
            </div>

            <div className="mt-6">
              <Link
                href={`/${locale}/contact`}
                className="text-amber-500 hover:text-amber-400 transition"
              >
                {tNav('contact')}
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} {tFooter('copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
