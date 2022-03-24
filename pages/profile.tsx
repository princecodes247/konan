import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DashboardHeader from "../components/DashboardHeader";

const Profile: NextPage = () => {
  return (
    <div>
      <DashboardHeader title="Profile" />
      <main>
        <div className="top flex p-4 bg-gray-200 h-44 flex-col sm:flex-row sm:p-10 items-center gap-6">
        
          
        </div>
        <div className="relative -mt-16 flex p-4 flex-col sm:flex-row sm:p-10 items-center gap-6">
          <div className="profilePic w-40 h-40 rounded-full border border-gray-700">
            
          </div>
          <div className="profileDesc text-center sm:text-left">
            <p className="profileName text-lg sm:text-2xl font-semibold">John Doe</p>
            <p className="profileBio text-gray-700">Im a Software developer</p>
            <div className="profileStats text-gray-500 text-sm">
              <p className="type">Type: Company</p>
              <p className="donations">Total Donations: 30ETHs</p>
            </div>
          </div>
        </div>
        <div className="bottom p-6 pt-3">
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
              Hasn&apos;t made any contributions yet...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
