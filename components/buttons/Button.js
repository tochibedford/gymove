import Image from 'next/image'
import playButtonIcon from '@icons/PlayButton.svg'
import finishButtonIcon from '@icons/flag.svg'
import filterButtonIcon from '@icons/filterIcon.svg'
import addPlanButtonIcon from '@icons/addPlan.svg'

const Button = ({children, buttonType})=>{
    // button types can be  createWorkoutButton, startWorkoutButton, finishWorkoutButton, filterButton, addPlanButton
    return(
        <button className={`standardButton ${buttonType ? buttonType:''}`}>
            {buttonType === 'startWorkoutButton' && <Image src={playButtonIcon} alt="Start Workout Icon"/>}
            {buttonType === 'finishWorkoutButton' && <Image src={finishButtonIcon} alt="Finish Workout Icon"/>}
            {buttonType === 'filterButton' && <Image src={filterButtonIcon} alt="Finish Workout Icon"/>}
            {buttonType === 'addPlanButton' && <Image src={addPlanButtonIcon} alt="Finish Workout Icon"/>}
            {children}
        </button>
    )
}

export default Button
