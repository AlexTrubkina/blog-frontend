import React from "react";
import FirstScreen from "./Components/FirstScreen/FirstScreen";

import LayOutPage from "./LayOut/LayOutPage";

const HomeScreen = (): JSX.Element => {

    return (
        <LayOutPage>
            <FirstScreen/>
        </LayOutPage>
    );
};

export default HomeScreen;