import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import {Roboto_700Bold_Italic , Roboto_300Light_Italic} from "@expo-google-fonts/roboto";
import {Tangerine_400Regular , Tangerine_700Bold} from "@expo-google-fonts/tangerine";
import Background1 from "../img/bg-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import io from "socket.io-client"
import { faCircleCheck, faDeleteLeft , faPlusCircle , faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import Services from "../Components/Data";

export default function HomeScreen({ navigation }) {
    const [phoneArray, setPhoneArray] = React.useState([]);
    const [isClickName , setIsName] = React.useState(false);
    const [isClickService , setIsService] = React.useState(false);
    const [phone, setPhone] = React.useState("");
    const [name , setName] = React.useState("");
    const [listSer , setListSer] = React.useState([]);
    const [isClick, setIsClick] = React.useState(false);

    const socket = io.connect("http://24.199.101.67:8080");

    const [fontsLoaded] = useFonts({
        Roboto_700Bold_Italic,
        Tangerine_400Regular,
        Tangerine_700Bold,
        Roboto_300Light_Italic
    });


    function DismissKeyboard() {
        Keyboard.dismiss();
    }

    function handlePhoneNumber(number) {
        setPhoneArray(oldArray => [...oldArray, number]);
    }

    function handleService(service){

        setListSer(old => {
            if (old.includes(service)){
                return old;
            }else{
                return [...old , service];
            }
        });
    }

    function deleteNumber() {
        setPhoneArray(oldArray => {
            let updatedAray = [...oldArray];
            updatedAray.pop();
            return updatedAray;
        });
    }

    function deleteService() {
        setListSer(oldArray => {
            let updatedAray = [...oldArray];
            updatedAray.pop();
            return updatedAray;
        });
    }

    const handleChecking = (id , resp) => {
        alert(resp);
        setPhone("");
        setName("");
        setListSer([]);
        handleBtn(id);
        setIsName(false);
        setIsService(false);
        setPhoneArray([]);
    }

    const handle_test = () => {
        setPhone("");
        setName("");
        setIsClick(false);
        setIsName(false);
        setIsService(false);
        setPhoneArray([]);
        setListSer([]);
    }

    const handleBtn = (id) => {
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));
    };

    async function sendCheckIn(id) {
        if (phone === '' && listSer.length == 0 && name === '') {
            Alert.alert("Please Enter Everything !");
            return false;
        }
        else if (phone.length != 10){
            Alert.alert("Phone Number not in correct format");
            return false
        }
        else{
            try {
                socket.emit('check_in', {phone: phone , service: service , name : name});
                socket.on('check_data_app' , handleChecking(id));

            } catch (error) {
                console.error(error);
            }
        }
    }

    React.useEffect(() => {
        setPhone(phoneArray.join(""));
    }, [phoneArray]);

    return (
        <View>
            <ImageBackground className="w-full h-full" source={Background1}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        DismissKeyboard();
                    }}
                >
                    <View className="flex-1 justify-center items-center">
                        <View className="flex py-4 p-4 shadow-md backdrop-blur-lg bg-white/60 w-3/4 flex-col justify-center items-center space-y-6 rounded-lg"> 
                            {!isClickName?
                                (
                                    <View className = " w-full space-y-5 p-5 items-center">
                                        <TextInput
                                            className="
                                                border-2 border-[#9eccfa] rounded-full text-xl tracking-wider italic
                                                focus:ring-sky-600 focus:border-sky-600 text-center block py-4 px-2 w-5/6
                                            "
                                            onChangeText={setName}
                                            placeholder="Please Enter Your Name..."
                                            style={{fontFamily: 'Roboto_300Light_Italic'}}
                                        />
                                        <TouchableOpacity
                                            className="border-2 border-[#9eccfa] bg-[#9eccfa] items-center capitalize text-white text-center w-[250px] py-3 rounded"
                                            // onPress={() => navigation.navigate('Admin')}
                                            onPress={() => setIsName(!isClickName)}
                                        >
                                        <Text style= {{fontFamily: 'Tangerine_400Regular'}} className="text-4xl text-white">Next</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                                :
                                (
                                    !isClickService? 
                                    (
                                        <>
                                            {phone
                                                ?
                                                <View className="flex flex-row gap-2 justify-center items-center">
                                                    <TextInput
                                                        className="text-2xl mb-3"
                                                        keyboardType="default"
                                                        placeholder={phone}
                                                        value={phone}
                                                    />
                                                    <TouchableOpacity onPress={() => deleteNumber()}>
                                                        <FontAwesomeIcon icon={faDeleteLeft} size={40}></FontAwesomeIcon>
                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                <Text style = {{fontFamily: "Roboto_300Light_Italic"}} className = "text-2xl">Fill your number to check in</Text>
                                            }
                                            <View className="flex flex-row gap-5">
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center
                                                    border-2 border-sky-400 py-4 px-2 w-[100px] h-[100px] rounded-full
                                                    "
                                                    onPress={() => handlePhoneNumber(1)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">1</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                    "
                                                    onPress={() => handlePhoneNumber(2)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">2</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(3)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">3</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View className="flex flex-row gap-6">
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(4)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">4</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(5)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">5</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(6)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">6</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View className="flex flex-row gap-6">
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(7)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">7</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(8)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">8</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(9)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">9</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View className="flex flex-row gap-6">
                                                <TouchableOpacity
                                                    className="
                                                    flex flex-row justify-center text-center 
                                                    border-2 border-sky-400 text-xl py-4 px-2 w-[100px] h-[100px] rounded-full
                                                "
                                                    onPress={() => handlePhoneNumber(0)}
                                                >
                                                    <View className="flex flex-col justify-center text-center">
                                                        <Text className = "text-2xl">0</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity
                                                className="border-2 border-[#9eccfa] bg-[#9eccfa] items-center capitalize text-white text-center w-[250px] py-3 rounded"
                                                // onPress={() => navigation.navigate('Admin')}
                                                onPress={() => setIsService(!isClickService)}
                                            >
                                                <Text style= {{fontFamily: 'Tangerine_400Regular'}} className="text-4xl text-white">Next</Text>
                                            </TouchableOpacity>
                                        </>
                                    ):
                                    (
                                        <>
                                            {
                                                listSer.length > 0?
                                                    <View className="flex break-words flex-row gap-2 justify-center items-center">
                                                        <FlatList data={listSer} renderItem={({item , index}) =>
                                                            <Text className = "text-center text-xl text-black">{index + 1}) {item}</Text>
                                                            }
                                                        />
                                                        <TouchableOpacity onPress={() => deleteService()}>
                                                            <FontAwesomeIcon icon={faDeleteLeft} size={40}></FontAwesomeIcon>
                                                        </TouchableOpacity>
                                                    </View>
                                                :<Text style = {{fontFamily: "Roboto_300Light_Italic"}} className = "text-2xl">Choose your Service</Text>
                                            }

                                            {Services.map((s , index) => (
                                                <View className = " w-full" key={index}>
                                                    <TouchableOpacity
                                                        className="py-3 rounded-full shadow-lg  font-semibold tracking-wide flex flex-row items-center space-x-12 justify-center bg-[#5c9fe3]"
                                                        onPress={() => handleBtn(index)}
                                                    >
                                                        <Text className = "text-white tracking-wider text-sm lg:text-lg">{s.name}</Text>
                                                        {!isClick[index]? (<FontAwesomeIcon color='white' icon={faPlusCircle} size={20}></FontAwesomeIcon>):(<FontAwesomeIcon color='white' icon={faXmarkCircle} size={20}></FontAwesomeIcon>)}
                                                    </TouchableOpacity>
                                                    {isClick[index] &&
                                                        <>
                                                            {s.service.map((ser , id) => (
                                                                <View key={id} className = " p-3 flex items-center">
                                                                    <View className = " w-4/5">
                                                                        <TouchableOpacity
                                                                            className="py-2 shadow-lg font-semibold rounded-full tracking-wide bg-gray-500"
                                                                            onPress={() => handleService(ser)}
                                                                        >
                                                                            <Text className = "text-white text-center tracking-wider text-sm lg:text-lg">{ser}</Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                            ))}
                                                        </>
                                                    }
                                                </View>
                                            ))}

                                            <TouchableOpacity
                                                className="border-2 border-[#9eccfa] bg-[#9eccfa] items-center capitalize text-white text-center w-[250px] py-3 rounded"
                                                // onPress={() => navigation.navigate('Admin')}
                                                onPress={() => handle_test()}
                                            >
                                                <Text style= {{fontFamily: 'Tangerine_400Regular'}} className="text-4xl text-white">Submit</Text>
                                            </TouchableOpacity>
                                        </>
                                    
                                    )
                                )
                            }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
    );
}

// ... other code from the previous section