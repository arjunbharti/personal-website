import Link from "next/link";
import MaxWidthContainer from "./components/MaxWidthContainer";
import { socials } from "./utils";
import React from "react";

export const runtime = "edge";

export default function Home() {
  return (
    <MaxWidthContainer>
      <h4 className="animate-fade-in font-semibold">
        Hi, I&apos;m Arjun <span className="text-xl">👋🏻</span>
      </h4>
      <div className="space-y-16">
        <section>
          <article className="space-y-4">
            <p className="animate-fade-in text-gray-600">
              I am a passionate software engineer from India 🇮🇳, currently focused on solving challenges in Travel-Tech. Currently, I&apos;m building innovative B2B SaaS solutions at <Link href="https://www.onarrival.travel/" target="_blank" className="underline italic">OnArrival</Link> to empower the next generation of travel companies.
            </p>
            <p className="animate-fade-in text-gray-600">
              I like shipping projects over the weekends and when I am not doing that, I am probably on a bike ride or exploring new cafes.
            </p>
          </article>
        </section>

        <section className="animate-fade-in space-y-6">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <h5 className="font-semibold">
              Work Experience
            </h5>
            <Link href="/work">
              See all work
            </Link>
          </div>
          <ul className="flex flex-col space-y-4">
            wip
          </ul>
        </section>

        <section className="animate-fade-in space-y-6">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <h5 className="font-semibold">
              Recent projects
            </h5>
            <Link href="/projects">
              See all projects
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            wip
          </ul>
        </section>

        <section className="animate-fade-in space-y-6">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <h5 className="font-semibold">
              Latest posts
            </h5>
            <Link href="/blog">
              See all posts
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            wip
          </ul>
        </section>

        <section className="animate-fade-in space-y-4">
          <h5 className="font-semibold">
            Let&apos;s Connect
          </h5>
          <article>
            <p className="text-gray-600">
              If you want me to ship your next project/refactor your codebase or setting up your app on a $5 VPS, react out to me here.
            </p>
          </article>
          <ul className="flex flex-wrap gap-2">
            {socials.map(item => (
              <React.Fragment key={item.url}>
                <Link target="_blank" href={item.url} aria-label={`${item.name} on ${item.name}`}>
                  {item.name}
                </Link>
                {"/"}
              </React.Fragment>
            ))}
            <li className="line-clamp-1">
              <Link href={`mailto:buildwitharjun@gmail.com`} aria-label={`Email buildwitharjun@gmail.com`}>
                buildwitharjun@gmail.com
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </MaxWidthContainer>
  );
}