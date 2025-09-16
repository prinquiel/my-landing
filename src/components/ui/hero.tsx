import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type HeroData = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cta?: { label?: string; href?: string };
  image?: unknown;
};

const FALLBACK: Required<HeroData> = {
  eyebrow: "Welcome",
  title: "We build fast, beautiful products.",
  subtitle: "From landing pages to full systems—shipped with care.",
  cta: { label: "Get started", href: "#" },
  image: undefined,
};

export function Hero({ data }: { data?: HeroData | null }) {
  const v = { ...FALLBACK, ...(data || {}) };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        {v.eyebrow && <p className="text-sm uppercase tracking-widest opacity-70">{v.eyebrow}</p>}
        <h1 className="mt-2 text-4xl font-bold">{v.title}</h1>
        <p className="mt-4 text-lg opacity-80">{v.subtitle}</p>
        {v.cta?.label && (
          <a href={v.cta.href || "#"} className="inline-block mt-6 rounded-xl px-5 py-3 bg-black text-white">
            {v.cta.label}
          </a>
        )}
      </div>
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100">
        {v.image ? (
          // Render Sanity image
          <Image
            src={urlFor(v.image).width(1400).height(788).url()}
            alt={v.title || "Hero"}
            fill
            className="object-cover"
          />
        ) : (
          // Fallback block
          <div className="w-full h-full grid place-content-center text-neutral-400">
            Hero image placeholder
          </div>
        )}
      </div>
    </section>
  );
}