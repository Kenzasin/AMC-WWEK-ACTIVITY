import React, {useState} from 'react'
import{View, TextInput, StyleSheet, Text} from 'react-native';

const HandleInputExample = () => {
  const[text, setText] = useState('');

return(

  <View style ={styles.container}>
    <TextInput
    style = {styles.input}
    placeholder="Type here..."
    onChangeText={(value) => setText(value)}
     />
     <Text style={styles.displayText}>  You typed: {text}</Text>
  </View>
   );
};

const styles = StyleSheet.create({

container :{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',

},
 input: {
   height: 40,
   width: '80%',
   borderColor: 'blue',
   borderWidth: 1,
   paddingHorizontal: 10,
   borderRadius: 20,
 },

 displayText: {
   marginTop: 10,
   fontSize: 18,
 }

});

export default HandleInputExample;