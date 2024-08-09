/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3ha7HHlakfG
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Archivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function Website() {
  const showLink = false
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-primary to-secondary">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-[4rem] 2xl:text-[4.5rem]">
                <strong className="text-8xl">Hi</strong>, I'm Phillip !
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-5">
                With over 15 years of experience in software engineering, I am currently a Senior Consultant and Cloud Engineer at BJSS, specializing in AWS platform solutions. My journey in tech has also seen me thrive as a Full Stack Engineer, with proficiency in Go, JavaScript/TypeScript, and Python. I’m passionate about building scalable, efficient, and innovative solutions that drive business success.
              </p>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-5">
                Outside of my professional life, I am a proud husband and father to a lovely daughter. My family and I call Brooklyn home, where we enjoy the vibrant culture and energy of New York City. When I’m not immersed in code, you can find me exploring the latest sneaker drops, hanging out with my dog and cats, or simply soaking in all that the city has to offer.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4" >
              <div className="rounded-lg bg-muted p-2">
                <Image
                  src="/pic.jpeg"
                  alt="Phillip Da Man"
                  width={240}
                  height={240}
                  className="rounded-lg grayscale"
                  style={{ aspectRatio: "160/160", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the recent projects I've worked on.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full w-full">
              <CardHeader>
                <CardTitle>Credit Union Reporting</CardTitle>
                <CardDescription>
                  Designed financial reports in AWS Quicksight enabling business intelligence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    AWS S3
                  </div>
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Quicksight
                  </div>
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    AWS Glue
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {showLink && <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
                }
              </CardFooter>
            </Card>
            <Card className="h-full w-full">
              <CardHeader>
                <CardTitle>AWS Serverless Refactor</CardTitle>
                <CardDescription>
                  Migrated Governement Agency EC2 workloads to a Serverless platform enabling right sizing of workloads and AWS cost reductions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Lambda
                  </div>
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Glue
                  </div>
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Cloudformation
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {showLink && <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
                }
              </CardFooter>
            </Card>
            <Card className="h-full w-full">
              <CardHeader>
                <CardTitle>AWS Static Site Deploy</CardTitle>
                <CardDescription>
                  Utilized AWS CDK to build infrastructure (Cloudfront, S3, Route 53) to build deployment pipeline enabling effortless redeploys.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    React Native
                  </div>
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Firebase
                  </div>
                  <div className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Expo
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {showLink && <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Project
                </Link>
                }
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-secondary">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the technologies and tools I'm proficient in.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">React</div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Next.js</div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Axiom</div>

              {/* <div className="text-sm text-muted-foreground">Frontend</div> */}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
                Go
              </div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Javascript</div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Python</div>

              {/* <div className="text-sm text-muted-foreground">Backend</div> */}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">Vercel</div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Railway.app</div>
              {/*<div className="text-sm text-muted-foreground">Database</div> */}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">AWS</div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Postgres</div>
              {/*<div className="text-sm text-muted-foreground">Cloud</div> */}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">Docker</div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Redis</div>
              {/*<div className="text-sm text-muted-foreground">Containerization</div> */}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">Fly.io</div>
              <div className="rounded-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">Clerk</div>
              {/*<div className="text-sm text-muted-foreground">Orchestration</div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to reach out if you have any questions or would like to discuss a project.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MailOpenIcon className="h-6 w-6 text-muted-foreground" />
              <div>
                <div className="font-medium">Email</div>
                <a href="#" className="text-muted-foreground hover:underline">
                  phillip.j.asberry@tikitaco.technology
                </a>
              </div>
            </div>
            { /*
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-muted-foreground" />
              <div>
                <div className="font-medium">Phone</div>
                <a href="#" className="text-muted-foreground hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            */}
            <div className="flex items-center gap-3">
              <LinkedinIcon className="h-6 w-6 text-muted-foreground" />
              <div>
                <div className="font-medium">LinkedIn</div>
                <a href="#" className="text-muted-foreground hover:underline">
                  linkedin.com/in/phillipasberry
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GithubIcon className="h-6 w-6 text-muted-foreground" />
              <div>
                <div className="font-medium">GitHub</div>
                <a href="#" className="text-muted-foreground hover:underline">
                  github.com/pasberry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
