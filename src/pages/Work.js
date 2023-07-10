import React, { useState } from "react";
import { Pannellum } from "pannellum-react";

import forest1 from '../images/forest-1.jpg';

const Contact = () => {
    const [currentScene, setCurrentScene] = useState(forest1);

    return (
        <div className="h-screen flex">
            <Pannellum
                width="100%"
                height="100%"
                image={currentScene}
                yaw={360}
                hfov={400}
                autoLoad
                autoRotate={-5}
                compass={true}
                showZoomCtrl={false}
                mouseZoom={false}
                tooltip={showSomeText}
            >
            </Pannellum>
        </div>
    )
}

export const showSomeText = () => {
    return (
        <p className="w-[200px] h-[80px] bg-opacity-80 text-black">
            You can create what you want..
        </p>
    )
}
export default Contact;