//Extension ES7 React => rnfes + intro or + tab
import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal } from 'react-native'
import { useState} from 'react';
import uuid from 'react-native-uuid';

const App = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({});

  const onHandleTitle=(t)=>{
    setTitle(t);
  }

  const addItem=()=>{
    const newItem={
      id:uuid.v4(),
      title:title
    }

    setItems([...items,newItem]);
    setTitle("");
  }

  const numeros = [12, 34, 54];
  const [numero1, numero2, numero3] = numeros;

  const onHandleModalDelete=(item)=>{
    setModalVisible(!modalVisible);
    setItemSelected(item);
  }

  const deleteItem=()=>{
    setItems(items.filter(x=>x.id != itemSelected.id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }
  
  return (
    <View style={styles.container}>
      <TextInput placeholder='Ingrese título' value={title} onChangeText={onHandleTitle}/>
      <Button title='Guardar' onPress={addItem}/>
      <FlatList data={items} 
        keyExtractor={item => item.id} 
        renderItem={({item})=>(
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Button title='Borrar' onPress={()=>onHandleModalDelete(item)}/>
        </View>
      )}/>
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Quiere borrar el item?</Text>
            <View style={styles.modalContainerButtons}>
              <Button title='si' onPress={deleteItem}/>
              <Button title='no' onPress={()=>{setModalVisible(false)}}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    marginTop: 40
  },
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
    width:"70%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:"center",
    height:"30%"
  },
  modalContainerButtons: {
    marginTop: 30,
    flexDirection: "row"
  }
})
