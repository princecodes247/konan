import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DashboardHeader from "../components/DashboardHeader";
import Link from "next/link";

const Notifications: NextPage = () => {
  return (
    <div>
      <DashboardHeader title="Profile" />
      <main>
        
        <div className="all p-6 pt-3">
          <h2 className="text-2xl text-center sm:text-left">Projects Contributed to</h2>
          <p className="text-center text-gray-500 text-sm mt-4 sm:text-left">7 projects</p>
          {/* <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 p-3">
            <li className="p-3 border border-gray-300 flex items-center gap-6 rounded">
              <div className="coverPhoto w-24 h-24 bg-gray-300"></div>
              <div className="projectDetails">
                <p className="projectName font-semibold">Help the boys</p>
                <p className="projectDesc text-gray-700 text-sm">Na wetin you suppose dey do be this</p>
              </div>
            </li>
            
          </ul> */}
          <div className="flex items-center justify-center ">
            <p className="font-medium text-center text-lg text-gray-600 my-10">
              No notifications yet... 
              <br />
              <Link href="explore">
                Check out some projects
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
