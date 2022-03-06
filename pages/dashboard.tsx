import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard: NextPage = () => {
  return (
    <div>
      <DashboardHeader />
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
          
  
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            colSpan={6}
                          >
                            Your Projects
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="image"></div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                  Project Name
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
                        {/* When there are no projects */}
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap" colSpan={3}>
                            <div className="text-sm leading-5 text-gray-500">
                              You don't have any projects yet.
                            </div>
                          </td>
                        </tr>
                        
                      </tbody>
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
