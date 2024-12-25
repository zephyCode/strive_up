import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

import GoalItem from './GoalItem';

export default function GoalsList({goals, removeGoalHandler}) {
    return (
        <View style={styles.goalsContainer}>
            {goals.length === 0 ?
                <View style={styles.noGoalsContainer}>
                    <Text
                        style={styles.noGoalText}
                    >
                        No goals to show maybe add one!
                    </Text>
                </View> : (
                    <FlatList data={goals} renderItem={(itemData) => {
                        return (
                            <GoalItem 
                                removeGoalHandler={removeGoalHandler} 
                                itemData={itemData}
                            />
                        )
                    }}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 8
    },
    noGoalsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noGoalText: {
        fontSize: 20,
        color: '#cccccc'
    },
});
