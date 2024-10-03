import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RestaurantsItem } from "./item";


export interface RestProps{
    id: string,
    name: string,
    image: string
}

export function RestaurantsVerticalList () {
    const[restaurants, setRestaurants] = useState<RestProps[]> ([])

    useEffect(() => {
        async function getFoods(){
            const response = await fetch("http://192.168.0.4:3000/restaurants")
            const data = await response.json()
            setRestaurants(data);
        }
        
        getFoods();
    }, [])

    return(
        <View 
         className="px-4 flex-1 w-full h-full mb-11 gap-4"
        >
            {restaurants.map(item => (
                <RestaurantsItem item={item} key={item.id}/>
            ))}
        </View>
    )
    
}