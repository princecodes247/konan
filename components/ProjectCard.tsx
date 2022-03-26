/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ReactChild, ReactFragment, ReactPortal } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

export default function ProjectCard(props: { id: any; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; desc: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; currentAmount: any; targetAmount: any; }) {
  return (
    <Link href={`/project/${props.id}`} as={`/project/${props.id}`}>
      <div className="p-4 w-full group hover:opacity-95">
        <div className="h-full w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center group-hover:opacity-75"
            src="https://dummyimage.com/721x401"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest uppercase text-xs title-font font-medium text-gray-400 mb-1">
            {/* {props.category} */}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {props.title}
            </h1>
            <p className="leading-relaxed text-gray-500  mb-3 ">
            {props.desc}
            </p>
            <div className="desc flex flex-col">
              <ProgressBar currentAmount={props.currentAmount} targetAmount={props.targetAmount}/>
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-500">Until July 3rd</p>
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
