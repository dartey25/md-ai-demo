import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"


export default function IndexPage() {
  return (
    <>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        AI: новий рівень ефективності для 
          <br className="hidden sm:inline" />
          MDOffice.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        Дивовижні можливості штучного інтелекту для вашого бізнесу - рішення які надає MDOffice.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.showcase}
          className={buttonVariants({ size: "lg" })}
        >
          Дивитися
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
    </>
  )
}
