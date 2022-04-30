import { StyleSheet, Text, View } from 'react-native';

export default function Bills() {
    return (
        <View style={styles.container}>
            <Text>Bills</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
