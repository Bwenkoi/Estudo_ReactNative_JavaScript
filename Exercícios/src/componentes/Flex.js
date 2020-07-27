import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        height: '100%'
    },
    norte: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centro: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    sul: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 50
    }
})

const Circulo = props => {
    return <View style={styles.circulo}/>
}

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo />
            </View>
            <View style={styles.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={styles.sul}>
                <Circulo />
            </View>
        </View>
    )
}