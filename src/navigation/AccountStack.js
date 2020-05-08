import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Accounts from "../screens/Accounts"; 

const Stack = createStackNavigator();

export default function AcountStack(){
 return (
    <Stack.Navigator>
        <Stack.Screen 
             name = "account"
             component = {Accounts}
             options =  {{title : "My Account"}}>
        </Stack.Screen>
        
    </Stack.Navigator>
 );

}
