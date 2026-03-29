import Image from "next/image";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export default async function Gallery({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('gallery');
  const tNav = await getTranslations('nav');
  const tFooter = await getTranslations('footer');

  const monuments = [
    {
      src: "/1000072571.jpg",
      alt: "REZNIK memorial - Custom double monument with portrait engravings",
    },
    {
      src: "/1000072575.jpg",
      alt: "BRUKHMAN memorial - Traditional Jewish headstone with Star of David",
    },
    {
      src: "/1000073589.png",
      alt: "GRINSHPON memorial - Compact memorial with menorah design",
    },
    {
      src: "/1000073654.jpg",
      alt: "Gray granite monument in peaceful field setting",
    },
    {
      src: "/1000073655.jpg",
      alt: "RAVIKOVICH memorial - Elegant black granite double monument",
    },
    {
      src: "/1000073739.png",
      alt: "Custom shaped memorial design - Blue-gray marble",
    },
    {
      src: "/1000074775.jpg",
      alt: "SONYA GELLER memorial - Black granite with portrait and floral engraving",
    },
    {
      src: "/1000075096.jpg",
      alt: "ROCK memorial - White marble family monument",
    },
    {
      src: "/1000081826.jpg",
      alt: "Customizable monument template - Any Word design",
    },
    {
      src: "/1000081828.jpg",
      alt: "Black granite monument in natural setting",
    },
    {
      src: "/IMG_20240424_150131.jpg",
      alt: "REZNIK memorial monument in cemetery",
    },
    {
      src: "/1000073742.webp",
      alt: "Memorial design example",
    },
    {
      src: "/1000074782.jpg",
      alt: "Memorial monument example",
    },
    {
      src: "/1000081827.jpg",
      alt: "Monument design showcase",
    },
    {
      src: "/1000081829.jpg",
      alt: "Custom memorial example",
    },
    {
      src: "/FB_IMG_1707660593203.jpg",
      alt: "Memorial work example",
    },
    {
      src: "/FB_IMG_1771543197743.jpg",
      alt: "Monument craftsmanship showcase",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-neutral-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href={`/${locale}`}
            className="mb-6 inline-block text-amber-500 hover:text-amber-400 transition"
          >
            ← {t('backToHome')}
          </Link>
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-3xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {monuments.map((monument, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-neutral-100 shadow-md transition hover:shadow-xl"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={monument.src}
                    alt={monument.alt}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 md:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-neutral-700">
            {t('cta.subtitle')}
          </p>
          <div className="mt-8">
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition hover:bg-amber-400"
            >
              {tNav('contact')}
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
                <a
                  href="tel:7322976008"
                  className="text-amber-500 hover:text-amber-400 transition"
                >
                  (732) 297-6008
                </a>
              </p>
              <p className="text-sm">
                <a
                  href="mailto:info@foreverinyourmemory.com"
                  className="text-amber-500 hover:text-amber-400 transition"
                >
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
            <p>
              &copy; {new Date().getFullYear()} {tFooter('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
