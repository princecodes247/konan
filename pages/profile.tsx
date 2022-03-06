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
      Profile
    </main>
    </div>
  )
}


export default Profile;
