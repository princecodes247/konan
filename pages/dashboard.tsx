import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DashboardHeader from "../components/DashboardHeader";
import CreateProjectModal from "../components/CreateProjectModal";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Tabs() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  let [projects, setProjects] = useState([
    {
      id: 1,
      title: "Help kids chop",
      date: "5h ago",
      deadline: "Jan 7",
      target: "$10,000",
      current: "$5,000",
      contributors: [],
      completed: false,
    },
    {
      id: 2,
      title: "Fight Against Russia",
      date: "5h ago",
      deadline: "Jan 7",
      target: "$10,000",
      current: "$5,000",
      contributors: [],
      completed: true,
    },
  ]);

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

const Dashboard: NextPage = () => {
  let [projectModalOpen, setProjectModalOpen] = useState(false);
  let [projects, setProjects] = useState([
    {
      id: 1,
      title: "Help kids chop",
      date: "5h ago",
      deadline: "Jan 7",
      target: "$10,000",
      current: "$5,000",
      contributors: [],
      completed: false,
    },
    {
      id: 2,
      title: "Fight Against Russia",
      date: "5h ago",
      deadline: "Jan 7",
      target: "$10,000",
      current: "$5,000",
      contributors: [],
      completed: true,
    },
  ]);
  let [categories] = useState({
    All: projects,
    Completed: projects.filter((project) => project.completed),
    Uncompleted: projects.filter((project) => !project.completed),
  });

  return (
    <div>
      <DashboardHeader title="Dashboard" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow rounded-lg mb-10">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Your account is ready!
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                You can now start using the app.
              </p>
              <div className="mt-6 grid grid-cols-1 row-gap-4 col-gap-4 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-sm leading-5">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                      >
                        View profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <button>Explore Projects</button>
            <button className="" onClick={() => setProjectModalOpen(true)}>
              Create a Project
            </button>
          </div>
          <CreateProjectModal
            open={projectModalOpen}
            setOpen={setProjectModalOpen}
          />
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <Tab.Group>
                      <thead>
                        <tr>
                          <th
                            className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            colSpan={6}
                          >
                            Your Projects
                          </th>
                        </tr>
                        <tr>
                          <Tab.List className="flex p-1 space-x-1 ">
                            {Object.keys(categories).map((category) => (
                              <Tab
                                key={category}
                                className={({ selected }) =>
                                  classNames(
                                    "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                                    selected
                                      ? "bg-white shadow"
                                      : "text-blue-200 hover:bg-white/[0.12] hover:text-white"
                                  )
                                }
                              >
                                {category}
                              </Tab>
                            ))}
                          </Tab.List>
                        </tr>
                      </thead>
                      <Tab.Panels className="mt-2">
                      <tbody className="bg-white divide-y divide-gray-200 w-full flex-1">

                        {Object.values(categories).map((posts, idx) => (
                          <Tab.Panel
                            key={idx}
                            className={classNames(
                              "bg-white p-3",
                             
                            )}
                          >
                           
                              {posts.map((post) => (
                                <tr
                                  key={post.id}
                                  className="relative flex items-center justify-between p-3  hover:bg-coolGray-100 border-b border-gray-200"
                                >
                                  <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="flex items-center">
                                      <div className="flex-shrink-0 h-10 w-10">
                                        <div className="image"></div>
                                      </div>
                                      <div className="ml-4">
                                        <div className="text-sm leading-5 font-medium text-gray-900">
                                          {post.title}
                                        </div>
                                        <div className="text-sm leading-5 text-gray-500">
                                          Project Description
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-500">
                                      Project Status
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-500">
                                      Project Type
                                    </div>
                                  </td>
                                </tr>
                              ))}
                          </Tab.Panel>
                        ))}
                        </tbody>
                      </Tab.Panels>
                    </Tab.Group>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

// <tbody className="bg-white divide-y divide-gray-200">
//                         <tr>
//                           <td className="px-6 py-4 whitespace-no-wrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10">
//                                 <div className="image"></div>
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm leading-5 font-medium text-gray-900">
//                                   Project Name
//                                 </div>
//                                 <div className="text-sm leading-5 text-gray-500">
//                                   Project Description
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-no-wrap">
//                             <div className="text-sm leading-5 text-gray-500">
//                               Project Status
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-no-wrap">
//                             <div className="text-sm leading-5 text-gray-500">
//                               Project Type
//                             </div>
//                           </td>
//                         </tr>
//                         {/* When there are no projects */}
//                         <tr>
//                           <td className="px-6 py-4 whitespace-no-wrap" colSpan={3}>
//                             <div className="text-sm leading-5 text-gray-500">
//                               You don&apos;t have any projects yet.
//                             </div>
//                           </td>
//                         </tr>

//                       </tbody>
