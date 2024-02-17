import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal } from 'react-native'

const ComponentModalEdit=({modalEditVisible, editTitle, editItem, setModalEditVisible, itemSelected, onHandleEditTitle})=>{
    return(
        <Modal transparent={true} visible={modalEditVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Edit title: </Text>
                <TextInput placeholder='Ingrese título' value={editTitle} onChangeText={(t)=>onHandleEditTitle(t, itemSelected.id)}/>
                <View style={styles.modalContainerButtons}>
                  <Button title='Save' onPress={()=>editItem(itemSelected.id)}/>
                  <Button title='Cancelar' onPress={()=>{setModalEditVisible(false)}}/>
                </View>
              </View>
            </View>
      </Modal>
    )
}   

export default ComponentModalEdit;

const styles = StyleSheet.create({
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