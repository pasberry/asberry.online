/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/zgf0zGDaSMW
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Judson } from 'next/font/google'
import { Yeseva_One } from 'next/font/google'

judson({
  subsets: ['latin'],
  display: 'swap',
})

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client'
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function Website() {
  const [showContact, setShowContact] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const [showProjects, setShowProjects] = useState(false)


  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="container mx-auto px-4 py-6 md:py-8 lg:py-10">
        <nav className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            asberry.online
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#projects" className="text-sm font-medium hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline" prefetch={false}>
              Experience
            </Link>
            {showContact && <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact
            </Link>
            }
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">Phillip Asberry</h1>
              <p className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl md:text-4xl">
                Software Engineer | Entrepreneur
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                With over 15 years of experience in software engineering, I am currently a Senior Consultant and Cloud Engineer at BJSS, specializing in AWS platform solutions. My journey in tech has also seen me thrive as a Full Stack Engineer, with proficiency in Go, JavaScript/TypeScript, and Python. I’m passionate about building scalable, efficient, and innovative solutions that drive business success.
              </p>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Outside of my professional life, I am a proud husband and father to a lovely daughter. My family and I call Brooklyn home, where we enjoy the vibrant culture and energy of New York City. When I’m not immersed in code, you can find me exploring the latest sneaker drops, hanging out with my dog and cats, or simply soaking in all that the city has to offer.
              </p>

              {showResume && <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Resume
              </Link>
              }
            </div>
          </div>
        </section>
        {showProjects && <section id="projects" className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Here are some of the projects I've worked on:
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A web application built with React, Next.js, and Tailwind CSS.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">A mobile app built with React Native and Expo.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">A backend API built with Node.js, Express, and MongoDB.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold">Project 4</h3>
                  <p className="text-muted-foreground">A data visualization dashboard built with React and D3.js.</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        }
        <section id="skills" className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Skills</h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Here are some of the technologies I used along my journey:
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-bold">Frameworks</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>SpringBoot</li>
                  <li>Fiber</li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-bold">Languages</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>Go</li>
                  <li>Java</li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-bold">Cloud</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>AWS</li>
                  <li>Vercel</li>
                  <li>Railway</li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-bold">Tools</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>Git</li>
                  <li>Vim</li>
                  <li>Postgres</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Work Experience</h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Here's a summary of my professional experience:
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-xl font-bold">Cloud Engineer</h3>
                <p className="text-muted-foreground">BJSS</p>
                <p className="text-muted-foreground">May 2022 - Present</p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>* Lead internal projects and initiatives.</li>
                  <li>* Assist in GTM strategy and architect client POCs</li>
                  <li>* Worked on client site as an AWS SME</li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-xl font-bold">Senior Engineer</h3>
                <p className="text-muted-foreground">Capital One</p>
                <p className="text-muted-foreground">Nov 2019 - May 2022</p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>* Worked in the retail bank side of the company in Overdraft.</li>
                  <li>* Managed the ETL process that determine customer overdraft limits.</li>
                  <li>* Role entailed full stack and infrastructure development.</li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-xl font-bold">Senior Engineer</h3>
                <p className="text-muted-foreground">Choice Hotels</p>
                <p className="text-muted-foreground">Dec 2015 - Oct 2010</p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>* Full Stack Java developer utilizing the Spring Framework</li>
                  <li>* Gained experience in agile development methodologies and project management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-center text-muted-foreground">
        <p>&copy; 2024 asberry.online. All rights reserved.</p>
        <p>Alabama Born and Conencuh feed</p>
      </footer>
    </div>
  )
}
