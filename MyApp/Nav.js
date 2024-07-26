import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { View } from "react-native";

const Stack =createNativeStackNavigator();

export const Nav = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" 
            component={Home} 
            options={{
                title:"Anasayfa",
                headerShadowVisible:false,
                headerRight:() =>(
                    <View style={{height:30,width:30,borderRadius:15,backgroundColor:"black"}}></View>
                )
            }}
            />
            <Stack.Screen name="about" component={About} options={{
                title:"Hakkında",
                headerShadowVisible:false,
                headerTitleAlign:"center",
                headerTintColor:"#ffffff",
                headerTransparent:true, 
                headerRight:() =><View style={{width:30,height:30,borderRadius:15,backgroundColor:"black"}}></View>
            }}/>
        </Stack.Navigator>
    );
};