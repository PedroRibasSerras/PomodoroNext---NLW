import { createContext, ReactNode, useContext, useEffect, useState} from "react"
import { ChallengesContext } from "./ChallengesContext"

interface CountdownContextData{
    time: number,
    isActive: boolean,
    hasFinished: boolean,
    minutes: number,
    seconds: number,
    startCountdown: ()=>void,
    resetCountdown: ()=>void,
}

interface CountdownProviderProps{
    children: ReactNode;
}


export const CountdownContext = createContext({} as CountdownContextData)

let countdonwTimeout: NodeJS.Timeout

export function CountdownProvider({children}:CountdownProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext)

    const [time,setTime] = useState(0.1*60)
    const [isActive,setIsActive] = useState(false)
    const [hasFinished,setHasFinished] = useState(false)

    const minutes = Math.floor(time/60) 
    const seconds = time % 60

    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdonwTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(0.1*60)
    }

    useEffect(()=>{
        if(isActive && time > 0 ){
            countdonwTimeout = setTimeout(() => {setTime(time - 1)},1000)
        } 
        else if(isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge();
        }
    }, [isActive, time])
  

    return(
        <CountdownContext.Provider 
            value={{
                time,
                isActive,
                hasFinished,
                minutes,
                seconds,
                startCountdown,
                resetCountdown,
                
            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}