import React from "react";
import HomeScreen from "../views/HomeScreen";
import AdminScreen from "../views/AdminScreen";
import CustomerDrawer from "../Components/CustomDrawer";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHome, faDashboard} from '@fortawesome/free-solid-svg-icons';

DrawerC = createDrawerNavigator();

const Drawer = ({isLoading, setIsLoading}) => {
    return (
        <DrawerC.Navigator drawerContent = 
            {props => <CustomerDrawer isLoading={isLoading} setIsLoading={setIsLoading} {...props} />}
            screenOptions = {{
                headerShown: false,
                drawerActiveBackgroundColor: '#5ef5f7',
                drawerActiveTintColor: 'black',
                drawerInactiveTintColor: '#333',
            }}>
            <DrawerC.Screen name = "Home" component = {HomeScreen} 
                options = {{
                    drawerIcon: ({color}) => (
                        <FontAwesomeIcon icon={ faHome } size={20} />
                    ),
                }}
            />
        </DrawerC.Navigator>
    );
};
export default Drawer;