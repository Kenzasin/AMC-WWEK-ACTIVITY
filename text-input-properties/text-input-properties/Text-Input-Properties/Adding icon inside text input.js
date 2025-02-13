import React, {useState} from 'react'
import{View, TextInput, StyleSheet, Text} from 'react-native';
import{Ionicons} from '@expo/vector-icons';

const HandleInputExample = () => {
  const[text, setText] = useState('');

return(

  <View style ={styles.container}>
  <View style ={styles.inputContainer}>

  <Ionicons name="search" size={20} color="blue" style={styles.icon}/>

    <TextInput
    style = {styles.input}
    placeholder="Type here..."
    onChangeText={(value) => setText(value)}
     />
     </View>
     </View>

   );
};

const styles = StyleSheet.create({


icon: {
  marginRight: 10,
},

 container :{
   flex: 1,
   justifyContent:'center',
   alignItems: 'center',

},
 inputContainer: {
   flexDirection: 'row',
  width: '80%',
   borderColor: 'blue',
   borderWidth: 1,
   paddingHorizontal: 10,
   borderRadius: 20,
   alignItems: 'center',
   justifyContent: 10,
   
 },

 input: {
   flex: 1,
   fontSize: 16,
   height: 40,
 }

});

export default HandleInputExample;