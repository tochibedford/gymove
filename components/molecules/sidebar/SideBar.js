import styles from "@styles/SideBar.module.scss"
import Image from "next/image"
import Button from "@components/atoms/buttons/Button"

import DashboardIcon from '@icons/DashboardIcon.svg'
import WStatisticIcon from '@icons/WStatisticIcon.svg'
import WPlanIcon from '@icons/WPlanIcon.svg'
import DistanceMapIcon from '@icons/DistanceMapIcon.svg'
import DietMoveMenuIcon from '@icons/DietMoveMenuIcon.svg'
import PersonalBrandIcon from '@icons/PersonalBrandIcon.svg'


const SideBar = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Main Menu</div>
            <ul className={styles.menu}>
                <div className={styles.menuSelector}></div>
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