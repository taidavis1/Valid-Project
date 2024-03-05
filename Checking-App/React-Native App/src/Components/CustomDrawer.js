import {DrawerContentScrollView,  DrawerItemList} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity , Image} from 'react-native';
import HomeScreen from '../views/HomeScreen';
import AdminScreen from '../views/AdminScreen';
import logo from '../img/Logo.png'
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons';

const CustomerDrawer = ({ isLoading, setIsLoading, ...props }) => {
    return(
		<SafeAreaProvider>
			<DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#0000'}}>
				<View className = "space-y-4 px-4 py-6">
					<Image className = "rounded-full ml-12 w-40 h-24" source={logo}/>
				</View>
				<View className = "pt-4 px-2">
					<DrawerItemList {...props} />
				</View>
			</DrawerContentScrollView>
			<View className = "shadow-md p-6">
				<TouchableOpacity onPress={() => setIsLoading(false)} className = "bg-[#5ef5f7] rounded-md flex flex-row justify-center text-center items-center gap-2"
					style={{paddingVertical: 15}}
				>
					<FontAwesomeIcon icon={ faRightToBracket } size={20} />
				</TouchableOpacity>
			</View>
        </SafeAreaProvider>
    );
};
export default CustomerDrawer;
