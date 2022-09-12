import SearchBar from "@components/searchbar/SearchBar";
import Button from "../../components/buttons/button";
import Options from '@components/modals/Options'
import Avatar from '@components/avatar/Avatar'
import DateSummary from "@components/datesummary/DateSummary";
import MiniDateSummary from "@components/datesummary/MiniDateSummary";
import Notifications from "@components/notifications/Notifications";

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
        <>
            <h1>
                This is the test Route, Place components here to check them out visually : )
            </h1>
            <br />
            <br />
            <h2>
                Buttons
            </h2>
            <Button buttonType='startWorkoutButton'>Start Workout Plan</Button>
            <Button buttonType='finishWorkoutButton'>Set Finish</Button>
            <Button buttonType='createWorkoutButton'>Create Workout Plan Now</Button>
            <Button buttonType='filterButton'>Filter</Button>
            <Button buttonType='addPlanButton'></Button>
            <br />
            <br />
            <br />
            <br />
            <br />

            <h2>
                Search Bar
            </h2>
            <SearchBar />

            <h2>
                Options
            </h2>
            <Options options={a}></Options>
            <h2>
                Avatar
            </h2>
            <Avatar name={user.name} status={user.status} image={user.image}></Avatar>
            <h2>
                DateSummary
            </h2>
            <DateSummary day={4} weekday="Mon"></DateSummary>
            <h2>
                MiniDateSummary
            </h2>
            <MiniDateSummary day={4}></MiniDateSummary>

            <br />
            <br />
            <br />
            <br />
            <br />

            <h2>Notifications</h2>
            <Notifications notifications={["1"]} messages={["hey"]} gifts={["lollipop"]}/>
        </>
        /* End Code Here */
    );
}

export default Test;