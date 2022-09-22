import styles from "@styles/SideBar.module.scss"
import Image from "next/image"
import Button from "@components/atoms/buttons/Button"

// icons
import DashboardIcon from '@icons/DashboardIcon.svg'
import WStatisticIcon from '@icons/WStatisticIcon.svg'
import WPlanIcon from '@icons/WPlanIcon.svg'
import DistanceMapIcon from '@icons/DistanceMapIcon.svg'
import DietMoveMenuIcon from '@icons/DietMoveMenuIcon.svg'
import PersonalBrandIcon from '@icons/PersonalBrandIcon.svg'
import { useEffect, useRef } from "react"


const SideBar = () => {
    const menuElement = useRef(null)
    const menuSelector = useRef(null)

    useEffect(()=>{
        const menuEl = menuElement.current // .current may change by the time clean up runs, so this is better
        const handleMouseover = (e)=>{
            const currentTargetRect = e.currentTarget.getBoundingClientRect()
            const offsetYFromMenu = e.pageY - currentTargetRect.top
            const menuItemHeight = menuSelector.current.getBoundingClientRect().height
            menuSelector.current.style.top = `${menuItemHeight*Math.floor(offsetYFromMenu/menuItemHeight)}px`
        }
        menuEl.addEventListener("mouseover", handleMouseover, {passive: true})
        
        return ()=>{
            menuEl.removeEventListener("mouseover", handleMouseover, {passive: true})
        }
    }, [])
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Main Menu</div>
            <ul className={styles.menu} ref={menuElement}>
                <div className={styles.menuSelector} ref={menuSelector}></div>
                <li className={styles.menuItem}>
                    <div>
                        <Image src={DashboardIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Dashboard
                    </div>
                </li>
                <li className={styles.menuItem}>
                    <div>
                        <Image src={WStatisticIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Workout Statistic
                    </div>
                </li>
                <li className={styles.menuItem}>
                    <div>
                        <Image src={WPlanIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Workout Plan
                    </div>
                </li>
                <li className={styles.menuItem}>
                    <div>
                        <Image src={DistanceMapIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Distance Map
                    </div>
                </li>
                <li className={styles.menuItem}>
                    <div>
                        <Image src={DietMoveMenuIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Distance Map
                    </div>
                </li>
                <li className={styles.menuItem}>
                    <div>
                        <Image src={PersonalBrandIcon} alt="dashboard icon"/>
                    </div>
                    <div>
                        Distance Map
                    </div>
                </li>
            </ul>
            <div className={styles.callToAction}>
                <Button buttonType='createWorkoutButton'>Create Workout Plan Now</Button>
            </div>
            <div className={styles.endNote}>
                <div>Gymove Fitness Admin Dashboard</div>
                <div>© 2022 All Rights Reserved</div>
                <div className={styles.madeBy}>Made with ♥ by Tochi & Martins</div>
            </div>
        </div>
     );
}
 
export default SideBar;