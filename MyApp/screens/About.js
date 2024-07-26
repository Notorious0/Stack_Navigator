import { Text,View,Image} from "react-native";

export const About = ()=>{
    return(
        <View style={{flex:1,
            backgroundColor:"white",
            alignItems:"center",
            }}>
                <Image 
                style={{width:"100%",height:200,borderBottomRightRadius:100}}
                source={require("../assets/bg.jpg")} />
                <Text style={{fontWeight:"bold",fontSize:30,color:"#03045e"}}>
                  About
                </Text>
            </View>
    );
};