import React, {useState} from "react";
import { 
  StyleSheet, 
  View,
  Text,
  TouchableOpacity
} from "react-native"

import GoalsInput from "../components/GoalsInput";
import GoalsList from "../components/GoalsList";

export default function AddGoals() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const removeGoalHandler = (index) => {
    setGoals((currentGoal) => {
      return currentGoal.filter((goal,goalIndex) => goalIndex !== index)
    });
  }

  const addGoalHandler = () => {
    if (!enteredGoalText.trim().length) return;
    setGoals((currGoals) => [
      ...currGoals,
      enteredGoalText
    ]);
    setEnteredGoalText('');
    hideModalHandler();
  }

  const showModalHandler = () => {
    setIsModalVisible(true);
  }

  const hideModalHandler = () => {
    setIsModalVisible(false);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        onPress={showModalHandler}
        style={styles.addGoalsBtn}
      >
        <Text style={styles.addGoalText}>Add Goals</Text>
      </TouchableOpacity>
      <View style={styles.seperator}></View>
      <GoalsInput 
        setGoals={setGoals} 
        enteredGoalText={enteredGoalText} 
        setEnteredGoalText={setEnteredGoalText}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        isModalVisible={isModalVisible}
        closeModal={hideModalHandler}
      />
      <GoalsList 
        goals={goals} 
        removeGoalHandler={removeGoalHandler} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  addGoalsBtn: {
    backgroundColor: '#0096FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 16
  },
  addGoalText: {
    color: 'white',
    fontWeight: 'bold'
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginVertical: 16
  }
});
