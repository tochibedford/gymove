import styles from '@styles/test.module.scss';
import SearchBar from "@components/atoms/searchbar/SearchBar";
import Button from "../../components/atoms/buttons/Button";
import Options from '@components/atoms/modals/Options'
import Avatar from '@components/atoms/avatar/Avatar'
import DateSummary from "@components/atoms/datesummary/DateSummary";
import MiniDateSummary from "@components/atoms/datesummary/MiniDateSummary";
import Notifications from "@components/atoms/notifications/Notifications";
import SideBar from '@components/molecules/sidebar/SideBar';

// use this file to test components
const Test = () => {
    const user = {
        name: "Peter Parkur",
        status: "Super Admin",
        image: "/assets/avatar.png"
    }

    const a = [{ name: "Edit" }, { name: "Delete" }, { name: "Force Finish" }];
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
                        height: "100vh",
                        width: "100%",
                        outline: "2px dashed #1DA7C5",
                        position: "relative"
                    }}> 
                        {/* : ) */}
                        <SideBar />
                        <button>Click this to toggle the sidebar</button>
                    </div>
                </div>
            </div>
        </div>
        /* End Code Here */
    );
}

export default Test;