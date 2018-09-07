import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function NewDeck ({ style = {} }) {
    return (
        <View>
            <Text style={[style]}>I'm adding a new deck now.</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});