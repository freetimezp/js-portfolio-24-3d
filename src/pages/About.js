import React, { useState } from "react";
import { Pannellum } from "pannellum-react";

import sea1 from '../images/sea-1.jpg';

const About = () => {
    const [currentScene, setCurrentScene] = useState(sea1);

    return (
        <div className="h-screen flex">
            <Pannellum
                width="100%"
                height="100%"
                image={currentScene}
                yaw={300}
                hfov={110}
                autoLoad
                autoRotate={-5}
                compass={true}
                showZoomCtrl={false}
                mouseZoom={false}
            >
            </Pannellum>
        </div>
    )
}
export default About;