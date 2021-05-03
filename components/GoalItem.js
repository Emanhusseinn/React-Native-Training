import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';

const GoalItem =props=>{
    console.log(props, 'these are my props')
    return(
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
         <View style={styles.listItem}  >
    <Text >{props.title} hi </Text>
    </View>
    </TouchableOpacity>
    
    )
}  

export default GoalItem;


const styles = StyleSheet.create({ 
    listItem:{
      padding:10,
      backgroundColor:'orange',
      borderColor:'black',
      borderWidth: 1,
      margin: 4
    }
  });