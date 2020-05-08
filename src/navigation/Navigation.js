import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import  {createBottomTabNavigator}  from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';

//import SearchStack from "./SearchStack";
// import Search  from "../screens/Search";
// import Favorites from "../screens/Favorites";
// import Accounts from "../screens/Accounts"; 
// import TopRestaurants from "../screens/TopRestaurants";
import RestaurantsStack from "./RestaurantsStack";
import FavoriteStack from './FavoriteStack';
import TopRestaurantStack from './RestaurantsStack';
import SearchStack from './SearchStack';
import AcountStack from './AccountStack';
// import Restaurants from "../screens/Restaurants"

const Tabs  = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tabs.Navigator
            initialRouteName = "restaurants"
            tabBarOptions = {{

                inactiveTintColor: "#646464",
                activeTintColor : "#00a680",
            }}
            screenOptions = {({route})=> ({
                tabBarIcon : ({ color })=> screenOptions(route,color),
            })}
            >  
                <Tabs.Screen 
                name = "restaurants" 
                component = {RestaurantsStack}
                options ={{title:"Restaurantes"}}
                />
                 <Tabs.Screen 
                name = "search" 
                component = {SearchStack}
                options ={{title:"Buscador"}}
                />
                 <Tabs.Screen 
                name = "favorites" 
                component = {FavoriteStack}
                options ={{title:"Favoritos"}}
                />
                 <Tabs.Screen 
                name = "top-restaurants" 
                component = {TopRestaurantStack}
                options ={{title:"Top-5"}}
                />
                 <Tabs.Screen 
                name = "account" 
                component = {AcountStack}
                options ={{title:"Cuenta"}}
                />
                 
            </Tabs.Navigator>
        </NavigationContainer>

);

}

function screenOptions (route,color){
    let iconName;

    switch (route.name) {
        case "restaurants":
            iconName =  "compass-outline";
            break;
        case "favorites":
            iconName =  "heart-outline";
            break;
        case "top-restaurants":
            iconName =  "star-outline";
            break;
        case "search":
            iconName =  "magnify";
            break;
        case "account":
            iconName =  "home-outline";
            break;
    
        default:
            break;
    }
return(
    <Icon type='material-community' name={iconName} size={22} color={color}/>   
);


}