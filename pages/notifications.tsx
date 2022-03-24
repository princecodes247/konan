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
          
          <ul className="grid grid-cols-1 gap-4 p-3">
            <li className="p-3 border border-gray-300 flex items-center gap-6 rounded">
              <div className="coverPhoto w-4 h-4 bg-gray-300"></div>
              <div className="notificationDetails">
                <p className="notificationName font-semibold">Deposit of 3ETH made</p>
                <p className="notificationDesc text-gray-700 text-sm">Project help the boys</p>
              </div>
            </li>
            <li className="p-3 border border-gray-300 flex items-center gap-6 rounded">
              <div className="coverPhoto w-4 h-4 bg-gray-300"></div>
              <div className="notificationDetails">
                <p className="notificationName font-semibold">Deposit of 3ETH made</p>
                <p className="notificationDesc text-gray-700 text-sm">Project help the boys</p>
              </div>
            </li>
            <li className="p-3 border border-gray-300 flex items-center gap-6 rounded">
              <div className="coverPhoto w-4 h-4 bg-gray-300"></div>
              <div className="notificationDetails">
                <p className="notificationName font-semibold">Deposit of 3ETH made</p>
                <p className="notificationDesc text-gray-700 text-sm">Project help the boys</p>
              </div>
            </li>
            
          </ul>
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
