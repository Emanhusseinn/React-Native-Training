import React , {useState} from 'react';
import { Button, StyleSheet, Modal, TextInput, View, ScrollView, FlatList} from 'react-native';

const GoalInput =props=>{
  const[enteredGoal, setEnteredGoal] = useState('');
  const getInputHandler=(enteredText)=>{
    setEnteredGoal(enteredText) }
  


    console.log(props, 'these are my props')
    return( 
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.container}>
        <TextInput placeholder='course goal' 
        style={styles.input} onChangeText={getInputHandler}
        value={enteredGoal}/>
        <Button title='ADD' onPress={props.onAddGoal.bind(this,enteredGoal)}/>
      </View> 
      </Modal>
    
    )
}

export default GoalInput;


const styles = StyleSheet.create({ 
  container:{
    padding: 50,
    flex:1,
        justifyContent:'center',
        alignItems:'center'
  },
      input:{
        
        width:'80%',
        borderBottomColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10
      }
     
  });   