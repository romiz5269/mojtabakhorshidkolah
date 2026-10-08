"use client";

import {motion} from "framer-motion";
import {BriefcaseBusiness} from "lucide-react";

const experiences = [
  {
    year: "Until 2025",
    role: "Full-Stack Developer",
    company: "Tech Company",
    description:
      "Building scalable web applications using React, Next.js, Node.js and TypeScript.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    year: "2024",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Developed modern user interfaces and optimized web performance.",
    stack: ["React", "Tailwind", "JavaScript"],
  },
  {
    year: "2022",
    role: "Web Developer",
    company: "Freelance",
    description:
      "Created websites and custom solutions for different businesses.",
    stack: ["WordPress", "PHP", "JavaScript"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      className="
      relative
    
      bg-[#050816]
      overflow-hidden
      "
    >
      <div className="container mx-auto max-w-5xl px-6">
        {/* Header */}

        <div className="text-center mb-24">
          <span
            className="
            inline-flex
            px-4
            py-2
            rounded-full
            bg-blue-500/10
            border
            border-blue-400/20
            text-blue-400
            text-sm
            "
          >
            Experience
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-bold
            text-white
            "
          >
            My Career Journey
          </h2>

          <p className="mt-5 text-gray-400">
            A timeline of my professional experience and growth.
          </p>
        </div>

        {/* Timeline */}

        <div
          className="
          relative
          "
        >
          {/* Center Line */}

          <div
            className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-blue-500
            via-purple-500
            to-transparent
            "
          />

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className={`
                relative
                mb-24
                flex
                ${index % 2 === 0 ? "justify-start" : "justify-end"}
                `}
            >
              {/* Dot */}

              <div
                className="
                  absolute
                  left-1/2
                  top-8
                  -translate-x-1/2
                  w-5
                  h-5
                  rounded-full
                  bg-blue-500
                  border-4
                  border-[#050816]
                  shadow-[0_0_30px_#3b82f6]
                  z-10
                  "
              />

              {/* Card */}

              <div
                className="
                  w-full
                  md:w-[45%]
                  group
                  "
              >
                <div
                  className="
                    relative
                    p-7
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    hover:border-blue-400/40
                    transition
                    duration-500
                    "
                >
                  {/* Year */}

                  <div
                    className="
                      text-5xl
                      font-black
                      bg-linear-to-r
                      from-blue-500
                      to-purple-700
                      bg-clip-text
                      text-transparent
                      "
                  >
                    {item.year}
                  </div>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-3
                      text-white
                      "
                  >
                    <BriefcaseBusiness size={20} />

                    <h3
                      className="
                        text-xl
                        font-semibold
                        "
                    >
                      {item.role}
                    </h3>
                  </div>

                  <p
                    className="
                      mt-2
                      text-blue-400
                      "
                  >
                    {item.company}
                  </p>

                  <p
                    className="
                      mt-5
                      text-gray-400
                      leading-7
                      "
                  >
                    {item.description}
                  </p>

                  {/* Stack */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                      "
                  >
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          bg-blue-500/10
                          text-blue-300
                          border
                          border-blue-400/20
                          "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
