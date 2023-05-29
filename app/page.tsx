import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { FAQAccordion } from "@/components/faq-accordion"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 ">
      <div className="grid items-center gap-y-4 grid-cols-2 h-screen">
        <div className="flex max-w-[980px] flex-col items-start gap-2 ">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Effortlessly Manage <br className="hidden sm:inline" />
            and Track your keys
          </h1>
          <div className="flex gap-4">
            <Link
              href="/keys"
              target="_blank"
              className={buttonVariants({ size: "lg" })}
            >
              View Keys
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="grid items-center place-content-center">
          <img
            src="landingIllustration.png"
            alt="illustration"
            className="w-fit "
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl text-center">
        How does Keyper work?
      </h2>
      <div className="grid items-center place-content-center">
        <img
          src="shortHowTo.png"
          alt="short explanation"
          className="h-auto w-full 2xl:w-fit"
        />
      </div>

      <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl text-center">
        FAQ
      </h2>
      <FAQAccordion />
    </section>
  )
}
