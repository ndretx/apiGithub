import { View, Text, Image, StyleSheet } from "react-native/types";

export default function UserDetailsPage ({user}){
   const []
   
   
    return(
        <View style={styles.containerList}>
        <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
        <Text style={styles.username}>{user.userName}</Text>
      </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: '15%',
      backgroundColor: "#333",
    },
    input: {
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal: 20,
      marginVertical: 20,
      backgroundColor: '#f5f5f5',
      width: 'auto',
      borderRadius: 20,
      fontSize: 20,
      
    },
    button: {
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 10,
      backgroundColor: "#4078c0",
      width: 80,
      height: 50,
      marginHorizontal: 10,
      marginVertical: 10,
    },
    containerList:{
      flexDirection:'row',
      marginHorizontal: 20,
      marginVertical: 20,
      backgroundColor: '#333',
      borderColor:'#fafafa',
      borderWidth: 0.5,
      width: 'auto',
      borderRadius: 8,
  
    },
   
    username: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical :20,
      color:"#4078c0",
      
    },
    
    avatar: {
      marginHorizontal: 20,
      marginVertical :15,
      width: 40,
      height: 40,
      borderRadius: 20,
    },
});