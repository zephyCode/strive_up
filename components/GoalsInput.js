import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';

export default function GoalsInput({
  enteredGoalText,
  addGoalHandler,
  goalInputHandler,
  isModalVisible,
  closeModal
}) {
  return (
    <Modal style={{backgroundColor: "#1e085a"}} transparent={true} animationType="slide" visible={isModalVisible}>
      <View style={styles.centeredContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add your goals here!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={enteredGoalText.trim().length ? styles.addGoalBtn : styles.addGoalBtnDisabled}
              onPress={addGoalHandler}
              disabled={enteredGoalText.trim().length === 0}
            >
              <Text style={styles.addGoalText}>Add Goal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  inputContainer: {
    width: '80%',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16
  },
  addGoalBtn: {
    flex: 1,
    backgroundColor: '#0096FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  addGoalBtnDisabled: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  addGoalText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#f31282',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  cancelBtnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
