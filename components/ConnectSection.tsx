"use client";

import {motion} from "framer-motion";
import {Mail, Send, Globe, ArrowUpRight} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const socialLinks = [
  {
    title: "GitHub",
    description: "Explore my code & projects",
    href: "https://github.com/romiz5269",
    icon: BsGithub,
    label: "@romiz5269",
  },
  {
    title: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://linkedin.com/",
    icon: LiaLinkedin,
    label: "Mojtaba",
  },
  {
    title: "Email",
    description: "For business & project inquiries",
    href: "mailto:your@email.com",
    icon: Mail,
    label: "your@email.com",
  },
  {
    title: "Telegram",
    description: "Quick conversations & messages",
    href: "https://t.me/",
    icon: Send,
    label: "@username",
  },
];

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-purple-600/5
          blur-[120px]
        "
      />

      <div className="container relative mx-auto max-w-5xl px-6">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              text-blue-400
            "
          >
            <Globe size={15} />
            Connect
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Let&apos;s Stay Connected
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-gray-400
              leading-8
            "
          >
            Feel free to connect with me through any of the platforms below.
          </p>
        </motion.div>

        {/* Social Cards */}

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
          "
        >
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition-colors
                  duration-300
                  hover:border-blue-400/30
                  hover:bg-white/[0.05]
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-blue-500/20
                  "
                />

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-between
                  "
                >
                  {/* Left */}

                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        text-gray-300
                        transition
                        duration-300
                        group-hover:border-blue-400/30
                        group-hover:bg-blue-500/10
                        group-hover:text-blue-400
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3
                        className="
                          font-semibold
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-gray-500
                        "
                      >
                        {item.description}
                      </p>

                      <span
                        className="
                          mt-2
                          block
                          text-sm
                          text-gray-400
                        "
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}

                  <ArrowUpRight
                    size={20}
                    className="
                      shrink-0
                      text-gray-600
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-blue-400
                    "
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Email */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-10
            text-center
          "
        >
          <p className="text-sm text-gray-500">Prefer email?</p>

          <a
            href="mailto:your@email.com"
            className="
              mt-2
              inline-block
              text-lg
              font-medium
              text-white
              transition
              hover:text-blue-400
            "
          >
            your@email.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
