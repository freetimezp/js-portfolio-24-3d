import React, { useState } from "react";
import { Pannellum } from "pannellum-react";

import fantasyNight from '../images/fantasy_night.jfif';
import fantasyCave from '../images/fantasy_cave.jfif';
//import fantasySky from '../images/fantasy_sky.jfif';

const Home = () => {
    const [currentScene, setCurrentScene] = useState(fantasyNight);

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
                <Pannellum.HotSpot
                    type="custom"
                    pitch={-10}
                    yaw={-120}
                    handleClick={(evt, name) =>
                        setCurrentScene(currentScene !== fantasyNight ? fantasyNight : fantasyCave)
                    }
                />
            </Pannellum>
        </div>
    )
}
export default Home;