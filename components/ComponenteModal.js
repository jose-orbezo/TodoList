import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal } from 'react-native'

const ComponenteModal=({modalVisible, deleteItem, setModalVisible})=>{
    return(
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
    )
}   

export default ComponenteModal;

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