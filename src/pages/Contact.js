import React, { useState } from "react";
import { Pannellum } from "pannellum-react";

import sea3 from '../images/sea-3.jpg';

const Contact = () => {
    const [currentScene, setCurrentScene] = useState(sea3);

    return (
        <div className="h-screen flex">
            <Pannellum
                width="100%"
                height="100%"
                image={currentScene}
                yaw={360}
                hfov={120}
                maxHfov={180}
                autoLoad
                autoRotate={-5}
                compass={true}
                showZoomCtrl={false}
                mouseZoom={false}
                title={"You can create what you want.."}
            >
            </Pannellum>
        </div>
    )
}

export default Contact;