//Extension ES7 React => rnfes + intro or + tab
import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal } from 'react-native';
import { useState} from 'react';
import uuid from 'react-native-uuid';
import ComponentModalDelete from './components/ComponentModalDelete';
import ComponentFlatList from './components/ComponentFlatList';
import ComponentModalEdit from './components/ComponentModalEdit';
//01:27:00 => Debug & Split Components- Pantalla compartida con vista del orador
const App = () => {
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  const [modalEditVisible, setModalEditVisible] = useState(false)
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

  const onHandleEditTitle=(t, id)=>{
    setEditTitle(t)
    setItemSelected({id:id, title:editTitle});
  }  

  // const numeros = [12, 34, 54];
  // const [numero1, numero2, numero3] = numeros;

  const onHandleModalDelete=(item)=>{
    setModalVisible(!modalVisible);
    setItemSelected(item);
  }

  const onHandleModalEdit=(item)=>{
    setModalEditVisible(!modalEditVisible);
    setItemSelected(item);
    setEditTitle(item.title);
  }

  const editItem=(itemId)=>{    
    const reporItems = items;
    const itemEditado = reporItems.findIndex(x=>x.id == itemId);

    reporItems[itemEditado].title = editTitle;

    setItems(reporItems);
    setEditTitle("");
    setModalEditVisible(!modalEditVisible);
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
      <ComponentFlatList items={items} onHandleModalDelete={onHandleModalDelete} onHandleModalEdit={onHandleModalEdit}/>      
      <ComponentModalDelete modalVisible={modalVisible} deleteItem={deleteItem} setModalVisible={setModalVisible}/>
      <ComponentModalEdit modalEditVisible={modalEditVisible} editTitle={editTitle} editItem={editItem} setModalEditVisible={setModalEditVisible} itemSelected={itemSelected} onHandleEditTitle={onHandleEditTitle}/>
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
