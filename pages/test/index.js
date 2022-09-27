import styles from '@styles/test.module.scss';
import SearchBar from "@components/atoms/searchbar/SearchBar";
import Button from "../../components/atoms/buttons/Button";
import Options from '@components/atoms/modals/Options'
import Avatar from '@components/atoms/avatar/Avatar'
import DateSummary from "@components/atoms/datesummary/DateSummary";
import MiniDateSummary from "@components/atoms/datesummary/MiniDateSummary";
import Notifications from "@components/atoms/notifications/Notifications";
import SideBar from '@components/molecules/sidebar/SideBar';
import { useState } from 'react';
import Calendar from '@components/molecules/sidebar/Calendar';

// use this file to test components
const Test = () => {
    // states
    const [sideBarIsOpen, setsideBarIsOpen] = useState(true);

    const user = {
        name: "Peter Parkur",
        status: "Super Admin",
        image: "/assets/avatar.png"
    }

    const a = [{ name: "Edit" }, { name: "Delete" }, { name: "Force Finish" }];



    // event handlers
    const handleSideBarToggle = ()=>{
        setsideBarIsOpen(prev=>!prev)
    }

    return (
        /* Start Code Here */
        <div className={styles.bodyContainer}>
            <div className={styles.body}>
                <h1>
                    This is the test Route, Place components here to check them out visually : )
                </h1>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        Buttons - <i>Tochi</i>
                    </h2>
                    <Button buttonType='startWorkoutButton'>Start Workout Plan</Button>
                    <Button buttonType='finishWorkoutButton'>Set Finish</Button>
                    <Button buttonType='createWorkoutButton'>Create Workout Plan Now</Button>
                    <Button buttonType='filterButton'>Filter</Button>
                    <Button buttonType='addPlanButton'></Button>
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        Search Bar - <i>Tochi</i>
                    </h2>
                    <SearchBar />
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        Options - <i>Martins</i>
                    </h2>
                    <Options options={a}></Options>
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        Avatar - <i>Martins</i>
                    </h2>
                    <Avatar name={user.name} status={user.status} image={user.image}></Avatar>
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        DateSummary - <i>Martins</i>
                    </h2>
                    <DateSummary day={4} weekday="Mon"></DateSummary>
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        MiniDateSummary - <i>Martins</i>
                    </h2>
                    <MiniDateSummary day={4}></MiniDateSummary>
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        Notifications - <i>Tochi</i>
                    </h2>
                    <Notifications notifications={["1"]} messages={["hey"]} gifts={["lollipop"]} />
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        SideBar - <i>Tochi</i>
                    </h2>
                    <div style={{
                        width: "100%",
                        position: "relative"
                    }}> 
                        {/* : ) */}
                        <SideBar isOpen={sideBarIsOpen}/>
                        <button style={{
                            borderRadius: "30px",
                            width: "20rem",
                            height: "5rem",
                            outline: "1px solid $category-cycling-color",
                            boxShadow: `5px 5px 1px 0px #1DA7C5,
                                        10px 10px 3px black,
                                        15px 15px 2px #FF9331`,
                            cursor: "pointer"
                        }} onClick={handleSideBarToggle}>Click this to toggle the sidebar</button>
                    </div>
                </div>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        Calendar - <i>Tochi</i>
                    </h2>
                    <Calendar />
                </div>
            </div>
        </div>
        /* End Code Here */
    );
}

export default Test;