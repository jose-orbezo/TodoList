import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal } from 'react-native';

const ComponentFlatList=({items, onHandleModalDelete, onHandleModalEdit})=>{

    return(
        <FlatList data={items} 
        keyExtractor={item => item.id} 
        renderItem={({item})=>(
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Button title='Edit' onPress={()=>onHandleModalEdit(item)}/>
          <Button title='Borrar' onPress={()=>onHandleModalDelete(item)}/>
        </View>
      )}/>
    )
}

export default ComponentFlatList;

const styles = StyleSheet.create({
    text:{
      width:"70%"
    },
    item:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#9EA69A",
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:10,
    },
    itemText:{
      width:"60%",
    }
  })