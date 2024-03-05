import React, { useRef, useEffect, useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image , Platform, AppRegistry , TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import {Roboto_700Bold_Italic , Roboto_300Light_Italic} from "@expo-google-fonts/roboto";
import {Tangerine_400Regular , Tangerine_700Bold} from "@expo-google-fonts/tangerine";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './src/Components/Drawer';
import 'react-native-gesture-handler';
export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    function toHomeScreen() {
        setIsLoading(!isLoading);
        console.log(isLoading);
    }
    const [fontsLoaded] = useFonts({
        Roboto_700Bold_Italic,
        Tangerine_400Regular,
        Tangerine_700Bold,
        Roboto_300Light_Italic
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            {/* <TouchableWithoutFeedback onPress={resetTimer}> */}
                {
                    !isLoading
                    ?
                    <>
                        <View className = " bg-[#9eccfa] flex-1 justify-center items-center">
                            <Image className = "h-[350px]" source={require('./src/img/logo1.png')} />
                            <View className="flex flex-row justify-center">
                                <View className="flex flex-col justify-center space-y-6 text-center items-center">
                                    <Text className = "text-6xl text-white ml-4" style={styles.title}>Welcome to Our Salon</Text>
                                    <View>
                                        <TouchableOpacity
                                            className=" bg-white items-center capitalize text-center w-[250px] py-3 rounded"
                                            onPress={() => toHomeScreen()}
                                        >
                                            <Text style = {{fontFamily: "Roboto_300Light_Italic"}} className="text-2xl text-sky-500">Check In</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                    :
                    <Drawer isLoading={isLoading} setIsLoading={setIsLoading} />
                }
            {/* </TouchableWithoutFeedback> */}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    centered: {
        width: 500,
        height: 500,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        marginVertical: 2,
        fontFamily: "Tangerine_700Bold",
    },
});
