import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/field-sunset-wide.jpg"
            alt="Memorial landscape at sunset"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-7xl">
              Forever In Your Memory
            </h1>
            <p className="mt-6 text-lg text-neutral-100 md:text-xl">
              Honoring Lives, Preserving Legacies
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-base text-neutral-200">
              We are dedicated to helping families create beautiful, lasting memorials
              that celebrate the lives of their loved ones.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition hover:bg-amber-400"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-neutral-900 md:text-4xl">
                Creating Lasting Tributes
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-700">
                For over three decades, Forever In Your Memory has been serving families
                with compassion and dedication. We understand that selecting a memorial
                is one of the most important decisions you'll make in honoring a loved one.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                Our experienced team works closely with you to create personalized monuments
                that reflect the unique life and legacy of those you cherish. From traditional
                headstones to custom designs, we ensure every detail meets your vision.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-xl md:h-96">
              <Image
                src="/contact-headstone-flowers.jpg"
                alt="Memorial with flowers"
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
            Our Services
          </h2>
          <p className="mt-4 text-center text-neutral-600 max-w-2xl mx-auto">
            We offer a comprehensive range of memorial products and services to honor your loved ones
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Custom Monuments
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Personalized granite and marble monuments designed to your specifications,
                from traditional upright headstones to flat markers and more.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Memorial Portraits
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                High-quality ceramic photo medallions that preserve cherished memories
                with lasting durability for outdoor installation.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Engraving & Design
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Expert engraving services including inscriptions, artwork, religious symbols,
                and custom designs to personalize your memorial.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Monument Cleaning
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Professional cleaning and restoration services to maintain the beauty
                and integrity of existing memorials.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Cemetery Services
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Installation coordination and cemetery plot services to ensure proper
                placement and compliance with cemetery regulations.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Consultation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Compassionate guidance through the selection process, helping you
                choose the perfect memorial within your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="/field-hero.jpg"
            alt="Peaceful memorial landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Let Us Help You Honor Your Loved One
          </h2>
          <p className="mt-4 text-lg text-neutral-100">
            Our caring team is here to guide you through every step of creating
            a beautiful and lasting memorial.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition hover:bg-amber-400"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 text-neutral-400">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-white">
              Forever In Your Memory
            </h3>
            <p className="mt-2 text-sm">
              Serving families with compassion and dedication
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-amber-500 hover:text-amber-400 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Forever In Your Memory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
