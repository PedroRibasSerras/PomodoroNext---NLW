import Head from 'next/head'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { GetServerSideProps } from 'next'

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props:HomeProps) {

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar></ExperienceBar>
        <CountdownProvider>
          <section>
            <div >
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: level ? Number(level) : 1,
      currentExperience: currentExperience ? Number(currentExperience) : 0,
      challengesCompleted:challengesCompleted ? Number(challengesCompleted) : 0
    }
  }

}
