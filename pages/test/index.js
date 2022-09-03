import SearchBar from "@components/searchbar/SearchBar";
import Button from "../../components/buttons/button";

// use this file to test components
const Test = () => {
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

        </>
        /* End Code Here */
     );
}
 
export default Test;