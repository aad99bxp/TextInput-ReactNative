import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';


//creating a TextInput and styling it through Internal Style
const App = () => {
  const [name,setName] = useState("");
  return (
     <View>
       <Text style={{fontSize: 30}}>Handle Text input</Text>
       <Text style={{fontSize: 18}}>Your name is {name}</Text>
       <TextInput
         style={styles.textInput }
         placeholder='Enter Your Name'
         value={name}
         onChangeText={(text)=>setName(text)}
       />
       <Button title='Clear' onPress ={()=>setName('')}/>
     </View>
  );
};


//Internal StyleSheet Below
const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'green',
    margin: 10
  }
});

export default App;
