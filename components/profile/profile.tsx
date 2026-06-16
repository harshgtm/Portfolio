import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import { Social } from "@/components/common/Social";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 min-h-screen md:h-screen flex items-center">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ml-0 mr-0">
        <div className="flex-1 text-center lg:text-left">
          <AnimatedText as="div" delay={0.2} className="font-heading">
            <p className="text-yellow-400 text-xl md:text-2xl mb-2">Hello!</p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              I'm <span className="text-yellow-400">Harsh Gautam</span>
            </h1>
          </AnimatedText>

          <AnimatedText
            as="h3"
            delay={0.4}
            className="mt-8 text-xl md:text-2xl font-bold text-foreground"
          >
            Software Developer
          </AnimatedText>

          <div className="mt-6 max-w-2xl">
            <p className="leading-relaxed text-base md:text-lg text-foreground">
              I build fast, scalable, and intelligent web applications — from
              real-time dashboards and event-driven backends to GenAI-powered
              workflows. 4+ years of full-stack experience across high-impact
              products in diverse industries.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                })
              )}
            >
              <Icons.contact className="mr-2 h-4 w-4" />
              Contact
            </Link>
          </div>

          <div className="mt-6">
            <Social />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center flex-1">
          <Image
            src={profileImg}
            alt="Harsh Gautam - Software Developer Portfolio"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
