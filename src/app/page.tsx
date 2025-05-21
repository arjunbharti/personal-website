import Link from "next/link";
import MaxWidthContainer from "./components/MaxWidthContainer";
import React from "react";
import WorkExperienceCard from "./components/WorkExperienceCard";
import Cal from "./components/Cal";
import Image from "next/image";

export const runtime = "edge";

const workExperiences = [
  {
    company: "ONARRIVAL (pre-seed)",
    role: "Software Engineer (Frontend)",
    period: "Nov 2022 – Present",
    achievements: [
      "Architected & developed embedded flight booking experiences in a fintech environment for major partners (Niyo Global, Zolve), contributing to $1.3M+ in revenue.",
      "Reduced CRA bundle size by 25% through advanced code splitting, tree shaking, and replacing heavy UI libraries with reusable, modular components.",
      "Implemented ESLint, Prettier, Husky and pre-commit hooks to standardize code quality, resulting in 30% fewer code review revisions.",
      "Built end-to-end PWAs for booking flows (Seats, Meals, Baggage selection) from scratch using React, ensuring zero to one product journeys and improving page load speed by 40%."
    ]
  },
  {
    company: "DUKAAN (series A)",
    role: "Software Engineer (Frontend)",
    period: "July 2022 – Nov 2022",
    achievements: [
      "Developed a custom UI toolkit that accelerated internal development speed by 10x, enabling the creation of 4 new store fronts UI in under a week.",
      "Led experimental projects to refine the company's design system, optimizing aesthetic consistency and functional scalability.",
      "Rewritten the checkout engine with vanilla JS for faster load times, resulting in a significant reduction in checkout latency and improved conversion rates.",
       "Migrated existing store themes from Next.js to a vanilla HTML/CSS/JS stack, improving maintainability and build times.",
      "Built a store page ground-up with vanilla HTML, CSS, JS, refining UX and ensuring responsive design."
    ]
  },
];

const projects = [
  {
    title: "uiVibe",
    description: "A component library that gives you the power to build more clean, nice and amazing UI quickly. Build faster, Build with uiVibe! 💫",
    tech: ["CSS", "React", "JavaScript"],
    repoUrl: "https://github.com/arjunbharti/uiVibe",
    demoUrl: "https://ui-vibe.netlify.app/",
    imageUrl: "https://opengraph.githubassets.com/1/arjunbharti/uiVibe"
  },
  {
    title: "fakeSea-app",
    description: "Buy fake NFTs aka JPEG/PNG here. FakeSea is the largest marketplace for fake NFTs aka jpeg and png files. Sorry web3, hello web2",
    tech: ["JavaScript", "React", "CSS"],
    repoUrl: "https://github.com/arjunbharti/fakeSea-app",
    demoUrl: "https://fake-sea.netlify.app/",
    imageUrl: "https://opengraph.githubassets.com/1/arjunbharti/fakeSea-app"
  },
  {
    title: "binge-mate",
    description: "Get instant movie/tv shows suggestions in one click. And do share them with your friends because sharing is caring :P",
    tech: ["JavaScript", "React", "API"],
    repoUrl: "https://github.com/arjunbharti/binge-mate",
    demoUrl: "https://binge-mate.netlify.app/",
    imageUrl: "https://opengraph.githubassets.com/1/arjunbharti/binge-mate"
  },
  {
    title: "free-ki-advice",
    description: "Get advice online (just like you get it from random people on social media)",
    tech: ["JavaScript", "React", "API"],
    repoUrl: "https://github.com/arjunbharti/free-ki-advice",
    demoUrl: "https://free-ki-advice.netlify.app/",
    imageUrl: "https://opengraph.githubassets.com/1/arjunbharti/free-ki-advice"
  }
];

const blogPosts = [
  {
    title: "useContext Hook in React.js",
    url: "https://medium.com/@arjunbharti/usecontext-hook-in-react-js-4f371044a9eb",
    date: "Apr 2023"
  },
  {
    title: "Prop Drilling in React.js",
    url: "https://medium.com/@arjunbharti/prop-drilling-in-react-js-2d6cf17744b",
    date: "Mar 2023"
  },
  {
    title: "My Experience with Smart India Hackathon 2019",
    url: "https://medium.com/@arjunbharti/my-experience-with-smart-india-hackathon-2019-e956543bf5bd",
    date: "Apr 2019"
  },
  {
    title: "JavaScript Splice: JS Array Method",
    url: "https://medium.com/@arjunbharti/javascript-splice-js-array-method-5ff0ec0ee910",
    date: "Feb 2019"
  }
];

export default function Home() {
  return (
    <MaxWidthContainer>
      <h4 className="animate-fade-in font-semibold text-xl lg:text-2xl">
        Hi, I&apos;m Arjun <span className="text-xl">👋🏻</span>
      </h4>
      <div className="space-y-16 mt-4">
        <section>
          <article className="space-y-4">
            <p className="animate-fade-in text-gray-600 text-sm lg:text-base">
            Code, coffee, and travel-tech—pretty much sums me up. I&apos;m a software engineer from India, currently hacking on B2B SaaS at <Link href="https://www.onarrival.travel/" target="_blank" className="underline hover:text-blue-600 transition-colors">OnArrival</Link>, building the infrastructure that powers next-gen travel companies.
            </p>
            <p className="animate-fade-in text-gray-600 text-sm lg:text-base">
            On weekends, you&apos;ll either find me shipping side projects at 2 AM or riding through the city, hunting for the next great café.
            </p>
          </article>
        </section>

        <section className="animate-fade-in space-y-6">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <h5 className="font-semibold text-lg lg:text-xl">
              Work Experience
            </h5>
            {/* <Link href="/work" className="text-sm text-gray-500 hover:text-gray-600 transition-colors">
              See all work
            </Link> */}
          </div>
          <ul className="flex flex-col space-y-4">
            {workExperiences.map((experience, index) => (
              <li key={index}>
                <WorkExperienceCard
                  company={experience.company}
                  role={experience.role}
                  period={experience.period}
                  achievements={experience.achievements}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-fade-in space-y-6">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <h5 className="font-semibold text-lg lg:text-xl">
              Recent projects
            </h5>
            {/* <Link href="/projects" className="text-sm text-gray-500 hover:text-gray-600 transition-colors">
              See all projects
            </Link> */}
          </div>
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="border rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                    quality={90}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-base">{project.title}</h3>
                    <div className="flex space-x-2">
                      <Link 
                        href={project.repoUrl} 
                        target="_blank"
                        aria-label={`${project.title} GitHub repository`}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                      {project.demoUrl && (
                        <Link 
                          href={project.demoUrl} 
                          target="_blank"
                          aria-label={`${project.title} live demo`}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-fade-in space-y-6">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <h5 className="font-semibold text-lg lg:text-xl">
              Latest posts
            </h5>
            {/* <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-600 transition-colors">
              See all posts
            </Link> */}
          </div>
          <ul className="flex flex-col gap-4">
            {blogPosts.map((post, index) => (
              <li key={index} className="group">
                <Link 
                  href={post.url} 
                  target="_blank" 
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-sm lg:text-base group-hover:text-gray-600 transition-colors">{post.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">Medium</p>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <svg 
                      className="w-4 h-4 ml-2 text-gray-400 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-fade-in space-y-4">
          <h5 className="font-semibold text-lg lg:text-xl">
            Let&apos;s Connect
          </h5>
          <article>
            <p className="text-gray-600">
            {`I’ll dive into your vibe-coded project, iron out every glitch, and get it launch-ready. No coding on your part, just seamless results.`}
            </p>
          </article>
          <Cal />
        </section>
      </div>
    </MaxWidthContainer>
  );
}