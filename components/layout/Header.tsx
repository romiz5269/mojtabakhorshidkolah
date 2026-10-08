import {
  BookUser,
  BriefcaseBusiness,
  ClipboardList,
  Info,
  Moon,
  Send,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-2  transition-all duration-100 ease-out z-20 w-full  blur-0 opacity-100">
      <div className="container xl:max-w-xl top-0 py-2 md:py-2 md:px-0 ">
        <div className="w-full mx-auto  p-3 rounded-xl bg-white/5 backdrop-blur-3xl blur-0 border border-blue-300/10">
          <nav className="flex items-center justify-between ">
            <div className="hidden md:flex items-center">
              <ul className="gap-y-2 md:gap-y-0 flex flex-col md:flex-row md:items-center justify-between gap-x-8  text-gray-400">
                <li className="block md:hidden"></li>
                <li className="block">
                  <Link href={"/about"}>
                    <div className="relative flex items-center hover:text-blue-400">
                      <span className="py-2 md:py-1 flex items-center gap-x-2 cursor-pointer">
                        <Info size={18} />
                        <span>About Me</span>
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="block">
                  <Link href={"/about"}>
                    <div className="relative  flex items-center hover:text-blue-400 ">
                      <span className="py-2  md:py-1 flex items-center gap-x-2  cursor-pointer  ">
                        <BriefcaseBusiness size={18} />
                        <span>Projects</span>
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="block">
                  <Link href={"/about"}>
                    <div className="relative  flex items-center hover:text-blue-400 ">
                      <span className="py-2  md:py-1 flex items-center gap-x-2  cursor-pointer ">
                        <ClipboardList size={18} />
                        <span>Experience</span>
                      </span>
                    </div>
                  </Link>
                </li>
                {/* <li className="block">
                  <Link href={"/about"}>
                    <div className="relative  flex items-center hover:text-blue-400 ">
                      <span className="py-2  md:py-1 flex items-center gap-x-2  cursor-pointer ">
                        <ShieldCheck size={18} />
                        <span>Certifications</span>
                      </span>
                    </div>
                  </Link>
                </li> */}
                <li className="block">
                  <Link href={"/about"}>
                    <div className="relative  flex items-center hover:text-blue-400 ">
                      <span className="py-2  md:py-1 flex items-center gap-x-2 cursor-pointer  ">
                        <Send size={18} />
                        <span >Hire Me</span>
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="block">
                  <Link href={"/about"}>
                    <div className="relative  flex items-center hover:text-blue-400 ">
                      <span className="py-2  md:py-1 flex items-center gap-x-2 cursor-pointer  ">
                        <BookUser size={18} />
                        <span>Contact</span>
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-5">
              <button className="border border-gray-700 rounded-xl">
                <span className="p-2 flex items-center justify-center text-white">
                  <Moon size={18} />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
