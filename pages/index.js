import Head from "next/head";
import Image from "next/image";

import { AiOutlineMenu } from "react-icons/ai";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

import Logo from "../public/logo/logo-brata.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brata&apos;s Portfolio 👋</title>
        <link rel="icon" href="/logo/logo-brata.png" />
      </Head>

      {/* Navigation Bar */}
      <nav className="navigationmax flex h-10 flex-row items-center justify-center bg-white py-7 px-20 shadow-sm md:justify-center xl:justify-between xl:px-80">
        <h1 className="text-2xl font-bold">Hello 👋</h1>
        {/* <ul className="invisible hidden text-sm font-medium md:hidden xl:ml-7 xl:flex xl:flex-row xl:gap-16">
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul> */}
        <button
          className="hidden rounded-full bg-slate-800 py-2 px-5 text-center text-sm text-slate-50 hover:bg-slate-900 active:bg-transparent    active:text-base active:font-medium active:text-slate-900 active:outline active:outline-1 md:hidden xl:block"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:bratadarmawan@gmail.com";
          }}
        >
          Message Me!
        </button>
        <div className="hidden sm:hidden">
          <AiOutlineMenu size="1.5rem" />
        </div>
      </nav>

      {/* Page */}
      <div>
        <div className="m-5 flex flex-col items-center justify-center">
          <div className="relative z-40 py-2 sm:py-20">
            <Image src={Logo} alt="Brata Darmawan" width={200} height={200} />
          </div>
          <div className="square relative z-10 -mt-32 flex flex-col items-center justify-center rounded-3xl bg-white shadow-md sm:-mt-48 lg:-mt-52 xl:-mt-80">
            <div className="flex flex-col items-center justify-center pt-28 text-center xl:mt-10 xl:pt-52">
              <h1 className="w-52 text-center text-xl font-bold leading-6 xl:w-auto xl:text-3xl xl:leading-none">
                Brata Darmawan
              </h1>
              <p className="mt-2 px-8 text-sm font-normal leading-relaxed tracking-wide text-slate-700 xl:px-20 xl:text-base">
                Self-Taught UI/UX Designer and Front-end Development Enthusiast
              </p>
            </div>
            <div className="mt-6 block text-sm xl:mt-8 ">
              <div className="text-center font-medium">
                <p>Keep in touch :</p>
              </div>
              <div className="mt-2 flex flex-row items-center justify-center gap-3 xl:mt-4 xl:gap-4">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://github.com/bratdr";
                  }}
                  className="text-slate-700 hover:text-slate-900 active:text-slate-300"
                >
                  <FaGithub size="2rem" />
                </div>
                <div
                  className="text-slate-700 hover:text-sky-500 active:text-sky-500"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://telegram.me/bratdr";
                  }}
                >
                  <FaTelegram size="2rem" />
                </div>
                <div
                  className="text-slate-700 hover:text-blue-600 active:text-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/in/bratadarmawan/";
                  }}
                >
                  <FaLinkedin size="2rem" />
                </div>
              </div>
              <div className="my-0 flex items-center justify-center pt-10 font-medium">
                <button
                  className="rounded-full bg-slate-900 py-2 px-5 text-sm text-slate-50 hover:bg-slate-900 active:bg-transparent active:text-base active:font-medium active:text-slate-900 active:outline active:outline-1 xl:hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:bratadarmawan@gmail.com";
                  }}
                >
                  Message Me!
                </button>
              </div>
            </div>
          </div>
          {/* <div className="flex w-screen flex-row items-center justify-center gap-6 overflow-hidden px-20">
            <div className="square2 relative z-0 mt-5 flex flex-col items-center justify-center rounded-3xl bg-black shadow-md xl:mt-52"></div>
            <div className="square2 relative z-0 mt-5 flex flex-col items-center justify-center rounded-3xl bg-white shadow-md xl:mt-52"></div>
            <div className="square2 relative z-0 mt-5 flex flex-col items-center justify-center rounded-3xl bg-white shadow-md xl:mt-52"></div>
          </div> */}
        </div>
      </div>
    </>
  );
}
