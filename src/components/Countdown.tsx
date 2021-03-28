import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import Styles from '../styles/components/Countdown.module.css'


export function Countdown(){
    
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext)
    
    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('')

    return(
        <div>
            <div className={Styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {(hasFinished)? (
                <button 
                  disabled
                  className={Styles.countdownButton} 
                >
                   Ciclo terminado
               </button>
            ) : (
                <>
                    {(isActive)? (
                    <button 
                      type="button"
                      className={`${Styles.countdownButton} ${Styles.countdownButtonActive}`} 
                      onClick={resetCountdown}
                    >
                        Abortar ciclo
                    </button>
                    ) : (
                    <button 
                      type="button"
                      className={Styles.countdownButton} 
                      onClick={startCountdown}
                    >
                        Iniciar ciclo
                    </button>
                    )

                    }
                </>
            )

            }

            
           
        </div>
    )
}