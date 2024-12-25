import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
    Pressable
} from 'react-native';

export default function GoalItem({removeGoalHandler, itemData}) {
    return (
        <View
            key={itemData.index}
            style={styles.goalListItem}
        >
            <Text style={styles.goalText}>{itemData.item}</Text>
            <Pressable
                style={styles.deleteGoalItemBtn}
                android_ripple={{color: '#dddddd'}}
                onPress={() => removeGoalHandler(itemData.index)}
            >
                <Image style={styles.bin} source={require('../assets/bin.png')}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalListItem: {
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        margin: 8,
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    goalText: {
        color: 'white',
        flex: 4
    },
    deleteGoalItemBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    bin: {
        width: 20,
        height: 20
    }
});
