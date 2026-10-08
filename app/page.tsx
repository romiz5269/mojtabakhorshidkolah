import Badge from "@/components/Badge";
import ConnectSection from "@/components/ConnectSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import HireForm from "@/components/HireForm";
import ProjectPreview from "@/components/Projectpreview";
import {CheckCircle, Dot} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {BsGithub, BsLinkedin, BsTelegram, BsWhatsapp} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

export default function Home() {
  return (
    <div>
      <section className="relative container md:max-w-5xl mx-auto mt-12 md:mt-16">
        <div
          className="hidden dark:block pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 -z-10 overflow-hidden"
          style={{
            background:
              " linear-gradient(rgb(11, 12, 30) 0%, rgb(16, 17, 42) 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 50% at 84% 8%, rgba(74, 109, 255, 0.38) 0%, transparent 65%), radial-gradient(45% 42% at 8% 96%, rgba(217, 119, 87, 0.18) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(146, 167, 255, 0.16) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(75% 65% at 78% 15%, rgb(0 0 0) 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(75% 65% at 78% 15%, rgb(0 0 0) 0%, transparent 75%)",
            }}
          />
        </div>
        <div className="flex gap-y-9 flex-col-reverse items-center md:flex-row md:gap-x-5 md:items-center md:justify-between h-125 ">
          <div className="text-center md:text-left text-white w-[50%] grow space-y-4">
            <div className=" -mx-8 md:mx-0 border-b border-b-neutral-100/30 mb-4 flex flex-wrap justify-center md:flex-nowrap md:justify-start items-center gap-x-2 gap-y-2 md:gap-x-4 text-secondary-600 text-xs lg:text-sm pb-4 mt-2">
              <a href="#">
                <Badge
                  className="items-center buttonShadow"
                  icon={<BsGithub size={14} />}
                >
                  <span>Github</span>
                </Badge>
              </a>
              <a href="#">
                <Badge
                  className="items-center buttonShadow"
                  icon={<BsLinkedin size={14} />}
                >
                  <span>Linkedin</span>
                </Badge>
              </a>
              <a href="#">
                <Badge
                  className="items-center buttonShadow"
                  icon={<MdEmail size={14} />}
                >
                  <span>Email</span>
                </Badge>
              </a>

              <a href="#">
                <Badge
                  className="items-center buttonShadow"
                  icon={<BsWhatsapp size={14} />}
                >
                  <span>Whatsapp</span>
                </Badge>
              </a>
              <a href="#">
                <Badge
                  className="items-center buttonShadow"
                  icon={<BsTelegram size={14} />}
                >
                  <span>Telegram</span>
                </Badge>
              </a>
            </div>
            <div>
              <h1 className="font-black text-3xl  md:text-3xl lg:text-4xl   ">
                I'm Mojtaba, a Full-Stack Developer.
              </h1>
            </div>
            <div>
              <p className="text-xs md:text-base font-medium  mb-6 md:mb-2 text-gray-400 leading-8">
                I’m Mojtaba, a Full-Stack Developer focused on building modern
                websites, scalable applications, and reliable digital systems.
                From creating interactive user interfaces with React and Next.js
                and developing backend solutions with Node.js and TypeScript, to
                designing and building professional websites with WordPress, I
                always aim to choose the right technical approach based on the
                real needs of each project. To me, technology is just a tool.
                What truly matters is solving problems the right way and
                building products that are fast, stable, scalable, and
                practical. I see software development as a combination of
                problem-solving, engineering, design, and attention to detail. I
                always strive to create solutions that provide a great user
                experience while remaining maintainable, flexible, and easy to
                evolve over time.
              </p>
            </div>
            <div className="flex items-center justify-start w-full mb-4 gap-x-4">
              <Link
                href={"/#about"}
                className="bg-blue-400 buttonShadow px-10 py-3 rounded-full hover:bg-blue-500 text-xl"
              >
                Contact
              </Link>
              <Link
                href={"/#about"}
                className="bg-blue-400 buttonShadow px-10 py-3 rounded-full hover:bg-blue-500 text-xl"
              >
                Hire Me
              </Link>
              <Link
                href={"/#about"}
                className="bg-blue-400 buttonShadow px-10 py-3 rounded-full hover:bg-blue-500 text-xl"
              >
                My CV
              </Link>
            </div>
          </div>
          <div className=" w-[50%] h-full sm:w-[62%] md:w-[46%]  relative mx-auto mb-6 md:mb-0 ">
            <Image
              src={"/mojtaba-khorshidkolah.png"}
              alt="مجتی خورشیدکلاه"
              fill
              className=" object-fill"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-y-10 text-white mt-40 mx-auto container relative">
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <span
            className="
              px-4
              py-2

              rounded-full

              text-sm

              text-blue-400

              bg-blue-500/10

              border

              border-blue-400/20
              "
          >
            Projects
          </span>
          <h2 className="font-black text-white text-4xl w-full text-center">
            Featured Projects
          </h2>
          <p className="text-neutral-400">
            A showcase of my recent work, experiments, and real-world
            applications.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 ">
          <div className="col-span-1 relative h-full w-full">
            <div className="w-full h-full bg-white/5 rounded-xl border border-blue-300/20 overflow-hidden relative">
              <div className="absolute z-10 top-2 left-2">
                <Badge className="bg-green-600 text-white">
                  <span className="text-xs font-medium">Completed</span>
                </Badge>
              </div>
              <div className="relative h-75 w-full">
                <ProjectPreview src="/fzaco.png" />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="text-2xl font-black">
                  Fouladin Zob Amol Website
                </h3>
                <p className="text-neutral-400">
                  A modern corporate website for presenting company information,
                  products, news, and career opportunities with a professional
                  and user-friendly experience.
                </p>
                <div className="flex items-center justify-start flex-wrap gap-2">
                  <Badge variant="default" className="buttonShadow font-medium">
                    HTML
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    CSS
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Typescript
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Next
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Django
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Node.js
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative h-full w-full">
            <div className="w-full h-full bg-white/5 rounded-xl border border-blue-300/20 overflow-hidden relative">
              <div className="absolute z-10 top-2 left-2">
                <Badge className="bg-blue-600 text-white">
                  <span className="text-xs font-medium">Developing</span>
                </Badge>
              </div>
              <div className="relative h-75 w-full">
                <Image
                  src={"/fzaco.png"}
                  fill
                  className="object-cover"
                  alt="FZA Co Website"
                />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="text-2xl font-black">Car Rental Platform</h3>
                <p className="text-neutral-400">
                  A modern car rental platform that allows users to explore
                  available vehicles, compare options, and make online
                  reservations. The platform provides a seamless booking
                  experience with vehicle management, search functionality, and
                  a user-friendly interface.
                </p>
                <div className="flex items-center justify-start flex-wrap gap-2">
                  <Badge variant="default" className="buttonShadow font-medium">
                    HTML
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    CSS
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Typescript
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Next
                  </Badge>

                  <Badge variant="default" className="buttonShadow font-medium">
                    Node.js
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Express.js
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Postgres
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    Prisma
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative h-full w-full">
            <div className="w-full h-full bg-white/5 rounded-xl border border-blue-300/20 overflow-hidden relative">
              <div className="absolute z-10 top-2 left-2">
                <Badge className="bg-green-600 text-white">
                  <span className="text-xs font-medium">Completed</span>
                </Badge>
              </div>
              <div className="relative h-75 w-full">
                <Image
                  src={"/op-lcd.jpeg"}
                  fill
                  className="object-fill"
                  alt="OP LCD"
                />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="text-2xl font-black">
                  operating room monitoring
                </h3>
                <p className="text-neutral-400">
                  Designed and developed a healthcare dashboard for monitoring
                  operating room activities. The system connects with the
                  hospital HIS to retrieve real-time patient information and
                  presents surgical status, workflow stages, and operational
                  insights through an intuitive interface for medical teams.
                </p>
                <div className="flex items-center justify-start flex-wrap gap-2">
                  <Badge variant="default" className="buttonShadow font-medium">
                    HTML
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    CSS
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    javascript
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    React
                  </Badge>

                  <Badge variant="default" className="buttonShadow font-medium">
                    Node.js
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative h-full w-full">
            <div className="w-full h-full bg-white/5 rounded-xl border border-blue-300/20 overflow-hidden relative">
              <div className="absolute z-10 top-2 left-2">
                <Badge className="bg-green-600 text-white">
                  <span className="text-xs font-medium">Completed</span>
                </Badge>
              </div>
              <div className="relative  w-full">
                <ProjectPreview src="/ipd.png" />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="text-2xl font-black">
                  An international patient portal
                </h3>
                <p className="text-neutral-400">
                  An international patient portal for a hospital, designed to
                  help medical tourists explore healthcare services, treatment
                  packages, doctors, and hospital facilities. The platform
                  provides a multilingual experience with structured medical
                  content and an easy-to-use interface for international
                  patients.
                </p>
                <div className="flex items-center justify-start flex-wrap gap-2">
                  <Badge variant="default" className="buttonShadow font-medium">
                    HTML
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    CSS
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    javascript
                  </Badge>
                  <Badge variant="default" className="buttonShadow font-medium">
                    React
                  </Badge>

                  <Badge variant="default" className="buttonShadow font-medium">
                    Node.js
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <ExperienceTimeline />
      </div>
      <div className="mt-40">
        <HireForm />
      </div>
      <div className="mt-40">
        <ConnectSection />
      </div>
    </div>
  );
}
