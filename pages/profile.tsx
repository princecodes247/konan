import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DashboardHeader from '../components/DashboardHeader'

const Profile: NextPage = () => {

  return (
    <div>
      <DashboardHeader title="Profile"/>
    <main>
      <div className="top flex p-4 bg-gray-400">
        <div className="profilePic">SS</div>
        <div className="profileName">
          John Doe
        </div>
      </div>
      <div className="profileStats">
        Total Donations: 30ETHs
        
      </div>
    </main>
    </div>
  )
}


export default Profile;
