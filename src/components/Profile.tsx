import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import Styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengesContext)

    return(
        <div className={Styles.profileContainer}>
            <img src="https://github.com/PedroRibasSerras.png" alt="Pedro R. Serras"/>
            <div>
                <strong>
                    Nome
                </strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>

    )
}