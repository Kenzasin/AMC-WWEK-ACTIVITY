import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

const KeyboardType = () => {
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [lastname, setLastName] = useState('');
const [firstname, setFirstName] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');


const validateEmail = (email) => {
return regex.test(email);
};

const handleSubmit = () => {
if (!validateEmail(email)) {
setError('Invalid email address');
Alert.alert('Error', 'Please enter a valid email address.');
return;
}


Alert.alert('Submitted Info', `First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}`);
};

return (
<View style={styles.container}>
<TextInput
style={styles.input}
placeholder="Enter First Name"
keyboardType="first-name"
onChangeText={(text) => setFirstName(text)}
/>
<TextInput
style={styles.input}
placeholder="Enter Last Name"
keyboardType="last-name"
onChangeText={(text) => setLastName(text)}
/>
<TextInput
style={styles.input}
placeholder="Enter Email"
keyboardType="email-address"
onChangeText={(text) => setEmail(text)}
/>
{error ? <Text style={styles.errorText}>{error}</Text> : null}
<TextInput
style={styles.input}
placeholder="Enter Phone Number"
keyboardType="phone-pad"
onChangeText={(text) => setPhone(text)}
/>
<TextInput
style={styles.input}
placeholder="Enter Password..."
secureTextEntry={true}
maxLength={16}
onChangeText={(text) => setPassword(text)}
/>
<TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
input: {
height: 40,
width: '80%',
borderColor: 'gray',
borderWidth: 1,
paddingHorizontal: 10,
marginVertical: 10,
borderRadius: 20,
},
errorText: {
color: 'red',
marginBottom: 10,
},
button: {
backgroundColor: 'lightgreen',
padding: 10,
borderRadius: 10,
marginTop: 10,
},
buttonText: {
color: 'white',
fontWeight: 'bold',
},
});

export default KeyboardType;