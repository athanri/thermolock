import { Metadata } from "next";
import { LP_GRID_ITEMS } from "lp-items";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kilbeacanty Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Thermolock.ie
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius illo voluptates fuga aspernatur eos voluptatum placeat quis, aliquam quo ab iste ullam, accusamus tenetur commodi adipisci dignissimos eaque optio?
            </p>
          </div>
        </div>
      </section>
      <section>
      <Image
        src="/images/Duck.png"
        alt="hero image"
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width={300}
        height={300}
      />
      </section>
    </>
  )
}
