import Image from 'next/image'
import styles from '@styles/Button.module.scss'
import playButtonIcon from '@icons/PlayButton.svg'
import finishButtonIcon from '@icons/flag.svg'
import filterButtonIcon from '@icons/filterIcon.svg'
import addPlanButtonIcon from '@icons/addPlan.svg'

const Button = ({children, buttonType})=>{
    // button types can be  createWorkoutButton, startWorkoutButton, finishWorkoutButton, filterButton, addPlanButton
    return(
        <button className={`${styles.standardButton}
                            ${buttonType ===`startWorkoutButton`?  styles.startWorkout: '' }
                            ${buttonType ===`finishWorkoutButton`?  styles.finishWorkout: '' }
                            ${buttonType ===`createWorkoutButton`?  styles.createWorkout: '' }
                            ${buttonType ===`filterButton`?  styles.filter: '' }
                            ${buttonType ===`addPlanButton`?  styles.addPlan: '' }
                            `}>
            {buttonType === 'startWorkoutButton' && <Image className={styles.buttonIcon} src={playButtonIcon} alt="Start Workout Icon"/>}
            {buttonType === 'finishWorkoutButton' && <Image className={styles.buttonIcon} src={finishButtonIcon} alt="Finish Workout Icon"/>}
            {buttonType === 'createWorkoutButton' && <Image className={styles.buttonIcon} src={addPlanButtonIcon} alt="Finish Workout Icon"/>}
            {buttonType === 'filterButton' && <Image className={styles.buttonIcon} src={filterButtonIcon} alt="Finish Workout Icon"/>}
            {buttonType === 'addPlanButton' && <Image className={styles.buttonIcon}  src={addPlanButtonIcon} alt="Finish Workout Icon"/>}

            {buttonType !== 'addPlanButton' ? children: ''}
        </button>
    )
}

export default Button
