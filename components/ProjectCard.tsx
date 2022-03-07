/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <Link href="/project/[id]" as="/project/1">
      <div className="p-4 w-full group hover:opacity-95">
        <div className="h-full w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center group-hover:opacity-75"
            src="https://dummyimage.com/721x401"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest uppercase text-xs title-font font-medium text-gray-400 mb-1">
              Children & Youth
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              No Kid hungry
            </h1>
            <p className="leading-relaxed mb-3">
              Children are hungry for food.
              <br />
              <br />
              This is a story about how we can help.

            </p>
            <div className="desc flex flex-col">
              <div className="flex items-center justify-between">
                <p>Raised: 1.3m</p>
                <p>Target: 4.3m</p>
              </div>
              <div className="flex items-center justify-between">
                {/* A progress bar showing the progress made */}
                <div className="progress-bar">
                  <div className="progress-bar-inner" style={{ width: "50%" }} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Until July 3rd</p>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
