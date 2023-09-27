/* eslint-disable react/jsx-key */
import { useState } from "react";
import { RestaurantInfo } from "../../components/RestaurantInfo/component"
import { Tabs } from "../../components/Tabs/component";
import { restaurants } from '../../constant/mock';


export const MainPage = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div>
            {restaurants.map((item) => (
                <Tabs 
                    onClick={() => setCurrent(restaurants.indexOf(item))} 
                    title={item.name}
                />
            ))}

            <RestaurantInfo index={current}/>
        </div>
    )
}